const divs = document.getElementsByTagName('div')
const forms = document.getElementsByTagName('form')

function divResizeHeight() {
    console.log('Resize detected')
    for(form of forms) {
        form.style.height = 'auto'
    }
    for(div of divs) {
        div.style.height = 'auto'
    }

}

divResizeHeight()

new ResizeObserver(divResizeHeight).observe(item_details_view)