/* сообщение о добавлении в корзину */
// miniShop2.Callbacks.add('Cart.add.before', 'add_to_cart_message_before', function (response, a) {
//   console.log(response, a)
//   return true
// })
import MicroModal from 'micromodal'
import { disableScroll, enableScroll } from '../utils'

miniShop2.Callbacks.add('Cart.add.response.success', 'add_to_cart_message', function (response, a) {
  console.log(response)
  // data-product-card
  // const productData = miniShop2.sendData.$form.data()
  const productImage = miniShop2.sendData.$form[0].querySelector('[data-product-card-image]')
  const productLink = miniShop2.sendData.$form[0].querySelector('[data-product-card-link]')
  const productTitle = miniShop2.sendData.$form[0].querySelector('[data-product-card-title]')
  const formatedPrice = new Intl.NumberFormat('ru-RU').format(response.data.row.price)
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
  <a href="${productLink?.href}" class="cart-success__product-image">
  <img src="${productImage?.src}" alt="">
  </a>
  <div class="cart-success__product-info">
  <div class="cart-success__product-desc">
  <a href="${productLink?.href}">${productTitle?.innerHTML}</a>
  </div>
  <div class="cart-success__product-totals">
  ${response.data.row.count} x <strong>${formatedPrice} ₽</strong>
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
