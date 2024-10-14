import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/thumbs'

export function applyProductGallery(productGallery) {
  const close = productGallery.querySelector('[data-product-gallery-close]')
  const main = productGallery.querySelector('[data-product-gallery-main]')
  const thumbs = productGallery.querySelector('[data-product-gallery-thumbs]')

  const galleryThumbs = new Swiper(thumbs, {
    modules: [Navigation, Pagination, Autoplay, Thumbs],
    allowTouchMove: false,
    spaceBetween: 12,
    slidesPerView: 5,
    watchSlidesProgress: true
  })

  const galleryTop = new Swiper(main, {
    modules: [Navigation, Pagination, Autoplay, Thumbs],
    spaceBetween: 16,
    loop: true,
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
  console.log(document.querySelectorAll('[data-product-gallery]'))
  document.querySelectorAll('[data-product-gallery]')?.forEach(applyProductGallery)
}
