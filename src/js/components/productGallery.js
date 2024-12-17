import EmblaCarousel from 'embla-carousel'
import { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons'
import { addThumbBtnsClickHandlers, addToggleThumbBtnsActive } from './EmblaCarouselThumbsButton'
import { disableScroll, enableScroll } from '../utils'

export function applyProductGallery(productGallery) {
  const closes = productGallery.querySelectorAll('[data-product-gallery-close]')
  const main = productGallery.querySelector('[data-product-gallery-main]')

  const mainNode = carousel.querySelector('[data-product-gallery-main-viewport]')
  const mainPrevNode = carousel.querySelector('[data-product-gallery-main-prev]')
  const mainNextNode = carousel.querySelector('[data-product-gallery-main-next]')
  const thumbsNode = carousel.querySelector('[data-product-gallery-thumbs-viewport]')

  const fullscreenIn = () => {
    productGallery.setAttribute('data-product-gallery-fullscreen', '')
    disableScroll()
  }

  const fullscreenOut = () => {
    productGallery.removeAttribute('data-product-gallery-fullscreen')
    enableScroll()
  }

  main.addEventListener('click', (e) => {
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
