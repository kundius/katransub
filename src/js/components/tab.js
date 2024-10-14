export function applyTab(tab) {
  const nav = tab.querySelectorAll('[data-tab-nav]')
  const content = tab.querySelectorAll('[data-tab-content]')

  // const buttons = Array.from(nav.children)
  // const tabs = Array.from(content.children)

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
}

export function initTab() {
  document.querySelectorAll('[data-tab]')?.forEach(applyTab)
}
