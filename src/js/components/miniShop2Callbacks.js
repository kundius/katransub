import MicroModal from 'micromodal'
import { disableScroll, enableScroll } from '../utils'

const orderTextFields = [
  'index',
  'region',
  'city',
  'street',
  'building',
  'room',
  'receiver',
  'email',
  'phone',
  'comment'
]

const orderDisabledTextFields = {
  1: ['index', 'region', 'street', 'building', 'room'],
  4: ['index', 'region', 'street', 'room', 'building'],
  6: ['index'],
  7: ['index'],
  9: ['index'],
  10: ['index'],
  11: ['index'],
  13: ['index']
}

// Сделать обязательные поля действительно обязательными
miniShop2.Callbacks.add(
  'Order.getrequired.response.success',
  'order_required_fields',
  function (response) {
    const order = document.getElementById('msOrder')

    orderTextFields.forEach((field) => {
      order.querySelector(`[name="${field}"]`).removeAttribute('required')
    })

    response.data.requires.forEach((field) => {
      order.querySelector(`[name="${field}"]`).setAttribute('required', '')
    })
  }
)

// Отключить некоторые необязательные поля в зависимости от способа доставки
miniShop2.Callbacks.add('Order.add.response.success', 'order_shady_fields', function (response) {
  if (typeof response.data.delivery === 'undefined') return

  const fields = orderDisabledTextFields[response.data.delivery] || []
  const order = document.getElementById('msOrder')

  orderTextFields.forEach((field) => {
    const input = order.querySelector(`[name="${field}"]`)
    if (fields.indexOf(field) === -1) {
      input.removeAttribute('disabled')
    } else {
      input.setAttribute('disabled', '')
    }
  })
})

// Изменение суммы позиции в корзине
miniShop2.Callbacks.add(
  'Cart.change.response.success',
  'cart_change_row_cost',
  function (response) {
    const row = document.querySelector(`[data-cart-row]#${response.data.key}`)
    const cost = row.querySelector('[data-cart-row-cost]')
    cost.innerHTML = new Intl.NumberFormat('ru-RU').format(response.data.cost)
  }
)

// Сообщение о добавлении товара
miniShop2.Callbacks.add('Cart.add.response.success', 'add_to_cart_message', function (response) {
  const product = miniShop2.sendData.$form[0].closest('[data-product]')
  const productThumb = product.querySelector('[itemprop="thumb"]').content
  const productUri = product.querySelector('[itemprop="uri"]').content
  const productTitle = product.querySelector('[itemprop="title"]').content
  const productPrice = product.querySelector('[itemprop="price"]').content

  const modalId = `cart-add-success-${response.data.row.id}`

  const modal = document.createElement('div')
  modal.classList.add('modal', 'modal-cart-success')
  modal.setAttribute('id', modalId)

  const overlay = document.createElement('div')
  overlay.classList.add('modal__overlay')
  overlay.dataset.modalClose = true

  const container = document.createElement('div')
  container.classList.add('modal__container')

  const header = document.createElement('header')
  header.classList.add('modal__header')

  const title = document.createElement('div')
  title.classList.add('modal__title')
  title.innerHTML = 'ТОВАР ДОБАВЛЕН В&nbsp;КОРЗИНУ'

  const close = document.createElement('button')
  close.classList.add('modal__close')
  close.dataset.modalClose = true

  const content = document.createElement('main')
  content.classList.add('modal__content')
  content.innerHTML = `
  <div class="cart-success">
  <div class="cart-success__product">
  <a href="${productUri}" class="cart-success__product-image">
  <img src="${productThumb}" alt="">
  </a>
  <div class="cart-success__product-info">
  <div class="cart-success__product-desc">
  <a href="${productUri}">${productTitle}</a>
  </div>
  <div class="cart-success__product-totals">
  ${response.data.row.count} x <strong>${productPrice}</strong>
  </div>
  </div>
  </div>
  <div class="cart-success__footer">
  <a href="/cart" class="button-outline">Перейти к заказу</a>
  <button class="button-primary" data-modal-close>Продолжить покупки</button>
  </div>
  </div>
  `

  header.appendChild(title)
  header.appendChild(close)

  container.appendChild(header)
  container.appendChild(content)

  overlay.appendChild(container)

  modal.appendChild(overlay)

  document.body.appendChild(modal)

  // закрыть окно выбора опций
  // не через метод close, потому что тогда пересекаются события с другими окнами
  document
    ?.querySelector(`#modal-product-${response.data.row.id}`)
    ?.querySelector('[data-modal-close]')
    ?.click()

  // повесить на форму статус добавлено и обновить количество
  product.dataset.productStatus = 'added'
  miniShop2.sendData.$form[0].querySelector('[name="count"]').value = response.data.row.count

  // открыть созданное окно успешного добавления
  MicroModal.show(modalId, {
    onShow: () => {
      disableScroll()
    },
    onClose: (modal) => {
      enableScroll()
      const onanimationend = () => {
        document.body.removeChild(modal)
        modal.removeEventListener('animationend', onanimationend)
      }
      modal.addEventListener('animationend', onanimationend)
    },
    awaitOpenAnimation: true,
    awaitCloseAnimation: true,
    closeTrigger: 'data-modal-close'
  })
})
