Vue.config.devtools = true;
Vue.component('product', {
	props: {
		premium: {
			required: true,
			type: Boolean
		},
		costshipping: {
			required: true,
			type: Number			
		}
	},
	template: `
		<div class="product">
			<div class="product-image">
				<a :href="link">
					<img :src="image" :alt="description">
				</a>
			</div>

			<div class="product-info">
				<h1>{{ title }}</h1>
				<p v-if="inStock">In stock</p>		
				<p v-else :class="inStock == false ? 'line-through' : ''">Out of stock</p>
				<p>shipping: {{ shipping }}</p>
				
				<ul>
					<li v-for="item in details">{{ item }}</li>
				</ul>

				<div v-for="(variant, index) in variants" 
					@mouseover="updateProduct(index)" 
					@click="addToCart"
					:key="variant.variantId"
					class="color-box"
					:style="{'background-color': variant.variantColor}">
				</div>
				<ul>
					<li><span v-for="size in sizes" >{{ size + '/ ' }}</span></li>
				</ul>

				<button @click="addToCart" 
				:disabled="!inStock"
				:class="inStock == false ? 'disabledButton' : ''">Add</button>

				<button @click="removeToCart">Remove</button>
			</div>
		</div>
	`,
	data(){
		return {
			brand: 'Vue Mastery',
			product: 'Socks',
			selectedVariant: 0,
			description: 'Socks',
			link: 'http://jonathanslima.github.io',
			details: ['80% cotton', '20% poliester', 'Gender-neutral'],
			variants: [
				{
					variantName: 'Green Socks',
					variantId: 2234,
					variantColor: 'green',
					variantImage: './img/vmSocks-green-onWhite.jpg',
					variantQtd: 10
				},
				{
					variantName: 'Blue Socks',
					variantId: 2235,
					variantColor: 'blue',
					variantImage: './img/vmSocks-blue-onWhite.jpg',
					variantQtd: 5
				}
			],
			sizes: ['P', 'M', 'G'],
		};
	},
	methods: {
		addToCart: function(){
			this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId, this.variants[this.selectedVariant].variantName);
		},
		removeToCart: function(){
			this.$emit('remove-to-cart', this.variants[this.selectedVariant].variantId, this.variants[this.selectedVariant].variantName);
		},
		updateProduct: function(index){
			this.selectedVariant = index;
		}
	},
	computed: {
		title(){
			return this.brand + ' ' + this.product;  
		},
		image(){
			return this.variants[this.selectedVariant].variantImage
		},
		inStock(){
			return this.variants[this.selectedVariant].variantQtd
		},
		shipping(){
			if(this.premium){
				return 'Free'
			}
			return this.costshipping
		}
	}
});
var app = new Vue({
	el: '#app',
	data: {
		costshipping: 2.99,
		premium: false,
		cart: [],
		productsInCart: []
	},
	methods: {
		addItemToCart(id, name){
			this.cart.push(id);
			this.productsInCart.push(name)
		},
		remItemFromCart: function(index, name){
			var i = this.cart.indexOf(index);
			var j = this.productsInCart.indexOf(name);
			
			if(i != -1) {
				i = this.cart.splice(i, 1);
			}

			if(j != -1) {
				j = this.productsInCart.splice(j, 1);
			}
		}
	}
});