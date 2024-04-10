
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

  <section id="top_f">

    <div class="h-100 d-flex align-items-end white">
      
      <div class="top_f_cont container">
        <div class="row d-flex between">

          <div class="col-3">

            <div class="d-flex mb-4">
              <div class="logo_foot me-4">
                <img :src="`/img/${store.footer.fImg}`" alt="fimg">
              </div>
              <div>
                <h3>
                  Avada
                </h3>
                <h3>
                  Pet Suplies
                </h3>
              </div>
            </div>

            <div>
             
              <div
              class="mb-2" 
              v-for="ref in store.footer.ref" 
              :key="ref">
                {{ ref }}
              </div>
              
            </div>


          </div>

          <div class="col-3">
            
            <div class="d-flex justify-content-start f_ref">
              <ul>
                <li
                class="mb-2" 
                v-for="shop in store.footer.shop" 
                :key="shop">
                  {{ shop }}
                </li>
              </ul>
            </div>

          </div>

          <div class="col-3">
            
            <div class="d-flex justify-content-start f_ref">
              <ul>
                <li
                class="mb-2" 
                v-for="link in store.footer.links" 
                :key="link">
                  {{ link }}
                </li>
              </ul>
            </div>

          </div>

          <div class="col-3 text-end">
            k
          </div>

        </div>
      </div>

    </div>

  </section>
  

</template>

<style lang="scss" scoped>

  @use '../../../assets/scss/main.scss' as *;

  #top_f{
    background-color: $heavy_metal_green;
    height: 480px;
    .top_f_cont{
      height: 350px;
      border-bottom: 1px solid pink;
    }
    .logo_foot{
      width: 60px;
      height: 60px;
      img{
        filter: invert(100%);
      }
    }
    .f_ref{
      padding-left: 0px !important;
      text-transform: capitalize;
      li:first-child {
      padding-bottom: 20px;
      font-size: 1.6rem;
      }
      li{
        font-size: 1rem;
        padding-bottom: 8px;
        &:hover{
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }
</style>