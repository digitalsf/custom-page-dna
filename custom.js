window.addEventListener('load', function () {
    const container = document.querySelector('#item_details_view')
    
    let myObserver = new ResizeObserver(entries => {
        entries.forEach(entry => {
            //console.log(entry)
            //container.style.height = 'auto'
            console.log(container.clientHeight)
            let forms = document.getElementsByTagName('form')
            for(form of forms) {
                form.style.height = 'auto'
            }
        
            let divs = document.getElementsByTagName('div')
            for(div of divs) {
                div.style.height = 'auto'
            }
        
            let itemContainer = document.querySelector('#all_items_view')
            let itemContainerHeight = itemContainer.clientHeight
            let mainContainer = document.querySelector('.main')
            let itemDetails = document.getElementById('item_details_view')
            let itemDetailsHeight = itemDetails.clientHeight
            if(itemContainerHeight != 0) {
                mainContainer.style.height = `${itemContainerHeight}px`
            } else {
                mainContainer.style.height = `${itemDetailsHeight}px`
            }

            console.log('fired')
        })
    })
    
    //myObserver.observe(container)
    myObserver.observe(container)

})