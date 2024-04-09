
<script>
  import Nav_top from './partials/Header_components/Nav_top.vue';
  import Nav_bottom from './partials/Header_components/Nav_bottom.vue';
  import {store} from '../assets/data/store';

  export default {

    components:{

      Nav_top,
      Nav_bottom

    },

    data(){
      return{
        store
      }
    }

  }
</script>

<template>
  
  <section>

    <Nav_top />
    
    <Nav_bottom />

  </section>

</template>

<style lang="scss" scoped>

 

</style>