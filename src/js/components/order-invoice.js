import { confirmation } from '../modal-confirmation'
import { disableScroll, enableScroll } from '../utils'

export function initOrderInvoice() {
  // const control = document.querySelector('[data-order-invoice-control]')
  const add = document.querySelector('[data-order-invoice-add]')
  const remove = document.querySelector('[data-order-invoice-remove]')
  const input = document.querySelector('[data-order-invoice-input]')
  const file = document.querySelector('[data-order-invoice-file]')

  if (!(add && remove && input && file)) {
    return
  }

  const defaultText = add.innerHTML

  add.addEventListener('click', () => {
    file.click()
  })

  file.addEventListener('change', async (e) => {
    add.setAttribute('data-order-invoice-loading', '')
    add.setAttribute('disabled', '')

    const fd = new FormData()
    fd.append('action', 'upload_invoice')
    fd.append('file', e.target.files[0])

    const uploadResponse = await fetch(`assets/template/actions.php`, {
      method: 'POST',
      body: fd
    })

    if (uploadResponse.status !== 200) {
      miniShop2.Message.error('Не удалось загрузить файл!');
    } else {
      const json = await uploadResponse.json()
      
      if (!json.success) {
        miniShop2.Message.error(json.message);
      } else {
        input.value = json.url
        $(input).trigger('change')
        removeVisibilityChange()
      }
    }

    add.removeAttribute('data-order-invoice-loading')
    add.removeAttribute('disabled')
  })

  remove.addEventListener('click', () => {
    input.value = ''
    $(input).trigger('change')
    removeVisibilityChange()
  })

  const removeVisibilityChange = () => {
    if (!input.value) {
      remove.setAttribute('hidden', '')
      add.removeAttribute('title')
      add.innerHTML = defaultText
    } else {
      remove.removeAttribute('hidden')
      const filename = input.value.split('/').pop()
      add.innerHTML = `<span>${filename}</span>`
      add.setAttribute('title', filename)
    }
  }

  input.addEventListener('change', removeVisibilityChange)

  removeVisibilityChange()

  // if (elements) {
  //   elements.forEach(applyOrderAction)
  // }

  // miniShop2.Callbacks.add('Order.add.before', 'upload_invoice', function (a, b, c) {
  //   console.log(a, b, c)
  //   miniShop2.Message.error('Добавление товаров в корзину запрещено!');
  
  //   return false;
  // });

  // колбек запустится после изменения страны и обновит доставку
  // document.addEventListener('DOMContentLoaded', () => {
  //   miniShop2.Callbacks.add(
  //     'Order.add.response.success',
  //     'order_country_change',
  //     function (response) {
  //       if (typeof response.data.country === 'undefined') return

  //       setCountry(response.data.country)
  //     }
  //   )
  // })
}
