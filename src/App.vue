<script>

  import Main from './components/Main.vue';
  import Footer from './components/Footer.vue';
  import Header from './components/Header.vue';

  export default {

    components: {

      Header,
      Main,
      Footer

    }
  }

</script>

<template>
  
  <Main />

  <Footer />

</template>

<style lang="scss" scoped>

  @use './assets/scss/main.scss';

</style>
