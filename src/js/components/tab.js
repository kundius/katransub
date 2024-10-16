export function initTab() {
  document.querySelectorAll('[data-tab]')?.forEach((tab) => {
    const nav = tab.querySelectorAll('[data-tab-nav]')
    const content = tab.querySelectorAll('[data-tab-content]')

    nav.forEach((button) => {
      button.addEventListener('click', () => {
        nav.forEach((item) => item.removeAttribute('data-tab-status'))
        content.forEach((item) => item.removeAttribute('data-tab-status'))

        button.setAttribute('data-tab-status', 'active')
        tab
          .querySelector('[data-tab-content="' + button.dataset.tabNav + '"]')
          .setAttribute('data-tab-status', 'active')
      })
    })
  })

  document.querySelectorAll('[data-tab-anchor]')?.forEach((anchor) => {
    anchor.addEventListener('click', () => {
      const [tabName, contentName] = anchor.dataset.tabAnchor.split(':')
      const tab = document.querySelector(`[data-tab="${tabName}"]`)
      const nav = tab.querySelectorAll('[data-tab-nav]')
      const content = tab.querySelectorAll('[data-tab-content]')
      nav.forEach((item) => item.removeAttribute('data-tab-status'))
      content.forEach((item) => item.removeAttribute('data-tab-status'))
      tab
        .querySelector('[data-tab-content="' + contentName + '"]')
        .setAttribute('data-tab-status', 'active')
      tab
        .querySelector('[data-tab-nav="' + contentName + '"]')
        .setAttribute('data-tab-status', 'active')
      tab.scrollIntoView({
        behavior: 'smooth'
      })
    })
  })
}
