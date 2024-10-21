export function initOrderTotal() {
  const msMiniCart = document.getElementById('msMiniCart')
  const msOrder = document.getElementById('msOrder')

  if (!msOrder || !msMiniCart) return

  const msMiniCartTotal = msMiniCart.querySelector('.ms2_total_count')
  const total = msOrder.querySelector('[data-order-total]')
  total.innerHTML = msMiniCartTotal.innerHTML
}
