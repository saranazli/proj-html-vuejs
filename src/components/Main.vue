
<script>

  import {store} from '../assets/data/store';
  import MainFirst from './partials/Main_comp/Main_first_section.vue';

  export default{

    components: {
      MainFirst
    },
    data() {
      return {
        store
      }
    }

  }

</script>

<template>
  
  <MainFirst />

</template>

<style lang="scss" scoped>

  @use '../assets/scss/main.scss' as*;


</style>