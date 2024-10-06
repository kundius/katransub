import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const homeSlider = document.querySelectorAll('[data-home-slider]') || []
homeSlider.forEach((wrapper) => {
  const thumbs = wrapper.querySelector('[data-home-slider-thumbs]')
  const main = wrapper.querySelector('[data-home-slider-main]')

  const galleryThumbs = new Swiper(thumbs, {
    direction: 'vertical',
    allowTouchMove: false,
    spaceBetween: 8,
    slidesPerView: 3,
    centeredSlides: true,
    loop: true
  })

  const galleryTop = new Swiper(main, {
    modules: [Navigation, Pagination, Autoplay],
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
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    }
  })

  thumbs.addEventListener('click', (e) => {
    if (e.target.classList.contains('swiper-slide-prev')) {
      galleryTop.slidePrev()
    }
    if (e.target.classList.contains('swiper-slide-next')) {
      galleryTop.slideNext()
    }
    // if (e.target.classList.contains('swiper-slide')) {
    //   galleryTop.slideToLoop(e.target.dataset.swiperSlideIndex)
    // }
  })
  galleryTop.on('slideChange', function (e, a) {
    galleryThumbs.slideToLoop(e.realIndex)
  })
})

const homeSliderRecent = document.querySelectorAll('[data-home-slider-recent]') || []
homeSliderRecent.forEach((wrapper) => {
  new Swiper(wrapper, {
    modules: [Navigation],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 0,
    slidesPerView: 5,
    loop: true
  })
})
