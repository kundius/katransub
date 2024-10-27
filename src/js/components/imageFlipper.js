const findImageRoot = (target, scope) => {
  if (scope && scope == target) return null
  if (target === document) return null
  if (target.classList.contains('image-flipper')) {
    return target
  }
  if (!target.parentNode) return null
  return findImageRoot(target.parentNode, scope)
}

if (window.matchMedia('(max-width: 767px)').matches) {
  const containers = document.querySelectorAll('[data-products-container]') || []

  let turned = null
  let doubleTurned = null

  const turnOn = (el) => {
    el.classList.add('image-flipper_turned')
    turned = el
  }

  const turnOff = () => {
    turned.classList.remove('image-flipper_turned')
    turned = null
  }

  // возвращаем изображение при касании в любом месте
  document.addEventListener('touchstart', (e) => {
    // предотвратить ложные срабатывания и срабатывание при распространении события
    if (turned && !turned.contains(e.target)) {
      turnOff()
    }
  })

  containers.forEach((container) => {
    container.addEventListener('click', (e) => {
      const imageRoot = findImageRoot(e.target, container)
      if (imageRoot && imageRoot !== doubleTurned) {
        e.preventDefault()
      }
    })

    container.addEventListener('touchstart', (e) => {
      const imageRoot = findImageRoot(e.target, container)
      // пропускаем касание вне картинки
      if (!imageRoot) return
      // пропускаем касание на активной картинке, но запоминаем для клика
      if (imageRoot === turned) {
        doubleTurned = imageRoot
        return
      }
      // отключаем уже активную картинку
      if (turned) turnOff()
      // включаем текущую
      turnOn(imageRoot)
    })
  })

  // let hoveredItem = null

  // document.addEventListener('touchstart', function (e) {
  //   if (hoveredItem && !hoveredItem.contains(e.target)) {
  //     $(hoveredItem).removeClass('products-image_hover')
  //     hoveredItem = null
  //   }
  // })

  // $(document).on('touchstart', '.products-image', function () {
  //   $('.products-image').data('canClick', false)
  //   if (hoveredItem == this) {
  //     $(this).data('canClick', true)
  //   }
  //   $('.products-image').removeClass('products-image_hover')
  //   $(this).addClass('products-image_hover')
  //   hoveredItem = this
  // })

  // $(document).on('click', '.products-image', function (e) {
  //   if (!$(this).data('canClick')) {
  //     e.preventDefault()
  //   }
  // })
}
