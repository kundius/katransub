export function initOrderAddress() {
  document.addEventListener('DOMContentLoaded', () => {
    const msOrder = document.getElementById('msOrder')

    if (!msOrder) return

    const cityInput = msOrder.querySelector('#city')

    if (!cityInput) return

    $(cityInput).suggestions({
      token: '4b25f9cb98a44de7c49207580b8644f4c4cfa2ba',
      type: 'ADDRESS',
      // hint: false,
      // scrollOnFocus: false,
      // bounds: 'city',
      constraints: {
        label: '',
        locations: { city_type_full: 'город' }
      },
      // onSelect: (e) => setCity(e.data.city)
    })
  })
}
