<!-- Create component -->  
<template>
  <div class="painel">
    <h2 class="painel-titulo" @dblclick="visivel = !visivel">{{ titulo }}</h2>
    <transition name="fadePainel">
      <div class="painel-conteudo" v-show="visivel">
        <slot></slot>
      </div>
    </transition> 
  </div>
</template>

<script>
  // receive data from his father (component)
  export default {
    props: [
      'titulo',
    ],
    data(){
      return{
        visivel: false
      }
    }
  };
</script>

<style>
  .painel {
      display: inline-block;
      box-shadow: 0px 5px 10px grey;
      height: 100%;
      width: 100%;
      vertical-align: top;
      text-align: center;
      margin-bottom: 10px;
    }

    .painel .painel-titulo {
      text-align: center;
      border: solid 2px;
      background: lightblue;
      margin: 0 0 15px 0;
      padding: 10px;
      text-transform: uppercase;
    }

    /*
    .fadePainel-enter
    .fadePainel-enter-active
    .fadePainel-leave-active*/

    .fadePainel-enter, .fadePainel-leave-active {
      opacity: 0
    }

    .fadePainel-enter-active, .fadePainel-leave-active {
      transition: opacity .4s
    }
</style>
