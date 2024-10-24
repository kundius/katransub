export function initOrderPaymentDescription() {
  const msOrder = document.getElementById('msOrder')

  if (!msOrder) return

  const items = msOrder.querySelectorAll('[data-order-payment-description]')
  const delivery = msOrder.querySelector('[name="delivery"]:checked')

  // После получения стоимости заказа обновить описание каждого варианта оплаты
  document.addEventListener('DOMContentLoaded', () => {
    miniShop2.Callbacks.add(
      'Order.getcost.response.success',
      'OrderPaymentDescription',
      function () {
        items.forEach((item) => {
          $.post(
            '/assets/nemopro/actions.php',
            {
              action: 'payment/description',
              delivery: delivery?.value,
              payment: item.dataset.orderPaymentDescription
            },
            function (response) {
              if (response.description) {
                item.innerHTML = response.description
              } else {
                item.innerHTML = ''
              }
            },
            'json'
          )
        })
      }
    )
  })
}
