<script>

  import  {store} from '../../../assets/data/store';

  export default {
    data(){
      return{
        store
      }
    }
  }

</script>

<template>

  <div class="b_nav d-flex center">
    <a 
    class="px-4 fs-6"
    value="nav" 
    v-for="navChoice in store.bottomNavBar" 
    :key="navChoice">
      {{ navChoice }}
    </a>
  </div>

  
</template>

<style lang="scss" scoped>

  @use '../../../assets/scss/main.scss' as *;

  .b_nav{
    height: 60px;
    widows: 100%;
    a:first-child{
      font-weight: bold;
    }
    a:nth-child(-n + 2)::after{
      font-family: "Font Awesome 5 Free" !important;
      content: "\f078" !important;
      font-weight: 900;
      font-size: 0.8rem;
      padding-left: 10px;
    }
    a:last-child::after{
      font-family: "Font Awesome 5 Free" !important;
      content: "\f078" !important;
      font-weight: 900;
      font-size: 0.8rem;
      padding-left: 10px;
    }
  }

</style>
