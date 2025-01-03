export function applyOptionItems(group, force = false) {
  const calc = () => {
    if (!force && group.dataset.optionItemsState === 'applied') return

    const groupWidth = group.getBoundingClientRect().width
    const items = Array.from(group.children)
    let minWidth = 0

    const groupStyle = window.getComputedStyle(group)
    const gap = parseInt(groupStyle.getPropertyValue('gap'))

    if (force && group.dataset.optionItemsState === 'applied') {
      group.style.setProperty('--option-items-size', 'auto')
    }

    items.forEach((item) => {
      const { width } = item.getBoundingClientRect()
      if (width > minWidth) {
        minWidth = width
      }
    })

    if (minWidth > 0) {
      let perRow = Math.floor(groupWidth / minWidth)
      let normalPerRow = Math.ceil(items.length / Math.ceil(items.length / perRow))
      let maxWidth = Math.floor(
        groupWidth / normalPerRow - ((normalPerRow - 1) * gap) / normalPerRow
      )
      group.style.setProperty('--option-items-size', `${maxWidth}px`)
    }

    group.dataset.optionItemsState = 'applied'
  }

  // применяем логику если группу видно,
  // или вешаем обсервер и применяем логику когда группа покажется
  if (group.offsetWidth > 0 && group.offsetHeight > 0) {
    calc()
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting === true) {
          calc()
          observer.unobserve(group)
        }
      },
      { threshold: [0] }
    )
    observer.observe(group)
  }
}

export function initOptionItems() {
  const elements = document.querySelectorAll('[data-option-items]')

  if (elements) {
    elements.forEach(applyOptionItems)
  }
}
