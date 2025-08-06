export function initOrderAddress() {
  document.addEventListener('DOMContentLoaded', () => {
    const msOrder = document.getElementById('msOrder')

    if (!msOrder) return

    const cityInput = msOrder.querySelector('#city')
    if (cityInput) {
      $(cityInput).suggestions({
        token: '4b25f9cb98a44de7c49207580b8644f4c4cfa2ba',
        type: 'ADDRESS',
        bounds: 'city',
        geoLocation: false,
      })
    }

    const regionInput = msOrder.querySelector('#region')
    $(regionInput).suggestions({
      token: '4b25f9cb98a44de7c49207580b8644f4c4cfa2ba',
      type: 'ADDRESS',
      bounds: 'region-area',
      geoLocation: false,
    })
  })
}
