function updateDeliveries(deliveries) {
  var $deliveryInputs = $('input[name="delivery"]', '#msOrder')
  $deliveryInputs.attr('disabled', true).prop('disabled', true).closest('.input-parent').hide()
  if (deliveries.length > 0) {
    for (var i in deliveries) {
      if (deliveries.hasOwnProperty(i)) {
        $deliveryInputs
          .filter('input#delivery_' + deliveries[i])
          .attr('disabled', false)
          .prop('disabled', false)
          .closest('.input-parent')
          .show()
      }
    }
  }
  if ($deliveryInputs.filter(':visible:checked').length == 0) {
    $deliveryInputs.filter(':visible:first').trigger('click')
  }
}

export function initOrderCountry() {
  const form = document.getElementById('msOrder')

  if (!form) return

  const input = form.querySelector('[name="country"]')
  const buttons = form.querySelectorAll('[data-order-country]')

  const setCountry = (country) => {
    buttons.forEach((button) => {
      if (button.dataset.orderCountry === country) {
        button.dataset.status = 'active'
        updateDeliveries(JSON.parse(button.dataset.deliveries))
      } else {
        button.removeAttribute('data-status')
      }
    })
  }

  // колбек запустится после изменения страны и обновит доставку
  miniShop2.Callbacks.add(
    'Order.add.response.success',
    'order_country_change',
    function (response) {
      if (typeof response.data.country === 'undefined') return

      setCountry(response.data.country)
    }
  )

  // задать страну по умолчанию
  setCountry(input.value)

  // повесить события на кнопку
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      input.value = button.dataset.orderCountry
      $(input).trigger('change')
    })
  })
}
