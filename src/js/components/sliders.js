import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { chunkArray } from '../utils'

const homeSlider = document.querySelectorAll('[data-home-slider]') || []
homeSlider.forEach((wrapper) => {
  const thumbs = wrapper.querySelector('[data-home-slider-thumbs]')
  const main = wrapper.querySelector('[data-home-slider-main]')
  const thumbSlides = thumbs.querySelectorAll('.swiper-slide')
  const isThumbLoop = thumbSlides && thumbSlides.length > 3

  const galleryThumbs = new Swiper(thumbs, {
    direction: 'vertical',
    allowTouchMove: false,
    spaceBetween: 8,
    slidesPerView: 3,
    centeredSlides: isThumbLoop,
    loop: isThumbLoop
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
    if (slide.classList.contains('swiper-slide-prev')) {
      galleryTop.slidePrev()
    }
    if (slide.classList.contains('swiper-slide-next')) {
      galleryTop.slideNext()
    }
  })
  galleryTop.on('slideChange', function (e, a) {
    galleryThumbs.slideToLoop(e.realIndex)
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
