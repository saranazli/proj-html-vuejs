
<script>

  import {store} from '../../../../assets/data/store';

  export default {
    props: {
      whiteC : Object
    },
    data() {
      return{
        store
      }
    }
  }

</script>

<template>
  
  <div>
    <div class="img_cont">
      <img :src="`/img/${whiteC.pic}`" alt="category_pic">
    </div>
    <p>
      {{ whiteC.text }}
    </p>
  </div>
  
</template>


<style lang="scss" scoped>

  @use '../../../../assets/scss/main.scss' as *;

  .img_cont{
    max-width: 330px;
    max-height: 330px;
  }
  p{
    height: calc(410px - 330px);
  }
</style>