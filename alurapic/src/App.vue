<template>
  <div id="app">
    <h1 class="centralizado">{{ title }}</h1>

    <input type="search" class="filtro" placeholder="Filtrar por titulo" @input="filtro = $event.target.value" />

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="image in imageFiltered">
        <!-- Add component passing data to it -->
        <meu-painel :titulo="image.titulo">
          <imagem-responsiva :url="image.url" :titulo="image.titulo"></imagem-responsiva>
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
// Import component  
import Painel from './components/shared/painel/Painel.vue';
import ImagemResponsiva from './components/shared/imagem-reponsiva/ImagemResponsiva.vue';

// declare painel to use at page
export default {
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva,
  },
  data () {
    return{
      title: 'Alurapic2',
      images: [],
      filtro: ''
    }
  },
  computed: {
    imageFiltered(){
      if(this.filtro){
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.images.filter(image => exp.test(image.titulo));

      }else{
        return this.images;
      }
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
    padding: 0
  }

  .lista-fotos-item{
    display: inline-block;
    width: 22%;
    margin: 0 1.5%;
  }

  .filtro{
    width: 100%;
    padding: 10px;
  }
</style>
