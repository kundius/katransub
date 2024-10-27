import { disableScroll, enableScroll } from '../utils'

export function applyOptionsModal(optionsModal) {
  optionsModal.addEventListener('click', (e) => {
    const modalElement = document.getElementById(optionsModal.dataset.optionsModal)

    if (modalElement.parentNode != document.body) {
      document.body.appendChild(modalElement)
    }

    const fromCount = optionsModal.closest('[data-product-form]').querySelector('[name="count"]')
    if (fromCount) {
      const toCount = modalElement.querySelector('[name="count"]')
      if (toCount) {
        toCount.value = fromCount.value
      }
    }

    MicroModal.show(optionsModal.dataset.optionsModal, {
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
  })
}

export function initOptionsModal() {
  const elements = document.querySelectorAll('[data-options-modal]')

  if (elements) {
    elements.forEach(applyOptionsModal)
  }
}
