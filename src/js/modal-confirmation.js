import { disableScroll, enableScroll } from './utils'

export function confirmation(options) {
  const modalId = `modal-confirmation`

  const modal = document.createElement('div')
  modal.classList.add('modal', 'modal-confirm')
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
  title.innerHTML = options.title

  const close = document.createElement('button')
  close.classList.add('modal__close')
  close.dataset.modalClose = true

  const content = document.createElement('main')
  content.classList.add('modal__content')

  const confirmation = document.createElement('div')
  confirmation.classList.add('modal-confirmation')

  const confirmationHeader = document.createElement('div')
  confirmationHeader.classList.add('modal-confirmation__header')
  confirmationHeader.innerHTML = options.description

  const confirmationFooter = document.createElement('div')
  confirmationFooter.classList.add('modal-confirmation__footer')

  const confirmationCancel = document.createElement('button')
  confirmationCancel.classList.add('button-outline-obscure')
  confirmationCancel.innerHTML = 'Отмена'
  confirmationCancel.dataset.modalClose = true

  const confirmationSubmit = document.createElement('button')
  confirmationSubmit.classList.add('button-filled-primary')
  confirmationSubmit.innerHTML = 'Да'
  confirmationSubmit.addEventListener('click', options.onConfirm)
  confirmationSubmit.dataset.modalClose = true

  confirmationFooter.appendChild(confirmationCancel)
  confirmationFooter.appendChild(confirmationSubmit)
  confirmation.appendChild(confirmationHeader)
  confirmation.appendChild(confirmationFooter)
  content.appendChild(confirmation)

  header.appendChild(title)
  header.appendChild(close)

  container.appendChild(header)
  container.appendChild(content)

  overlay.appendChild(container)

  modal.appendChild(overlay)

  document.body.appendChild(modal)

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
}
