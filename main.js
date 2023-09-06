import './style.scss'
// importación de componentes y estilos de Swiper
import Swiper from 'swiper';
import { EffectCoverflow, EffectCreative, Navigation, Pagination, Scrollbar, } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
  speed: 300,
  delay: 300,
  dynamicBullets: true,
  dynamicMainBullets: 3,
  
  
 
  

   
   

  modules: [Navigation, Pagination, EffectCoverflow, EffectCreative, Scrollbar],

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

