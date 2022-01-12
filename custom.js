let myObserver = new ResizeObserver(entries => {
    entries.forEach(entry => {
        entry.style.height = 'auto'
    })
})

const divs = document.querySelector('div')
const forms = document.getElementsByTagName('form')

myObserver.observe(divs)
myObserver.observe(forms)