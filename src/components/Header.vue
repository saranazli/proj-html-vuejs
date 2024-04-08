
<script>
  import Nav_top from './partials/Header_components/Nav_top.vue';
  import Nav from './partials/Header_components/Nav.vue';
  import {store} from '../assets/data/store';

  export default {

    components:{

      Nav_top,
      Nav

    },

    data(){
      return{
        store
      }
    }

  }
</script>

<template>
  
  <section class="container d-flex justify-content-center justify-content-between cs_header align-items-center">

    <Nav_top />
    
    <Nav />

  </section>

</template>

<style lang="sss" scoped>

  .cs_header{
    height: 135px;
  }

</style>