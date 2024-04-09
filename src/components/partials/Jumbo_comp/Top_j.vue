
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
  <section class="top_j d-flex center">
    <div class="container-xl d-flex around center">

      <div>
        <span class="me-2">
          <i class="fa-regular fa-map"></i>
        </span>
        <span class="bold">
          International
        </span>
        <span>
          Shipping Service
        </span>
      </div>

      <div>
        <span class="me-2">
          <i class="fa-regular fa-clock"></i>
        </span>
        <span>
          See our
        </span>
        <span class="bold">
          store hours
        </span>
        <span>
          and service
        </span>

      </div>

      <div>
        <span class="me-2">
          <i class="fa-solid fa-check"></i>
        </span>
        <span>
          We price match to give you the
        </span>
        <span class="bold">
          best deals
        </span>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>

  @use '../../../assets/scss/main.scss' as *;

  .top_j{
    height: 65px;
    background-color: $heavy_metal_green;
    background-image: url(/img/bg-transparent-3.png);
    color: white;
    font-size: 0.75rem;
  }

</style>