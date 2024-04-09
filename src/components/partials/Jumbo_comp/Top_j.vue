
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
  <section class="top_j d-flex center white">
    <div class="container-xl d-flex around center">

      <div>
        <span class="me-2">
          <i class="fa-regular fa-map"></i>
        </span>
        <span class="bold">
          International
        </span>
        <span class="opac">
          Shipping Service
        </span>
      </div>

      <div>
        <span class="me-2">
          <i class="fa-regular fa-clock"></i>
        </span>
        <span class="opac">
          See our
        </span>
        <span class="bold">
          store hours
        </span>
        <span class="opac">
          and service
        </span>

      </div>

      <div>
        <span class="me-2">
          <i class="fa-solid fa-check"></i>
        </span>
        <span class="opac">
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
    font-size: 0.8rem;
    .opac{
      opacity: 0.7;
    }
  }

</style>