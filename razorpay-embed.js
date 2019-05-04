/* Creates Payment page button embeds */
(() => {
    const generate_iframe_url = (params) => {
        const { slug, text, color, size } = params
        const BASE_URL = '/embed.html'
        const url = `${location.protocol}//${location.host}/${BASE_URL}?slug=${slug}&text=${text}&color=${color}&size=${size}`
        return encodeURI(url)
    }

    const create_iframe = (target_url) => {
        const iframe = document.createElement('iframe')
        iframe.src = target_url
        iframe.scrolling = 'no'
        iframe.frameBorder = 0
        iframe.width = '260px'
        iframe.height = '70px'
        return iframe
    }

    const $$rzpbtn = document.querySelectorAll('.razorpay-button')
    $$rzpbtn.forEach($btn => {
        const { dataset } = $btn
        const target_url = generate_iframe_url(dataset)
        const iframe = create_iframe(target_url)
        $btn.appendChild(iframe)
    })
})();