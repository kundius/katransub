import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

export function initProductSlider() {
  const sliders = document.querySelectorAll('[data-product-slider]') || []
  sliders.forEach((slider) => {
    new Swiper(slider, {
      modules: [Navigation],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 12,
      slidesPerView: 2,
      loop: true,
      breakpoints: {
        768: {
          spaceBetween: 20,
          slidesPerView: 3
        },
        1280: {
          spaceBetween: 20,
          slidesPerView: 4
        },
        1792: {
          spaceBetween: 20,
          slidesPerView: 5
        }
      }
    })
  })
}
