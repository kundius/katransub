import MicroModal from 'micromodal'
import { disableScroll, enableScroll } from '../utils'

MicroModal.init({
  onShow: () => disableScroll(),
  onClose: () => enableScroll(),
  openTrigger: 'data-modal-open',
  closeTrigger: 'data-modal-close',
  awaitOpenAnimation: true,
  awaitCloseAnimation: true
})
