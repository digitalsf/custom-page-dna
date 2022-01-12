let myObserver = new ResizeObserver(entries => {
    entries.forEach(entry => {
        //console.log(entry)
        container.style.height = 'auto'
    })

    let forms = document.getElementsByTagName('form')
    for(form of forms) {
        form.style.height = 'auto'
    }
})

const container = document.querySelector('.main')

myObserver.observe(container)