import { throttle } from 'throttle-debounce'

export function initFloatingElements() {
  // var prevScroll = window.scrollY
  let delay = 30
  let previousScrollPosition = 0
  const isScrollingDown = () => {
    let goingDown = false

    let scrollPosition = window.scrollY

    if (scrollPosition > previousScrollPosition) {
      goingDown = true
    }

    previousScrollPosition = scrollPosition

    return goingDown
  }
  const onScroll = throttle(
    100,
    (e) => {
      delay -= window.scrollY - previousScrollPosition

      if (isScrollingDown()) {
        if (delay <= 0) {
          document.body.classList.remove('floating-elements')
        }
      } else {
        delay = 30
        document.body.classList.add('floating-elements')
      }
    },
    { noLeading: false, noTrailing: false }
  )

  window.addEventListener('scroll', onScroll)
}
