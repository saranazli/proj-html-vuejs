
<script>

  import { store } from '../../../assets/data/store';

  import '@fortawesome/fontawesome-free/css/all.css';
  import '@fortawesome/fontawesome-free/js/all.js';

  export default {

    data() {
      return {
        store
      }
    }
  }

</script>


<template>
  
  <section class="cs_header">

    <div class="container d-flex justify-content-center justify-content-between align-items-center h-100">
      
      <div class="logo_front">
        <img :src="`/img/${store.topNavBar.logo}`" alt="logo">
      </div>
  
      <div class="search_b d-flex justify-content-center justify-content-between align-items-center">
        <i class="fa-solid fa-magnifying-glass ps-4"></i>
        <input class="form-control" type="text" placeholder="search...">
      </div>
  
      <div>
        <span class="bold me-2">Questions ?</span>
        <span class="me-2">Call us: {{ store.topNavBar.phoneNumber }}</span>
      </div>
  
      <div>
        <ul class="d-flex">
          <li class="mx-2"
          v-for="(icon, index) in store.icons" 
          :key="index">
            <a 
            v-html="icon.icon" 
            :href="`ic${icon.href}`">
            </a>
          </li>
        </ul>
      </div>
  
    </div>

  </section>
  
</template>


<style lang="scss" scoped>

  @use '../../../assets/scss/main.scss' as *;

  
  .cs_header{
    height: 75px;
    border-bottom: 0.5px solid grey ;
    .search_b{
      background-color: $s_light_grey;
      border-radius: 50px;
      width: 370px;
    }
    .logo_front{
      width: 240px;
      height: 40px;
    }
  }

</style>