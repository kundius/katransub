import { confirmation } from '../modal-confirmation'
import { disableScroll, enableScroll } from '../utils'


{/* <button type="button" class="order-invoice__remove button-outline-obscure button-outline-obscure_size-icon" data-order-invoice-remove>
{'SpriteIcon' | chunk : ['name' => 'xmark', 'size' => 18]}
</button> */}

export function initOrderInvoice() {
  const list = document.querySelector('[data-order-invoice-list]')
  const add = document.querySelector('[data-order-invoice-add]')
  // const remove = document.querySelector('[data-order-invoice-remove]')
  const input = document.querySelector('[data-order-invoice-input]')
  const file = document.querySelector('[data-order-invoice-file]')

  if (!(add && list && input && file)) {
    return
  }

  const getInputValue = () => {
    try {
      return JSON.parse(input.value)
    } catch {
      return []
    }
  }

  const renderList = () => {
    const values = getInputValue()

    list.innerHTML = ''

    values.forEach((value, index) => {
      const row = document.createElement('div')
      row.classList.add('order-invoice__row')

      const title = document.createElement('div')
      title.classList.add('order-invoice__row-title')
      const titleInner = document.createElement('div')
      titleInner.classList.add('order-invoice__row-title-inner')
      titleInner.innerHTML = value.split('/').pop()
      title.appendChild(titleInner)
      row.appendChild(title)

      const remove = document.createElement('div')
      remove.classList.add('order-invoice__row-remove')
      row.appendChild(remove)
      remove.addEventListener('click', () => {
        const values = getInputValue()
        values.splice(index, 1)
        setInputValue(values)
        renderList()
      })

      list.appendChild(row)
    })
  }

  const setInputValue = (value) => {
    input.value = JSON.stringify(value)
    $(input).trigger('change')
  }

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
        const value = getInputValue()
        value.push(json.url)
        setInputValue(value)
        renderList()
      }
    }

    add.removeAttribute('data-order-invoice-loading')
    add.removeAttribute('disabled')
  })

  renderList()

  // remove.addEventListener('click', () => {
  //   input.value = ''
  //   $(input).trigger('change')
  //   removeVisibilityChange()
  // })

  // const removeVisibilityChange = () => {
  //   if (!input.value) {
  //     remove.setAttribute('hidden', '')
  //     add.removeAttribute('title')
  //     add.innerHTML = defaultText
  //   } else {
  //     remove.removeAttribute('hidden')
  //     const filename = input.value.split('/').pop()
  //     add.innerHTML = `<span>${filename}</span>`
  //     add.setAttribute('title', filename)
  //   }
  // }

  // input.addEventListener('change', removeVisibilityChange)

  // removeVisibilityChange()

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
