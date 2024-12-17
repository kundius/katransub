
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

// 768: {
//   spaceBetween: 20,
//   slidesPerView: 3
// },
// 1024: {
//   spaceBetween: 20,
//   slidesPerView: 4
// },
// 1280: {
//   spaceBetween: 20,
//   slidesPerView: 4
// },
// 1792: {
//   spaceBetween: 20,
//   slidesPerView: 5
// }