Vue.config.devtools = true;
var app = new Vue({
	el: '#app', 
	data: {
		product: 'Socks',
		image: './img/vmSocks-green-onWhite.jpg',
		description: 'Socks',
		link: 'http://www.jonathanslima.github.io',
		stock: 0,
		details: [
			'80% cotton', '20% poliester', 'Gender-neutral'
		]
	}
});