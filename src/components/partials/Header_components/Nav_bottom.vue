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
    class="px-4"
    value="nav" 
    v-for="navChoice in store.bottomNavBar" 
    :key="navChoice">
      {{ navChoice }}
      <i class="fa-solid fa-chevron-down"></i>
    </a>
  </div>

  
</template>

<style lang="scss" scoped>

  @use '../../../assets/scss/main.scss' as *;

  .b_nav{
    height: 60px;
    widows: 100%;
  }

</style>
