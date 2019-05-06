// import * as constants from './constants'

/** Temporary constants for now */
const EMBED_PAGE_URL = 'embed.html'
const SIZES = {
  small: 120,
  medium: 180,
  large: 240
}
const OFFSET = 15

const MODE = 'dev'

class iFrameEmbed {
  constructor($div) {
    const { url, text, color, size } = $div.dataset
    this.$div = $div
    this.url = url
    this.text = text
    this.color = color
    this.size = size
  }

  create = () => {
    this._generateTargetUrl()
    this._createIframe()
    this._appendIframe()
  }

  _getHostURL = () =>
    MODE === 'dev' ? `http://${location.host}` : 'https://rzp.io/l'

  _getQueryString = params => {
    const queryArray = Object.keys(params).map(key => `${key}=${params[key]}`)
    return queryArray.join('&')
  }

  _generateTargetUrl = () => {
    const { url, text, color, size } = this
    const queryString = this._getQueryString({ url, text, color, size })
    this.targetURL = `${this._getHostURL()}/${EMBED_PAGE_URL}?${queryString}`
    console.log(this.targetURL)
  }

  _createIframe = () => {
    const iframe = document.createElement('iframe')
    iframe.src = this.targetURL
    iframe.scrolling = 'no'
    iframe.frameBorder = 0
    iframe.width = SIZES[this.size] + OFFSET + 'px'
    iframe.height = '70px'
    this.iframe = iframe
  }

  _appendIframe = () => {
    this.$div.appendChild(this.iframe)
  }
}

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
