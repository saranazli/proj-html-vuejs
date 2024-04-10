
<script>

  import { store } from '../assets/data/store';
  import Top_F from './partials/Footer_comp/Top_F.vue';
  import Center_F from './partials/Footer_comp/Center_F.vue';
  import Bottom_F from './partials/Footer_comp/Bottom_F.vue';

  export default{

    components : {
      Top_F,
      Center_F,
      Bottom_F
    },

    data(){
      return{
        store
        
      }
    }
  }

</script>

<template>

  <footer>

    <Top_F />

    <Center_F />

    <Bottom_F />

  </footer>

</template>

<style lang="scss" scoped>

  footer{
    height: 850px;
  }


</style>