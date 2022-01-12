const divs = document.getElementsByTagName('div')

const myObserver = new ResizeObserver(entries => {
    entries.forEach(entry => {
        entry.style.height = 'auto'
    })
})

myObserver.observe(divs)