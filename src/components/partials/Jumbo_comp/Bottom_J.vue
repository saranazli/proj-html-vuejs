
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

  <section class="bottom_j paw_bg d-flex justify-content-center align-items-end">

    <div class="container-lg btm_h d-flex center">

      <div class="crock me-3">
        <img :src="`/img/${store.jumbo.btmImg}`" alt="btmImg">
      </div>

      <a 
      class="me-3 white"
      :href="store.icons.href"
      v-for="bottJ in store.jumbo.bottomJ"
      :key="`btm${bottJ}`">
        {{ bottJ }}
      </a>

    </div>

  </section>
  
</template>

<style lang="scss" scoped>

@use '../../../assets/scss/main.scss' as *;

  .bottom_j{
    height: 140px;
    .btm_h{
      height: 125px;
      .crock{
        width: 230px;
      }
      a:last-child{
        text-decoration: underline;
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }

</style>