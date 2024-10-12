export function applyViewFilter(viewFilter) {
  const select = document.getElementById('select_mse2_msoption|view')
  const options = select.querySelectorAll('option')
  console.log(select, select.value)

  const values = []

  options.forEach((option) => {
    console.log(option.value)

    const row = document.createElement('label')
    row.classList.add('view-filter__row')

    const checkbox = document.createElement('input')
    checkbox.classList.add('view-filter__checkbox')
    checkbox.setAttribute('name', 'viewFilter')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('value', option.value)

    const title = document.createElement('span')
    title.classList.add('view-filter__title')
    title.innerHTML = option.value

    row.appendChild(checkbox)
    row.appendChild(title)
    viewFilter.appendChild(row)

    checkbox.addEventListener('change', (e) => {
      const index = values.indexOf(e.target.value)

      if (e.target.checked) {
        if (index === -1) {
          values.push(e.target.value)
        }
      } else {
        if (index !== -1) {
          values.splice(index, 1)
        }
      }

      // mSearch2.setFilters({
      //   ...mSearch2.getFilters(),
      //   'msoption|view': values.join(',')
      // })
      // mSearch2.load()
      mSearch2.setFilters({ 'msoption|view': values.join(',') })
      mSearch2.load({ 'msoption|view': values.join(',') })
    })
  })
  // viewFilter
}

export function initViewFilter() {
  const el = document.querySelector('[data-view-filter]')

  if (el) {
    applyViewFilter(el)
  }
}
