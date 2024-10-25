export function applyViewFilter(viewFilter) {
  const select = document.querySelector('#mse2_filters [name="msoption|view"]')

  if (!select) return

  const options = select.querySelectorAll('option')
  const itemsContainer = viewFilter.querySelector('[data-view-filter-items]')

  const items = {}

  options.forEach((option) => {
    if (!option.value) return

    const label = document.createElement('label')
    label.classList.add('view-filter__item')

    const checkbox = document.createElement('input')
    checkbox.classList.add('view-filter__item-checkbox')
    checkbox.setAttribute('name', 'viewFilter')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('value', option.value)
    checkbox.checked = option.selected
    checkbox.disabled = option.disabled

    const title = document.createElement('span')
    title.classList.add('view-filter__item-title')
    title.innerHTML = option.innerHTML

    items[option.value] = { label, checkbox, title, option }

    label.appendChild(checkbox)
    label.appendChild(title)
    itemsContainer.appendChild(label)

    checkbox.addEventListener('change', (e) => {
      option.selected = e.target.checked
      $(select).trigger('change')
    })
  })

  $(document).on('mse2_load', function (e, response) {
    Object.entries(response.data.suggestions['msoption|view']).forEach(([name, count]) => {
      items[name].title.innerHTML = items[name].option.innerHTML
      items[name].checkbox.disabled = count === 0
      items[name].checkbox.checked = items[name].option.selected
    })
  })
}

export function initViewFilter() {
  const el = document.querySelector('[data-view-filter]')

  if (el) {
    applyViewFilter(el)
  }
}
