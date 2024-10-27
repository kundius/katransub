import { confirmation } from '../modal-confirmation'
import { disableScroll, enableScroll } from '../utils'

const actionQuestions = {
  cart: 'Отправить заказ в корзину?',
  pay: 'Перейти к оплате заказа?',
  cancel: 'Отменить заказ?'
}

export function applyOrderAction(orderAction) {
  const orderId = orderAction.dataset.id
  const action = orderAction.dataset.orderAction

  orderAction.addEventListener('click', (e) => {
    if (action === 'details') {
      MicroModal.show(`details-${orderId}`, {
        onShow: () => {
          disableScroll()
        },
        onClose: () => {
          enableScroll()
        },
        awaitOpenAnimation: true,
        awaitCloseAnimation: true,
        closeTrigger: 'data-modal-close'
      })
    } else {
      confirmation({
        title: 'Подтвердите действие',
        description: actionQuestions[action],
        onConfirm: () => {
          $.post(
            '/assets/template/actions.php',
            {
              action: `order/${action}`,
              id: orderId
            },
            function (response) {
              if (response.success) {
                if (response.cart) {
                  miniShop2.Cart.status(response.cart)
                }
                if (response.redirect) {
                  document.location.href = response.redirect
                }
                if (action === 'cancel' && pdoPage) {
                  const href = `page=${pdoPage.keys.page}`
                  pdoPage.keys.page = undefined
                  pdoPage.loadPage(href, pdoPage.configs.page)
                }
              }
            },
            'json'
          )
        }
      })
    }
  })
}

export function initOrderAction() {
  const elements = document.querySelectorAll('[data-order-action]')

  if (elements) {
    elements.forEach(applyOrderAction)
  }
}
