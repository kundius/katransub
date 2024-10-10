import './src/js/components/headerSearch'
import './src/js/components/fonts'
import './src/js/components/floatingNav'
import './src/js/components/sliders'
import './src/js/components/imageFlipper'
import './src/js/components/quantity'
import './src/js/components/messengers'
import './src/js/components/formValidations'
import './src/js/components/modals'
import './src/js/components/miniShop2Callbacks'
import { initOptionItems } from './src/js/components/optionItems'
import { initBuyInClick } from './src/js/components/buyInClick'

import 'normalize.css'
import './src/scss/styles.scss'

initOptionItems()
initBuyInClick()

// событие на упешную отправку
$(document).on('af_complete', function (event, response) {
  response.form[0].dataset.state = response.success ? 'success' : 'fail'
})
