window.addEventListener('load', function () {
    const container = document.querySelector('.main')

    let myObserver = new ResizeObserver(entries => {
        entries.forEach(entry => {
            //console.log(entry)
            container.style.height = 'auto'
        })
    
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

        mainContainer.style.height = itemContainerHeight
        console.log('fired')
    })
    
    myObserver.observe(container)    
})