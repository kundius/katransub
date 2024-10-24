export function initScrolltop() {
  const el = document.querySelector('[data-scrolltop]')

  if (!el) return

  el.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
}
