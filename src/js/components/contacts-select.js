import Choices from 'choices.js'

export function applyContactsSelect(select) {
  new Choices(select)

  select.addEventListener('change', (e) => {
    window.location = e.target.value
  })
}

export function initContactsSelect() {
  const elements = document.querySelectorAll('[data-contacts-select]')

  if (elements) {
    elements.forEach(applyContactsSelect)
  }
}
