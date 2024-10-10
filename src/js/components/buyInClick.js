export function applyBuyInClick(card) {
  const buyInClickTrigger = card.querySelector('[data-buy-in-click-trigger]')

  buyInClickTrigger.addEventListener('click', () => {
    const modal = document.getElementById('modal-buy-in-click')

    const fromImage = card.querySelector('[data-product-card-image]')
    const fromTitle = card.querySelector('[data-product-card-title]')
    const fromPrice = card.querySelector('[data-product-card-price]')
    const fromLink = card.querySelector('[data-product-card-link]')

    const toProductName = modal.querySelector('[name="product"]')
    const toImage = modal.querySelector('[data-buy-in-click-image]')
    const toTitle = modal.querySelector('[data-buy-in-click-title]')
    const toPrice = modal.querySelector('[data-buy-in-click-price]')
    const toLinks = modal.querySelectorAll('[data-buy-in-click-link]')

    toProductName.value = fromTitle.innerHTML
    toImage.src = fromImage.src
    toTitle.innerHTML = fromTitle.innerHTML
    toPrice.innerHTML = fromPrice.innerHTML
    Array.from(toLinks).forEach((toLink) => {
      toLink.href = fromLink.href
    })
  })
}

export function initBuyInClick() {
  const cards = document.querySelectorAll('[data-product-card]')

  if (!cards) return

  // применяем логику к карточкас
  cards.forEach((card) => applyBuyInClick(card))

  const modal = document.getElementById('modal-buy-in-click')
  const form = modal.querySelector('[data-buy-in-click-form]')
  const clear = modal.querySelector('[data-buy-in-click-clear]')
  clear.addEventListener('click', () => {
    form.removeAttribute('data-state')
  })
}
