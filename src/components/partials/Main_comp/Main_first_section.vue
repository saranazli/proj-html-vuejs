
<script>

  import {store} from '../../../assets/data/store';
  import WhiteCard from './partials main/card_white.vue';


  export default {
    components: {
      WhiteCard
    },
    data() {
      return {
        store
      }
    }
  }
</script>

<template>

  <section class="container text-center">

    <div class="title_main">

      <h1 class="mb-3">
        Browse by category
      </h1>

      <p class="title_p">
        Aspernatur blanditiis nobis maiores, optio possimus magni voluptatibus rerum quia velit accusantium architecto! Dignissimos nobis, cupiditate fugiat praesentium voluptatibus, porro possimus vero expedita provident placeat voluptates perferendis!
      </p> 

    </div>

    <div class="white_con mt-3">
      <white-card
        class="white_card_category text-center mx-2"
        v-for="(white, index) in store.main.whiteCategory"
        :key="`wc${index}`"
        :whiteC="white" />
    </div>
      
  </section>

</template>


<style lang="scss" scoped>

  .title_main{
    width: 70%;
    margin: 0 auto;
    h1{
      color: rgba(0, 0, 0, 0.8);
      font-weight: 400;
      margin-top: 120px;
    }
    .title_p{
      line-height: 25px;
    }
  }
  .white_con{
    display: flex !important;
    .white_card_category{
      max-width: 330px;
      max-height: 410px;
    }
  }

</style>