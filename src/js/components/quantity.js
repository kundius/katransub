export function applyQuantity(quantity) {
  const input = quantity.querySelector('[data-quantity-input]')
  const plus = quantity.querySelector('[data-quantity-plus]')
  const minus = quantity.querySelector('[data-quantity-minus]')

  plus.addEventListener('click', () => {
    input.value = +input.value + 1
  })

  minus.addEventListener('click', () => {
    input.value = Math.max(+input.min, +input.value - 1)
  })
}

export function initQuantity() {
  const elemens = document.querySelectorAll('[data-quantity]')

  if (elemens) {
    elemens.forEach(applyQuantity)
  }
}
