
import { reactive } from "vue";

export const store = reactive ({
 
  topNavBar : {

    logo : 'dark-pet-logo-x.png',
    phoneNumber : '1.800.123.4567'

  },

  bottomNavBar : [
    'Home',
    'Shop',
    'Shop by brand',
    'About',
    'Blog',
    'Contact'
  ],

  jumbo : {
    j_img : 'banner-5-x-scaled.jpg',
    paw : 'bg-transparent-3'
  }
    
})