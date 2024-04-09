
<script>

  import {store} from '../../../assets/data/store';

  export default {

    data() {
      return {
        store
      }
    }

  }

</script>

<template>
  
  <section class="main_j">
    <img :src="`/img/${store.jumbo.j_img}`" alt="jumbo_pic">
  </section>

</template>

<style lang="scss" scoped>

</style>