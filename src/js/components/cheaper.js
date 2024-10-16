export function initCheaper() {
  $('[data-cheaper]').each(function () {
    $(this).on('click', '[data-cheaper-plus]', function () {
      var row = $(this).parents('[data-cheaper-row]'),
        clone = row.clone()

      clone.find('input').val('')
      row.after(clone)
    })

    $(this).on('click', '[data-cheaper-minus]', function () {
      var row = $(this).parents('[data-cheaper-row]')

      row.remove()
    })
  })
}
