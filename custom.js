const divs = document.getElementsByTagName('div')

function divResizeHeight() {
    console.log('Resize detected')
    for(div of divs) {
        div.style.height = 'auto'
    }
}

new ResizeObserver(divResizeHeight).observe(item_details_view)