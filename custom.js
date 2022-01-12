function divResizeHeight() {
    console.log('Resize detected')
}

new ResizeObserver(divResizeHeight).observe(item_details)