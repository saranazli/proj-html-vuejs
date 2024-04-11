
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
      'Bed',
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
    ],

    centerFooter: {

      homeLinks: [
        {
          name: 'home',
          href: '#'
        },
        {
          name: 'about',
          href: '#'
        },
        {
          name: 'blog',
          href: '#'
        },
        {
          name: 'contact',
          href: '#'
        },
        {
          name:'shop',
          href: '#'
        }
      ],

      socialLinks: [
        {
          name: '<i class="fa-brands fa-facebook-f"></i>',
          href: 'https://www.facebook.com'
        },
        {
          name: '<i class="fa-brands fa-twitter"></i>',
          href: 'https://twitter.com/i/flow/login'
        },
        {
          name: '<i class="fa-brands fa-instagram"></i>',
          href: 'https://www.instagram.com/'
        },
        {
          name: '<i class="fa-brands fa-youtube"></i>',
          href: 'https://www.youtube.com/'
        }
      ],
    }

  },

  main : {

    whiteCategory : [

      {
        pic : 'product-9-300x300.jpg',
        text: 'Bad (1)'
      },
      {
        pic : 'product-3-300x300.jpg',
        text: 'Food (6)'
      },
      {
        pic : 'product-2-300x300.jpg',
        text: 'Toys (6)'
      },
      {
        pic : 'product-4-300x300.jpg',
        text: 'Transport (6)'
      }

    ],

    whiteLove : [

      {
        pic: '',
        text: ''
      }
    ]
  }
    
})