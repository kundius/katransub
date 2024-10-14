import { disableScroll, enableScroll } from '../utils'

export function applyBuyInClick(buyInClick) {
  buyInClick.addEventListener('click', (e) => {
    const product = e.target.closest('[data-product]')

    const modal = document.getElementById('modal-buy-in-click')

    const fromImage = product.querySelector('[itemprop="thumb"]').content
    const fromTitle = product.querySelector('[itemprop="title"]').content
    const fromPrice = product.querySelector('[itemprop="price"]').content
    const fromUri = product.querySelector('[itemprop="uri"]').content

    const toProductName = modal.querySelector('[name="product"]')
    const toImage = modal.querySelector('[data-buy-in-click-image]')
    const toTitle = modal.querySelector('[data-buy-in-click-title]')
    const toPrice = modal.querySelector('[data-buy-in-click-price]')
    const toLinks = modal.querySelectorAll('[data-buy-in-click-link]')

    toProductName.value = fromTitle
    toImage.src = fromImage
    toTitle.innerHTML = fromTitle
    toPrice.innerHTML = fromPrice
    Array.from(toLinks).forEach((toLink) => {
      toLink.href = fromUri
    })

    MicroModal.show('modal-buy-in-click', {
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

export function initBuyInClick() {
  const elements = document.querySelectorAll('[data-buy-in-click]')

  if (elements) {
    elements.forEach(applyBuyInClick)
  }

  const modal = document.getElementById('modal-buy-in-click')
  const form = modal.querySelector('[data-buy-in-click-form]')
  const clear = modal.querySelector('[data-buy-in-click-clear]')
  clear.addEventListener('click', () => {
    form.removeAttribute('data-state')
  })
}
