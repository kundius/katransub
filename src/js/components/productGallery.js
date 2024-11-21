import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay, Thumbs, Zoom } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/thumbs'
import { disableScroll, enableScroll } from '../utils'

export function applyProductGallery(productGallery) {
  const closes = productGallery.querySelectorAll('[data-product-gallery-close]')
  const main = productGallery.querySelector('[data-product-gallery-main]')
  const thumbs = productGallery.querySelector('[data-product-gallery-thumbs]')

  const fullscreenIn = () => {
    // galleryThumbs.update({
    //   slidesPerView: 12
    // })
    productGallery.setAttribute('data-product-gallery-fullscreen', '')
    disableScroll()
  }

  const fullscreenOut = () => {
    // galleryThumbs.update({
    //   slidesPerView: 5
    // })
    productGallery.removeAttribute('data-product-gallery-fullscreen')
    enableScroll()
    // slidesPerView: "auto",
  }

  main.addEventListener('click', (e) => {
    if (e.target.closest('[data-product-gallery-slide]')) {
      fullscreenIn()
    }
  })

  closes.forEach((close) => close.addEventListener('click', fullscreenOut))

  const galleryThumbs = new Swiper(thumbs, {
    modules: [Navigation, Pagination, Autoplay, Thumbs],
    allowTouchMove: false,
    spaceBetween: 12,
    slidesPerView: 'auto',
    watchSlidesProgress: true
  })

  const galleryTop = new Swiper(main, {
    modules: [Navigation, Pagination, Autoplay, Thumbs, Zoom],
    spaceBetween: 16,
    loop: true,
    zoom: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    thumbs: {
      swiper: galleryThumbs
    }
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false
    // }
  })

  // thumbs.addEventListener('click', (e) => {
  //   const slide = e.target.closest('.swiper-slide')
  //   galleryTop.slideToLoop(slide.dataset.swiperSlideIndex)
  //   // if (slide.classList.contains('swiper-slide-prev')) {
  //   // }
  //   // if (slide.classList.contains('swiper-slide-next')) {
  //   //   galleryTop.slideNext()
  //   // }
  // })

  // galleryTop.on('slideChange', function (e, a) {
  //   console.log(galleryThumbs, e.realIndex)
  //   galleryThumbs.slideTo(e.realIndex)
  // })
}

export function initProductGallery() {
  document.querySelectorAll('[data-product-gallery]')?.forEach(applyProductGallery)
}
