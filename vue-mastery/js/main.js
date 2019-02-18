Vue.config.devtools = true;
var app = new Vue({
	el: '#app', 
	data: {
		product: 'Socks',
		image: './img/vmSocks-green-onWhite.jpg',
		description: 'Socks',
		link: 'http://www.jonathanslima.github.io',
		inStock: true,
		details: ['80% cotton', '20% poliester', 'Gender-neutral'],
		variants: [
			{
				variantId: 2234,
				variantColor: 'green',
				variantImage: './img/vmSocks-green-onWhite.jpg'
			},
			{
				variantId: 2235,
				variantColor: 'blue',
				variantImage: './img/vmSocks-blue-onWhite.jpg'
			}
		],
		sizes: ['P', 'M', 'G'],
		cart: 0
	},
	methods: {
		addToCart: function(){
			this.cart += 1;
		},
		updateProduct: function(variantImg){
			this.image = variantImg;
		}
	}
});