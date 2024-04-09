
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
  
  <div id="jumbo">
    <section class="main_j white d-flex a_center">
      <div class="j_title bold">
        <h6 class="mb-5 bold">
          Find the best animals supplies
        </h6>

        <p class="mb-5">
          We know animals are a part of your family, let us help take care of them.
        </p>

        <button class="btn btn-light m_btn">
          Learn more about us
        </button>
      </div>
    </section>
  </div>

</template>

<style lang="scss" scoped>

  @use '../../../assets/scss/main.scss' as *;

  #jumbo{
    background-image: url(/img/banner-5-x-scaled.jpg);
    background-size: cover;
    .main_j{
      background-color: rgba(0, 0, 0, 0.5);
      height: 500px;
      .j_title{
        width: 45%;
        padding-left: 200px;
        height: 50%;
        h6{
          text-transform: uppercase;
          font-size: 0.75rem;
        }
        p{
          font-size: 40px;
        }
        .m_btn{
          border-radius: 25px;
          padding: 8px 30px;
          font-size: 0.7rem;
          color: rgba(0, 0, 0, 0.7);
        }
      }
    }
  }

</style>