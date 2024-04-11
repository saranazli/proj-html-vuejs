
<script>

</script>

<template>
  
  <section id="bottom_f">
    
    <div class="copy">
      <div class="d-flex center h-100"> 
        <span class="right">Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All Rights Reserved| powered by WordPress</span>
      </div>
    </div>

  </section>

</template>

<style lang="scss" scoped>

  @use '../../../assets/scss/main.scss' as *;

  #bottom_f{
    background-color: black;
    height: calc( 850px - 250px - 480px);
  }

  .copy{
    color: white;
    height: 100%;
  }

  .right::before{
    font-family: "Font Awesome 5 Free" !important;
    content: "\f1f9" !important;
    font-weight: 400;
    margin-right: 5px;
  }

</style>