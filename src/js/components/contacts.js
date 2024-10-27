let initCdekVendor = false

const cdekWidgets = document.querySelectorAll('.cdek-widget') || []
cdekWidgets.forEach((widget) => {
  const placeholder = widget.querySelector('.cdek-placeholder')
  const handler = widget.querySelector('.cdek-placeholder__button')
  const target = widget.dataset.target
  const city = widget.dataset.city

  let initMap = false

  const load = () => {
    new ISDEKWidjet({
      defaultCity: city,
      cityFrom: city,
      link: target,
      path: 'assets/template/cdek/scripts/',
      servicepath: 'assets/template/cdek/scripts/service.php',
      country: 'Россия',
      choose: false,
      hidedress: true,
      hidecash: true,
      hidedelt: true
    })
    initMap = true
  }

  handler.addEventListener('click', function (e) {
    e.preventDefault()

    if (initMap) return

    placeholder.classList.add('cdek-placeholder_hidden')

    if (initCdekVendor) {
      load()
    } else {
      const script = document.createElement('script')
      script.id = 'ISDEKscript'
      script.onload = function () {
        load()
        initCdekVendor = true
      }
      script.src = 'assets/template/cdek/widjet.js'
      document.head.appendChild(script)
    }
  })
})

const ymapsWidgets = document.querySelectorAll('.ymaps-widget') || []
ymapsWidgets.forEach((widget) => {
  const map = widget.querySelector('.ymaps-map')
  const placeholder = widget.querySelector('.ymaps-placeholder')
  const image = widget.querySelector('.ymaps-placeholder__image')
  const handler = widget.querySelector('.ymaps-placeholder__button')
  const um = widget.dataset.um

  let initMap = false

  handler.addEventListener('click', function (e) {
    e.preventDefault()

    if (initMap) return

    placeholder.classList.add('cdek-placeholder_hidden')

    const script = document.createElement('script')
    script.src = `https://api-maps.yandex.ru/services/constructor/1.0/js/?um=${um}&amp;width=100%&amp;height=320&amp;lang=ru_RU`
    map.appendChild(script)
  })
})
