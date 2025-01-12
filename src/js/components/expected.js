import { disableScroll, enableScroll } from '../utils'

export function applyExpected(expected) {
  expected.addEventListener('click', (e) => {
    const form = e.target.closest('[data-product-form]')

    const modal = document.getElementById('modal-expected')

    const fromImage = form.querySelector('[itemprop="thumb"]').content
    const fromTitle = form.querySelector('[itemprop="title"]').content
    const fromPrice = form.querySelector('[itemprop="price"]').content
    const fromUri = form.querySelector('[itemprop="uri"]').content

    const toProductName = modal.querySelector('[name="product"]')
    const toImage = modal.querySelector('[data-expected-image]')
    const toTitle = modal.querySelector('[data-expected-title]')
    const toPrice = modal.querySelector('[data-expected-price]')
    const toLinks = modal.querySelectorAll('[data-expected-link]')

    toProductName.value = fromTitle
    toImage.src = fromImage
    toTitle.innerHTML = fromTitle
    toPrice.innerHTML = fromPrice
    Array.from(toLinks).forEach((toLink) => {
      toLink.href = fromUri
    })

    MicroModal.show('modal-expected', {
      onShow: () => {
        disableScroll()
      },
      onClose: () => {
        enableScroll()
      },
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
      closeTrigger: 'data-modal-close'
    })
  })
}

export function initExpected() {
  const elements = document.querySelectorAll('[data-expected]')

  if (elements) {
    elements.forEach(applyExpected)
  }

  const modal = document.getElementById('modal-expected')
  const form = modal.querySelector('[data-expected-form]')
  const clear = modal.querySelector('[data-expected-clear]')
  clear.addEventListener('click', () => {
    form.removeAttribute('data-state')
  })
}
