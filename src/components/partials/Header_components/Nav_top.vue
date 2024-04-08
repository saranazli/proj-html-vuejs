
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
  
  <section class="container">
      
    <div class="logo_front">
      <img src="/public/img/dark-pet-logo-x.png" alt="logo">
    </div>

    <div>
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="search...">
    </div>

    <div>
      <span>Questions</span>
      <span>Call us: 1.800.123.4567</span>
    </div>

    <div>
      <i class="fa-solid fa-bag-shopping"></i>
      <i class="fa-solid fa-user"></i>
    </div>

  </section>
  
</template>


<style lang="sss" scoped>

  @import '../../../assets/scss/main.scss';

  .logo_front{
    width: 240px;
    height: 490px;
  }

</style>