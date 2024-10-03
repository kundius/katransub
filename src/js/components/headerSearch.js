const toggle = document.querySelector('[data-header-search="toggle"]')
const search = document.querySelector('[data-header-search="form"]')
const input = document.querySelector('[data-header-search="input"]')

$(function () {
  if (!(toggle && search && input)) return

  let prevScroll = null
  let scrollDir = null
  let prevScrollDir = null

  // при прокрутке поиск скрывается не сразу, а через некоторое расстояние
  let scrolledProgress = 0
  let scrolledDistance = 160

  const isVisible = () => toggle.dataset.state === 'opened'

  const open = () => {
    toggle.dataset.state = 'opened'
    search.dataset.state = 'opened'

    input.focus()

    // чтобы закрывался при прокрутке
    window.addEventListener('scroll', onScroll)
  }

  const hide = () => {
    toggle.dataset.state = 'closed'
    search.dataset.state = 'closed'

    input.value = ''
    input.blur()

    // закрыть автокомплит
    $(input).autocomplete('close')

    // прогресс прокрутки нужно сбросить
    scrolledProgress = 0

    // чтобы лишний раз не слушать событие
    window.removeEventListener('scroll', onScroll)
  }

  const onScroll = () => {
    if (prevScroll === null) {
      prevScroll = window.scrollY
    }

    scrollDir = window.scrollY >= prevScroll ? 1 : -1

    if (prevScrollDir === null) {
      prevScrollDir = scrollDir
    }

    if (scrollDir != prevScrollDir) {
      scrolledProgress = 0
    }

    scrolledProgress += Math.abs(
      scrollDir ? window.scrollY - prevScroll : prevScroll - window.scrollY
    )

    prevScroll = window.scrollY
    prevScrollDir = scrollDir

    // костыль, чтобы двигать список автокомплита
    // $(input).autocomplete('search')

    if (scrolledProgress > scrolledDistance) {
      hide()
    }
  }

  const goToPage = () => {
    window.location = `/search?query=${input.value}`
  }

  toggle.addEventListener('click', (e) => {
    e.preventDefault()

    if (isVisible()) {
      hide()
    } else {
      open()
    }
  })

  // надстройки автокомплита

  $(input).autocomplete('option', 'appendTo', '.header')
  $(input).autocomplete('option', 'position', {
    my: 'center top',
    at: 'center bottom',
    collision: 'none'
  })

  $(input).data('ui-autocomplete')._renderMenu = function (ul, items) {
    var that = this
    $.each(items, function (index, item) {
      that._renderItemData(ul, item)
    })
    $('<li class="mse2-ac-more"></li>').appendTo(ul).on('click', goToPage)
    $('<li class="mse2-ac-close"></li>').appendTo(ul).on('click', hide)
  }

  $(input).data('ui-autocomplete')._resizeMenu = function () {
    this.menu.element.outerWidth(360) // 462
  }
})
