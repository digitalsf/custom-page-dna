window.addEventListener('load', function () {
    
    const container = document.querySelector('#item_details_view')
    const allItems = document.querySelector('#all_items_view')

    let myObserver = new ResizeObserver(entries => {
        entries.forEach(entry => {

            let forms = document.getElementsByTagName('form')

            for(form of forms) {
                form.style.height = 'auto'
            }
        
            let divs = document.getElementsByTagName('div')
            
            for(div of divs) {
                div.style.height = 'auto'
            }
            
            let mainContainer = document.querySelector('.main')
            let itemContainer = document.querySelector('#all_items_view').clientHeight
            let itemDetails = document.getElementById('item_details_view').clientHeight
            
            if(itemContainerHeight != 0) {
                //mainContainer.style.height = `${itemContainerHeight}px`
                mainContainer.style.height = 'auto'
            } else {
                mainContainer.style.height = `${itemDetailsHeight}px`
            }
            mainContainer.style.height = 'auto'
            console.log('fired')
        })
    })
    
    //myObserver.observe(container)
    myObserver.observe(container)
    myObserver.observe(allItems)
})