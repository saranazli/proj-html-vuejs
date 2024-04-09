
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
  <section class="top_j">

  </section>
</template>

<style lang="scss" scoped>

  @use '../../../assets/scss/main.scss' as *;

  .top_j{
    height: 65px;
    background-color: $heavy_metal_green;
    background-image: url(/img/bg-transparent-3.png);
  }

</style>