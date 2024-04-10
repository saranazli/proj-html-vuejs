
import { reactive } from "vue";

export const store = reactive ({
 
  topNavBar : {

    logo : 'dark-pet-logo-x.png',
    phoneNumber : '1.800.123.4567'

  },

  icons : [
    {
      icon: '<i class="fa-solid fa-bag-shopping"></i>',
      href: '#'
    },
    {
      icon: '<i class="fa-solid fa-user"></i>',
      href: '#'
    }
  ],

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
    paw : 'bg-transparent-3',
    btmImg : 'food-transparent-5.png',
    
    bottomJ : [
      'Get 25$ OFF your first puchase of our homemade pet food!',
      'visit the shop'
    ]

  },

  footer : {

    fImg : 'logo-symbol.png',

    ref : [

      '1234 Avada Avanue Avadaville',
      'info@your-company-com',
      'call us : (1) 234 5678'

    ],

    shop: [

      'Shop by brand',
      'Bad',
      'food',
      'toys',
      'transport'
    ],

    links: [

      'useful links',
      'my account',
      'orders',
      'checkout',
      'cart'
    ]

  }
    
})