import * as constants from '../constants'

/**
 * ShadowedButton class abstracts the process of attaching a ShadowDOM,
 * creating the button and logo images and attaching the styles.
 * @method init Initiaites the process of creating the Shadowed Button.
 */
export class ShadowedButton {
  constructor($rzpDiv) {
    const { slug, text, color, size } = $rzpDiv.dataset
    this.slug = slug
    this.$rzpDiv = $rzpDiv
    this.text = text || 'Pay Now'
    this.color = color || '376f7'
    this.size = size || 'medium'
  }

  /**
   * Initiaites the code for creating the Shadowed Button.
   */
  init() {
    this._createShadowRoot()
    this._attachStyles()
    this._createElements()
  }

  _createShadowRoot = () => {
    this.shadowRoot = this.$rzpDiv.attachShadow({ mode: 'open' })
  }

  _createElements = () => {
    const { slug, text, color, size } = this

    const $btn = document.createElement('a')
    const url = constants.BASE_URL + '/' + slug
    $btn.classList.add('rzp-btn', size)
    $btn.setAttribute('href', url)
    $btn.style.backgroundColor = '#' + color
    $btn.innerText = text
    this.shadowRoot.appendChild($btn)

    const $logo = document.createElement('img')
    $logo.setAttribute('src', constants.LOGO_URL)
    $logo.setAttribute('height', '16px')

    const $logoCon = document.createElement('div')
    $logoCon.classList.add('rzp-logo', size)
    $logoCon.appendChild($logo)

    this.shadowRoot.appendChild($logoCon)
  }

  _attachStyles = () => {
    const styles = document.createElement('style')
    styles.textContent = `
          .rzp-btn {
              box-sizing: border-box;
              position: relative;
              display: block;
              min-height: 38px;
              width: 240px;
              padding: 10px;
              line-height: 18px;
              font-weight: 600;
              font-size: 14px;
              font-family: Lato, Muli, -apple-system, BlinkMacSystemFont, Arial,
                sans-serif;
              word-break: break-word;
              border-radius: 2px;
              text-align: center;
              color: #fff;
              box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.2);
              z-index: 2;
              text-decoration: none;
              margin-top: 10px;
            }
            .rzp-logo {margin-top: 4px; text-align: center;}
            .small {width: 120px;}
            .medium { width: 180px;}
            .large {width: 240px;}
          `
    this.shadowRoot.appendChild(styles)
  }
}
