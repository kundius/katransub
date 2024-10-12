import Cookies from 'js-cookie'

export function applyStickyFilter(stickyFilter) {
  const open = document.querySelector('[data-sticky-filter-open]')
  const close = document.querySelector('[data-sticky-filter-close]')
  const anchor = document.querySelector('[data-sticky-filter-anchor]')
  const container = document.querySelector('[data-sticky-filter-container]')
  const expand = document.querySelector('[data-sticky-filter-expand]')

  if (Cookies.get('sticky-filter-opened')) {
    stickyFilter.setAttribute('data-sticky-filter-opened', '')
  }

  if (Cookies.get('sticky-filter-expanded')) {
    stickyFilter.setAttribute('data-sticky-filter-expanded', '')
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        stickyFilter.style.paddingTop = 0

        Cookies.remove('sticky-filter-fixed')
        stickyFilter.removeAttribute('data-sticky-filter-fixed')

        Cookies.remove('sticky-filter-opened')
        stickyFilter.removeAttribute('data-sticky-filter-opened')
      } else {
        stickyFilter.style.paddingTop = `${container.offsetHeight}px`

        Cookies.set('sticky-filter-fixed', '1')
        stickyFilter.setAttribute('data-sticky-filter-fixed', '')
      }
    },
    { threshold: [0] }
  )
  observer.observe(anchor)

  open.addEventListener('click', () => {
    Cookies.set('sticky-filter-opened', '1')
    stickyFilter.setAttribute('data-sticky-filter-opened', '')

    Cookies.set('sticky-filter-expanded', '1')
    stickyFilter.setAttribute('data-sticky-filter-expanded', '')
  })

  close.addEventListener('click', () => {
    Cookies.remove('sticky-filter-opened')
    stickyFilter.removeAttribute('data-sticky-filter-opened')

    Cookies.remove('sticky-filter-expanded')
    stickyFilter.removeAttribute('data-sticky-filter-expanded')
  })

  expand.addEventListener('click', () => {
    if (stickyFilter.hasAttribute('data-sticky-filter-expanded')) {
      Cookies.remove('sticky-filter-expanded')
      stickyFilter.removeAttribute('data-sticky-filter-expanded')
    } else {
      Cookies.set('sticky-filter-expanded', '1')
      stickyFilter.setAttribute('data-sticky-filter-expanded', '')
    }
  })
}

export function initStickyFilter() {
  const el = document.querySelector('[data-sticky-filter]')

  if (el) {
    applyStickyFilter(el)
  }
}
