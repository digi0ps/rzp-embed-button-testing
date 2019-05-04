/* Creates an embed button using shadow DOM */

(() => {
    const constants = {
        BASE_URL: 'https://rzp.io/l',
    }

    const create_styles = ($root) => {
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
        $root.appendChild(styles)
    }

    const create_elements = ($root, data) => {
        const { slug, text, color, size } = data

        const $btn = document.createElement('a')
        const url = constants.BASE_URL + slug
        $btn.classList.add('rzp-btn', size)
        $btn.setAttribute('href', url)
        $btn.style.backgroundColor = '#' + color
        $btn.innerText = text
        $root.appendChild($btn)

        const $logo = document.createElement('img')
        $logo.setAttribute('src', "https://cdn.razorpay.com/static/assets/powered_by_razorpay.png")
        $logo.setAttribute('height', '16px')

        const $logoCon = document.createElement('div')
        $logoCon.classList.add('rzp-logo', size)
        $logoCon.appendChild($logo)
        $root.appendChild($logoCon)
    }

    const $$rzpbtn = document.querySelectorAll('.razorpay-shadow-button')
    $$rzpbtn.forEach($btn => {
        const { dataset } = $btn
        const shadow = $btn.attachShadow({ mode: 'closed'})
        create_styles(shadow)
        create_elements(shadow, dataset)
    })
})();