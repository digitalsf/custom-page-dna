const divs = document.getElementsByTagName('div')
const forms = document.getElementsByTagName('form')

function divResizeHeight() {
    setTimeout(function () {
        console.log('Resize detected')
    for(div of divs) {
        div.style.height = 'auto'
    }

    for(form of forms) {
        form.style.height = 'auto'
    }
    }, 1000)
}

divResizeHeight()

new ResizeObserver(divResizeHeight).observe(item_details_view)