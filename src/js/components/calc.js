import Choices from 'choices.js'

export function initCalc() {
  const deliveries = [
    {
      id: 1,
      label: 'Самовывоз',
      payments: [2]
    },
    {
      id: 2,
      label: 'ТК СДЭК по Москве',
      payments: [1, 3]
    },
    {
      id: 3,
      label: 'ТК СДЭК по Москве (за МКАД)',
      payments: [1, 3]
    },
    {
      id: 4,
      label: 'Почта России',
      payments: [1, 3]
    },
    {
      id: 5,
      label: 'Транспортные компании',
      payments: [1]
    },
    {
      id: 6,
      label: 'ТК СДЭК (до пункта выдачи)',
      payments: [1, 3]
    },
    {
      id: 7,
      label: 'ТК СДЭК (до двери получателя)',
      payments: [1, 3]
    }
  ]
  const payments = [
    {
      id: 1,
      label: 'Онлайн оплата'
    },
    {
      id: 2,
      label: 'Оплата в магазине'
    },
    {
      id: 3,
      label: 'Оплата при получении'
    }
  ]
  $('.js-calc').each(function (i, form) {
    const cityInput = form.querySelector('[name="city"]')
    const cityLabel = form.querySelector('.js-calc-city-name')
    const citySubmit = form.querySelector('.js-calc-city-submit')
    const citySelect = form.querySelector('[name="autocomplete"]')

    const deliverySelect = form.querySelector('[name="delivery"]')
    const deliveryChoices = new Choices(deliverySelect, {
      searchEnabled: false,
      noChoicesText: 'Укажите город'
    })

    const paymentSelect = form.querySelector('[name="payment"]')
    const paymentChoices = new Choices(paymentSelect, {
      searchEnabled: false,
      noChoicesText: 'Выберите способ доставки'
    })

    const errorBox = form.querySelector('.js-calc-error')
    const resultBox = form.querySelector('.js-calc-result')
    const resultDelivery = form.querySelector('.js-calc-result-delivery')
    const resultTime = form.querySelector('.js-calc-result-time')
    const resultPrice = form.querySelector('.js-calc-result-price')

    const costInput = form.querySelector('[name="cost"]')
    const calculateSubmit = form.querySelector('.js-calc-calculate')

    const setCity = function (city) {
      if (city.indexOf('г ') === 0) {
        city = city.substring(2)
      }
      cityLabel.innerHTML = cityInput.value = city
      let idx = []
      if (['Воронеж', 'Курск'].indexOf(city) !== -1) {
        idx = [1]
      } else if (['Москва'].indexOf(city) !== -1) {
        idx = [1, 2, 3]
      } else {
        idx = [4, 5, 6, 7]
      }
      // способы доставки в соответствии с выбранным городом
      deliveryChoices.setChoices(
        deliveries
          .filter((row) => idx.indexOf(row.id) !== -1)
          .map((row, index) => ({
            value: row.id,
            label: row.label,
            selected: index === 0
          })),
        'value',
        'label',
        true
      )
      deliverySelect.dispatchEvent(new Event('change'))
    }

    const onChangeDelivery = function (e) {
      let item = deliveries.find((row) => row.id === parseInt(e.target.value))
      // способы оплаты в соответствии с выбранным способом доставки
      paymentChoices.setChoices(
        payments
          .filter((row) => item.payments.indexOf(row.id) !== -1)
          .map((row, index) => ({
            value: row.id,
            label: row.label,
            selected: index === 0
          })),
        'value',
        'label',
        true
      )
    }

    const calculate = function (e) {
      e.preventDefault()

      let errors = []
      if (!cityInput.value) {
        errors.push('Укажите город.')
      }
      if (!costInput.value) {
        errors.push('Укажите стоимость заказа.')
      }
      if (!deliverySelect.value) {
        errors.push('Укажите способ доставки.')
      }
      if (!paymentSelect.value) {
        errors.push('Укажите способ оплаты.')
      }
      if (errors.length > 0) {
        $(resultBox).hide()
        $(errorBox).html(errors.join('<br />')).show()
        return false
      } else {
        $(resultBox).show()
        $(errorBox).hide()
      }

      let payment = payments.find((row) => row.id === parseInt(paymentSelect.value))
      let delivery = deliveries.find((row) => row.id === parseInt(deliverySelect.value))

      resultDelivery.innerHTML = delivery.label

      if (['Воронеж', 'Курск'].indexOf(cityInput.value) !== -1) {
        resultTime.innerHTML = 'Сегодня'
        resultPrice.innerHTML = 'Бесплатно'
      } else if (['Москва'].indexOf(cityInput.value) !== -1) {
        if (delivery.id === 1) {
          if (payment.id === 2) {
            resultTime.innerHTML = 'Сегодня'
            resultPrice.innerHTML = 'Бесплатно'
          } else {
            errors.push('Неверный способ оплаты.')
          }
        } else if ([2, 3].indexOf(delivery.id) !== -1) {
          if (payment.id === 1) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = delivery.id === 3 ? '1-3 дня' : '1-2 дня'
              resultPrice.innerHTML = '350 руб.'
            } else if (costInput.value >= 5000 && costInput.value < 8000) {
              resultTime.innerHTML = delivery.id === 3 ? '1-3 дня' : '1-2 дня'
              resultPrice.innerHTML = '300 руб.'
            } else if (costInput.value >= 8000) {
              resultTime.innerHTML = delivery.id === 3 ? '1-3 дня' : '1-2 дня'
              resultPrice.innerHTML = 'Бесплатно'
            }
          } else if (payment.id === 3) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = delivery.id === 3 ? '1-3 дня' : '1-2 дня'
              resultPrice.innerHTML =
                '400 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 400) + ' руб.'
            } else if (costInput.value >= 5000 && costInput.value < 8000) {
              resultTime.innerHTML = delivery.id === 3 ? '1-3 дня' : '1-2 дня'
              resultPrice.innerHTML =
                '300 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 300) + ' руб.'
            } else if (costInput.value >= 8000) {
              resultTime.innerHTML = delivery.id === 3 ? '1-3 дня' : '1-2 дня'
              resultPrice.innerHTML =
                '0 + ' + costInput.value * 0.04 + ' = ' + costInput.value * 0.04 + ' руб.'
            }
          } else {
            errors.push('Неверный способ оплаты.')
          }
        } else {
          errors.push('Неверный способ доставки.')
        }
      } else {
        if (delivery.id === 4) {
          if (payment.id === 1) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = '4-6 дней'
              resultPrice.innerHTML = '300 руб.'
            } else if (costInput.value >= 5000) {
              resultTime.innerHTML = '4-6 дней'
              resultPrice.innerHTML = 'Бесплатно'
            }
          } else if (payment.id === 3) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = '4-6 дней'
              resultPrice.innerHTML =
                '300 + ' + costInput.value * 0.08 + ' = ' + (costInput.value * 0.08 + 300) + ' руб.'
            } else if (costInput.value >= 5000) {
              resultTime.innerHTML = '4-6 дней'
              resultPrice.innerHTML =
                '0 + ' + costInput.value * 0.08 + ' = ' + costInput.value * 0.08 + ' руб.'
            }
          } else {
            errors.push('Неверный способ оплаты.')
          }
        } else if (delivery.id === 5) {
          if (payment.id === 1) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = '3-5 дней'
              resultPrice.innerHTML = '400 руб.'
            } else if (costInput.value >= 5000 && costInput.value < 15000) {
              resultTime.innerHTML = '3-5 дней'
              resultPrice.innerHTML = '350 руб.'
            } else if (costInput.value >= 15000) {
              resultTime.innerHTML = '3-5 дней'
              resultPrice.innerHTML = 'Бесплатно'
            }
          } else {
            errors.push('Неверный способ оплаты.')
          }
        } else if (delivery.id === 6) {
          if (payment.id === 1) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = '2-4 дня'
              resultPrice.innerHTML = '400 руб.'
            } else if (costInput.value >= 5000 && costInput.value < 8000) {
              resultTime.innerHTML = '2-4 дня'
              resultPrice.innerHTML = '350 руб.'
            } else if (costInput.value >= 8000) {
              resultTime.innerHTML = '2-4 дня'
              resultPrice.innerHTML = 'Бесплатно'
            }
          } else if (payment.id === 3) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = '2-4 дня'
              resultPrice.innerHTML =
                '500 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 500) + ' руб.'
            } else if (costInput.value >= 5000 && costInput.value < 8000) {
              resultTime.innerHTML = '2-4 дня'
              resultPrice.innerHTML =
                '400 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 400) + ' руб.'
            } else if (costInput.value >= 8000) {
              resultTime.innerHTML = '2-4 дня'
              resultPrice.innerHTML =
                '0 + ' + costInput.value * 0.04 + ' = ' + costInput.value * 0.04 + ' руб.'
            }
          } else {
            errors.push('Неверный способ оплаты.')
          }
        } else if (delivery.id === 7) {
          if (payment.id === 1) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = '2-4 дня'
              resultPrice.innerHTML = '900 руб.'
            } else if (costInput.value >= 5000 && costInput.value < 8000) {
              resultTime.innerHTML = '2-4 дня'
              resultPrice.innerHTML = '850 руб.'
            } else if (costInput.value >= 8000) {
              resultTime.innerHTML = '2-4 дня'
              resultPrice.innerHTML = '500 руб.'
            }
          } else if (payment.id === 3) {
            if (costInput.value < 5000) {
              resultTime.innerHTML = '2-4 дня'
              resultPrice.innerHTML =
                '1000 + ' +
                costInput.value * 0.04 +
                ' = ' +
                (costInput.value * 0.04 + 1000) +
                ' руб.'
            } else if (costInput.value >= 5000 && costInput.value < 8000) {
              resultTime.innerHTML = '2-4 дня'
              resultPrice.innerHTML =
                '900 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 900) + ' руб.'
            } else if (costInput.value >= 8000) {
              resultTime.innerHTML = '2-4 дня'
              resultPrice.innerHTML =
                '500 + ' + costInput.value * 0.04 + ' = ' + (costInput.value * 0.04 + 500) + ' руб.'
            }
          } else {
            errors.push('Неверный способ оплаты.')
          }
        } else {
          errors.push('Неверный способ доставки.')
        }
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      $(citySubmit).click((e) => setCity(citySelect.value))
      $(citySelect).suggestions({
        token: '4b25f9cb98a44de7c49207580b8644f4c4cfa2ba',
        type: 'ADDRESS',
        hint: false,
        scrollOnFocus: false,
        bounds: 'city',
        constraints: {
          label: '',
          locations: { city_type_full: 'город' }
        },
        onSelect: (e) => setCity(e.data.city)
      })
      $(deliverySelect).change(onChangeDelivery)
      $(form).submit(calculate)

      setCity(form.dataset.city || 'Москва') // Москва по умолчанию
    })
  })
}
