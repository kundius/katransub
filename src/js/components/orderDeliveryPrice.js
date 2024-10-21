export function initOrderDeliveryPrice() {
  const msOrder = document.getElementById('msOrder')

  if (!msOrder) return

  const items = msOrder.querySelectorAll('[data-order-delivery-price]')
  const payment = msOrder.querySelector('[name="payment"]:checked')

  // После получения стоимости заказа обновить стоимость каждого варианта доставки
  miniShop2.Callbacks.add('Order.getcost.response.success', 'OrderDeliveryPrice', function () {
    items.forEach((item) => {
      $.post(
        '/assets/nemopro/actions.php',
        {
          action: 'delivery/price',
          payment: payment?.value,
          delivery: item.dataset.orderDeliveryPrice
        },
        function (response) {
          if (response.price > 0) {
            item.innerHTML = response.price
          } else {
            item.innerHTML = ''
          }
        },
        'json'
      )
    })
  })
}
