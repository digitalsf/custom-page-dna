const container = document.querySelector('.main')
const itemContainer = document.querySelector('#all_items_view')
const itemContainerHeight = itemContainer.clientHeight

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

    itemContainer.style.height = itemContainerHeight
})

myObserver.observe(container)