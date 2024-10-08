const messengers = document.querySelectorAll('[data-messengers]') || []

messengers.forEach((el) => {
  const outsideClick = function (e) {
    const itsChildren = el.contains(e.target)
    if (e.target != el && !itsChildren) {
      el.dataset.state = 'inactive'
      document.removeEventListener('click', outsideClick)
    }
  }
  el.addEventListener('click', () => {
    el.dataset.state = 'active'
    document.addEventListener('click', outsideClick)
  })
  el.addEventListener('mouseenter', () => {
    el.dataset.state = 'active'
  })
  el.addEventListener('mouseleave', () => {
    el.dataset.state = 'inactive'
  })
})
