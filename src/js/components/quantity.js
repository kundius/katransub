const quantities = document.querySelectorAll('[data-quantity]') || []
quantities.forEach((quantity) => {
  const input = quantity.querySelector('[data-quantity-input]')
  const plus = quantity.querySelector('[data-quantity-plus]')
  const minus = quantity.querySelector('[data-quantity-minus]')

  plus.addEventListener('click', () => {
    input.value = +input.value + 1
  })

  minus.addEventListener('click', () => {
    input.value = Math.max(+input.min, +input.value - 1)
  })
})
