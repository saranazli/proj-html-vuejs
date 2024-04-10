
<script>
  import  {store} from '../../../assets/data/store';

  export default {
    data(){
      return{
        store
      }
    }
  }
</script>

<template>
  
  <section id="center_f">

    <div>

      <div class="d-flex white center">

        <a 
        class="home_link fs-6 mx-4 mt-5 mb-4"
        v-for="(footLink, index) in store.footer.centerFooter.homeLinks"
        :key="`ft${index}`"
        :href="footLink.href">
        {{ footLink.name }}
        </a>

      </div>

      <div class="d-flex center">

        <a
        class="white fs-5 m-4"
        v-for="(social, index) in store.footer.centerFooter.socialLinks"
        :key="`st${index}`"
        :href="social.href"
        v-html="social.name"
        target="_blank">
        </a>

      </div>

    </div>

  </section>

</template>

<style lang="scss" scoped>

  @use '../../../assets/scss/main.scss' as *;

  #center_f{
    background-color: $heavy_metal_green;
    height: 250px;
    .home_link{
      text-transform: capitalize;
      opacity: 0.6;
    }
    .home_link:first-child{
      font-weight: bold;
      opacity: 1
    }
  }

</style>