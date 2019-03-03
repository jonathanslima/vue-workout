<template>
  <div id="app">
    <h1 class="centralizado">{{ title }}</h1>

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="image in images">
        <!-- Add component passing data to it -->
        <meu-painel :titulo="image.titulo">
          <img class="imagem-responsiva" :src="image.url" :alt="image.titulo">
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
// Import component  
import Painel from './components/shared/painel/Painel.vue'

// declare painel to use at page
export default {
  components: {
    "meu-painel": Painel
  },
  data () {
    return{
      title: 'Alurapic',
      images: []
    }
  },
  created (){
    // call a promise
    let promise = this.$http.get('http://localhost:3000/v1/fotos');

    // resolve promise and then get data
    promise
      .then(res => res.json())
      .then(images => this.images = images, err => console.log(err))
  }
}
</script>

<style>
  body{
    font-family: Helvetica;
    width: 96%;
    margin: 0 auto;
  }

  .centralizado{
    text-align: center;
  }

  .lista-fotos{
    list-style: none;
  }

  .lista-fotos-item{
    display: inline-block;
  }

  .imagem-responsiva {
    width: 100%;
  }
</style>
