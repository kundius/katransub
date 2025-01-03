import EmblaCarousel from 'embla-carousel'
import { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons'
import { addThumbBtnsClickHandlers, addToggleThumbBtnsActive } from './EmblaCarouselThumbsButton'
import { disableScroll, enableScroll } from '../utils'

export function applyProductGallery(productGallery) {
  const closes = productGallery.querySelectorAll('[data-product-gallery-close]')
  const mainNode = productGallery.querySelector('[data-product-gallery-main-viewport]')
  const mainPrevNode = productGallery.querySelector('[data-product-gallery-main-prev]')
  const mainNextNode = productGallery.querySelector('[data-product-gallery-main-next]')
  const thumbsNode = productGallery.querySelector('[data-product-gallery-thumbs-viewport]')

  const fullscreenIn = () => {
    productGallery.setAttribute('data-product-gallery-fullscreen', '')
    // const fSlides = thumbsNode.querySelectorAll('.product-gallery-thumbs__slide')
    // const fContainer = thumbsNode.querySelector('.product-gallery-thumbs__container')
    // if (window.innerWidth > fSlides.length * 80 - 12 - 12 - ((fSlides.length - 1) * 12)) {
    //   fContainer.classList.add('product-gallery-thumbs__container_centered')
    // }
    disableScroll()
  }

  const fullscreenOut = () => {
    productGallery.removeAttribute('data-product-gallery-fullscreen')
    // fContainer.classList.remove('product-gallery-thumbs__container_centered')
    enableScroll()
  }

  mainNode.addEventListener('click', (e) => {
    if (e.target.closest('[data-product-gallery-slide]')) {
      fullscreenIn()
    }
  })

  closes.forEach((close) => close.addEventListener('click', fullscreenOut))

  const emblaApiMain = EmblaCarousel(mainNode, {
    loop: true,
    slidesToScroll: 'auto'
  })
  const emblaApiThumbs = EmblaCarousel(thumbsNode, {
    // containScroll: 'trimSnaps',
    containScroll: 'trimSnaps',
    // loop: true,
    dragFree: true
  })

  const removeMainPrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
    emblaApiMain,
    mainPrevNode,
    mainNextNode
  )
  const removeThumbBtnsClickHandlers = addThumbBtnsClickHandlers(emblaApiMain, emblaApiThumbs)
  const removeToggleThumbBtnsActive = addToggleThumbBtnsActive(emblaApiMain, emblaApiThumbs)

  emblaApiMain
    .on('destroy', removeMainPrevNextBtnsClickHandlers)
    .on('destroy', removeThumbBtnsClickHandlers)
    .on('destroy', removeToggleThumbBtnsActive)
  emblaApiThumbs
    .on('destroy', removeThumbBtnsClickHandlers)
    .on('destroy', removeToggleThumbBtnsActive)
}

export function initProductGallery() {
  document.querySelectorAll('[data-product-gallery]')?.forEach(applyProductGallery)
}
