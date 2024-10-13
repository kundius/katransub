import './src/js/components/headerSearch'
import './src/js/components/fonts'
import './src/js/components/floatingNav'
import './src/js/components/sliders'
import './src/js/components/imageFlipper'
import './src/js/components/messengers'
import './src/js/components/formValidations'
import './src/js/components/modals'
import './src/js/components/miniShop2Callbacks'

import { initQuantity, applyQuantity } from './src/js/components/quantity'
import { applyOptionItems, initOptionItems } from './src/js/components/optionItems'
import { initBuyInClick, applyBuyInClick } from './src/js/components/buyInClick'
import { initStickyFilter } from './src/js/components/stickyFilter'
import { initViewFilter } from './src/js/components/viewFilter'
import { applyOptionsModal, initOptionsModal } from './src/js/components/optionsModal'

import 'normalize.css'
import './src/scss/styles.scss'

initOptionItems()
initBuyInClick()
initQuantity()
initOptionsModal()
initStickyFilter()
initViewFilter()

// событие на упешную отправку
$(document).on('af_complete', function (event, response) {
  response.form[0].dataset.state = response.success ? 'success' : 'fail'
})

// применить скрипты к загруженным карточкам
$(document).on('mse2_load', function (e, response) {
  const offset = (response.data.page - 1) * +mse2Config.start_limit
  const mse2_results = document.getElementById('mse2_results')
  const addedCards = Array.from(mse2_results.children).slice(offset)

  addedCards.forEach((card) => {
    card.querySelectorAll('[data-buy-in-click]')?.forEach(applyBuyInClick)
    card.querySelectorAll('[data-quantity]')?.forEach(applyQuantity)
    card.querySelectorAll('[data-options-modal]')?.forEach(applyOptionsModal)
    card.querySelectorAll('[data-option-items]')?.forEach(applyOptionItems)
  })
})
