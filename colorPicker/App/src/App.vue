<template>
  <div id="app" class="container center">
    <ColorPicker></ColorPicker>
  </div>
</template>

<script>
import ColorPicker from './components/ColorPicker.vue'

export default {
  components: {
    'ColorPicker': ColorPicker
  }
}
</script>

<style lang="scss">
  @import './src/assets/sass/main.scss'
</style>
