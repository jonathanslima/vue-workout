<template>
	<section id="colorpicker" class="colorpicker section-margin">
		<header class="section-margin">
			<h1 class="title ">{{ title }}</h1>
		</header>

		<figure class="nospace img-color-pck">
				<img class="section-padding" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqjEzluaAGNF6eHuXRZ4YCLkYZCPKxs6rHQ_Z_AEWCNrFgighJ">
		</figure>

		<footer class="section-padding">
			<input class="colorPck" type="color" @change="getValFromColorPicker" value="#bada55" />
			<input class="colorPckInput input" type="text" @change="getValFromInput" value="#bada55" />
		</footer>
	</section>
</template>

<script>
	export default{
		data (){
			return{
				title: 'Click to pick one color'
			}
		},
		methods: {
			getValFromColorPicker: () => {
				document.querySelector('.colorPckInput').value = document.querySelector('.colorPck').value;
			},
			getValFromInput: () => {
				document.querySelector('.colorPck').value = document.querySelector('.colorPckInput').value;
			}
		}
	}
</script>

<style scoped lang="scss">
	@import './src/assets/sass/main.scss';

	.colorPck{ cursor: pointer; }
	.img-color-pck img{ 
		width: 10%; 
	  animation: spinsun 20s infinite linear;
	}

	@keyframes spinsun {
  	0% { transform: rotate(0); }
	  100% { transform: rotate(-360deg); }
	}
</style>