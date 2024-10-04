const { disableScroll, enableScroll } = require('../utils')

const toggle = document.querySelectorAll('[data-floating-nav="toggle"]') || []
const nav = document.querySelector('[data-floating-nav="nav"]')

if (toggle && nav) {
  let prevScroll = null
  let scrollDir = null
  let prevScrollDir = null

  // при прокрутке поиск скрывается не сразу, а через некоторое расстояние
  let scrolledProgress = 0
  let scrolledDistance = 160

  const isVisible = () => nav.dataset.state === 'opened'

  const isMobile = () => window.matchMedia('not all and (min-width: 1024px)').matches

  const open = () => {
    toggle.forEach((el) => {
      el.dataset.state = 'opened'
    })
    nav.dataset.state = 'opened'

    if (isMobile()) {
      disableScroll()
    } else {
      // на десктопе закрывается при прокрутке
      window.addEventListener('scroll', onScroll)
    }
  }

  const hide = () => {
    toggle.forEach((el) => {
      el.dataset.state = 'closed'
    })
    nav.dataset.state = 'closed'

    // прогресс прокрутки нужно сбросить
    scrolledProgress = 0

    if (isMobile()) {
      enableScroll()
    } else {
      // чтобы лишний раз не слушать событие
      window.removeEventListener('scroll', onScroll)
    }
  }

  const onScroll = () => {
    if (prevScroll === null) {
      prevScroll = window.scrollY
    }

    scrollDir = window.scrollY >= prevScroll ? 1 : -1

    if (prevScrollDir === null) {
      prevScrollDir = scrollDir
    }

    if (scrollDir != prevScrollDir) {
      scrolledProgress = 0
    }

    scrolledProgress += Math.abs(
      scrollDir ? window.scrollY - prevScroll : prevScroll - window.scrollY
    )

    prevScroll = window.scrollY
    prevScrollDir = scrollDir

    if (scrolledProgress > scrolledDistance) {
      hide()
    }
  }

  toggle.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault()

      if (isVisible()) {
        hide()
      } else {
        open()
      }
    })
  })
}
