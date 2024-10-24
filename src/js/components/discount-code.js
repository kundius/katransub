export function initDiscountCode() {
  const form = document.querySelector('[data-discount-code]')

  if (!form) {
    return
  }

  const message = form.querySelector('[data-discount-code-message]')

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(form)

    $.post(
      '/assets/components/minishop2/action.php',
      {
        key: 'discount_code',
        value: formData.get('discount_code'),
        ms2_action: 'order/add',
        ctx: 'web'
      },
      function (data) {
        if (data.success) {
          form.dataset.discountCodeStatus = 'success'
          message.innerHTML = 'Купон применен'
        } else {
          form.dataset.discountCodeStatus = 'fail'
          message.innerHTML = data.message
        }
      },
      'json'
    )
  })

  /**
   * Виртуальная форма купона в корзине
   **/
  // var discount_field = $('#msOrder input[name="discount_code"]')
  // var discount_form = $('#msCartCoupon')
  // if (Boolean(discount_field.val())) {
  //   discount_form.addClass('cart-coupon--applied')
  // }

  // discount_form.on('submit', function (e) {
  //   e.preventDefault()

  //   var value = $('[name="discount_code"]', this).val()
  //   discount_field.val(value)
  //   discount_field.trigger('change')
  // })
}
