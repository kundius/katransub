
import EmblaCarousel from 'embla-carousel'
import { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons'

export function applyProductSlider(el) {
  const mainNode = el.querySelector('[data-product-slider-viewport]')
  const mainPrevNode = el.querySelector('[data-product-slider-prev]')
  const mainNextNode = el.querySelector('[data-product-slider-next]')

  const emblaApiMain = EmblaCarousel(mainNode, {
    loop: true,
    slidesToScroll: 'auto'
  })

  const removeMainPrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
    emblaApiMain,
    mainPrevNode,
    mainNextNode
  )

  emblaApiMain.on('destroy', removeMainPrevNextBtnsClickHandlers)
}

export function initProductSlider() {
  document.querySelectorAll('[data-product-slider]')?.forEach(applyProductSlider)
}
