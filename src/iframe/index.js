import { iFrameEmbed } from './iframe-helper'

const init = () => {
  Array.prototype.forEach.call(
    document.querySelectorAll('.razorpay-button'),
    $btn => {
      const iframe = new iFrameEmbed($btn)
      iframe.create()
    }
  )
}

const listener = () => {
  const { readyState } = document
  if (readyState === 'interactive' || readyState == 'complete') {
    init()
    document.removeEventListener('readystatechange', listener)
  }
}

document.addEventListener('readystatechange', listener)
