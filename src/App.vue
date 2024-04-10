<script>

  import Main from './components/Main.vue';
  import Footer from './components/Footer.vue';
  import Header from './components/Header.vue';
  import Jumbotron from './components/Jumbotron.vue';
  export default {

    components: {

      Header,
      Jumbotron,
      Main,
      Footer

    }
  }

</script>

<template>
  
  <Header />

  <Jumbotron />
  
  <Main />

  <Footer />

</template>

<style lang="scss" scoped>

</style>
