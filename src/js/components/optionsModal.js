import { disableScroll, enableScroll } from '../utils'

export function applyOptionsModal(optionsModal) {
  optionsModal.addEventListener('click', (e) => {
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
