import { confirmation } from '../modal-confirmation'
import { disableScroll, enableScroll } from '../utils'

const actionQuestions = {
  cart: 'Отправить заказ в корзину?',
  pay: 'Перейти к оплате заказа?',
  cancel: 'Отменить заказ?'
}

export function applyFilterSwitch(element) {
  const toggleElements = element.querySelectorAll('[data-filter-switch-toggle]')

  toggleElements.forEach((toggleElement) => {
    toggleElement.addEventListener('click', () => {
      element.dataset.filterSwitch = toggleElement.dataset.filterSwitchToggle
    })
  })
}

export function initFilterSwitch() {
  const elements = document.querySelectorAll('[data-filter-switch]')

  if (elements) {
    elements.forEach(applyFilterSwitch)
  }
}
