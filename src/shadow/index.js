import { ShadowedButton } from './shadow-helper'
import { SELECTOR } from '../constants'

Array.prototype.forEach.call(document.querySelectorAll(SELECTOR), $rzpDiv => {
  const s = new ShadowedButton($rzpDiv)
  s.init()
})
