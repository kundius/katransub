export function initOrderTotal() {
  const msMiniCart = document.getElementById('msMiniCart')
  const msMiniCartTotal = msMiniCart.querySelector('.ms2_total_count')
  const msOrder = document.getElementById('msOrder')
  const total = msOrder.querySelector('[data-order-total]')
  total.innerHTML = msMiniCartTotal.innerHTML
}
