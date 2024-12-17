
import EmblaCarousel from 'embla-carousel'
import { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons'

export function initProductSlider() {
  const mainNode = carousel.querySelector('[data-product-slider]')
  const mainPrevNode = carousel.querySelector('[data-product-slider-prev]')
  const mainNextNode = carousel.querySelector('[data-product-slider-next]')

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