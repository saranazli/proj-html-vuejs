
<script>

  import { store } from '../../../assets/data/store';

  import '@fortawesome/fontawesome-free/css/all.css';
  import '@fortawesome/fontawesome-free/js/all.js';

  export default {
    data(){
      return{
        store
      }
    }
  }

</script>


<template>
  
  <section class="cs_header">

    <div class="container d-flex justify-content-center justify-content-between align-items-center h-100">
      
      <div class="logo_front">
        <img src="/img/dark-pet-logo-x.png" alt="logo">
      </div>
  
      <div>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="search...">
      </div>
  
      <div>
        <span>Questions ? </span>
        <span>Call us: {{ store.phoneNumber }}</span>
      </div>
  
      <div>
        <i class="fa-solid fa-bag-shopping"></i>
        <i class="fa-solid fa-user"></i>
      </div>
  
    </div>

  </section>
  
</template>


<style lang="scss" scoped>

  @use '../../../assets/scss/main.scss';

  
  .cs_header{
    height: 75px;
    border-bottom: 0.5px solid grey ;
    .logo_front{
      width: 240px;
      height: 40px;
    }
  }

</style>