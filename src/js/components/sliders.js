import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { chunkArray } from '../utils'

const homeSlider = document.querySelectorAll('[data-home-slider]') || []
homeSlider.forEach((wrapper) => {
  const thumbs = wrapper.querySelector('[data-home-slider-thumbs]')
  const main = wrapper.querySelector('[data-home-slider-main]')
  const thumbsWrapper = thumbs.querySelector('.swiper-wrapper')

  const setActive = (index) => {
    Array.from(thumbsWrapper.children).forEach((el) => {
      if (el.dataset.homeSliderSlide == index) {
        el.classList.add('swiper-slide-thumb-active')
      } else {
        el.classList.remove('swiper-slide-thumb-active')
      }
    })
  }

  const isLoopThumbs = thumbsWrapper.children.length > 4

  const galleryThumbs = new Swiper(thumbs, {
    direction: 'vertical',
    allowTouchMove: false,
    spaceBetween: 8,
    slidesPerView: 3,
    centeredSlides: true,
    centeredSlidesBounds: !isLoopThumbs,
    loop: isLoopThumbs
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
    const slide = e.target.closest('.swiper-slide')
    galleryTop.slideToLoop(slide.dataset.homeSliderSlide)
  })

  galleryTop.on('slideChange', function (e) {
    if (isLoopThumbs) {
      galleryThumbs.slideToLoop(e.realIndex)
    } else {
      galleryThumbs.slideTo(e.realIndex)
    }
    setActive(e.realIndex)
  })
})

if (window.matchMedia('(max-width: 767px)').matches) {
  const container = document.querySelector('[data-home-brands]')
  if (container) {
    const items = container.querySelectorAll('li') || []

    const root = document.createElement('div')
    root.classList.add('swiper')

    const buttonPrev = document.createElement('div')
    buttonPrev.classList.add('brands-list-prev', 'swiper-button-prev')

    const buttonNext = document.createElement('div')
    buttonNext.classList.add('brands-list-next', 'swiper-button-next')

    const wrapper = document.createElement('div')
    wrapper.classList.add('swiper-wrapper')

    chunkArray(Array.from(items), 8).forEach((arr) => {
      const slide = document.createElement('div')
      slide.classList.add('swiper-slide')
      const ul = document.createElement('ul')
      arr.forEach((li) => ul.appendChild(li))
      slide.appendChild(ul)
      wrapper.appendChild(slide)
    })

    root.appendChild(wrapper)

    container.innerHTML = ''
    container.appendChild(root)
    root.parentNode.insertBefore(buttonPrev, root.nextSibling)
    root.parentNode.insertBefore(buttonNext, root.nextSibling)

    new Swiper(root, {
      modules: [Navigation],
      spaceBetween: 16,
      loop: false,
      navigation: {
        nextEl: '.brands-list-next',
        prevEl: '.brands-list-prev'
      }
    })
  }
}
