window.addEventListener('load', function () {
    
    const container = document.querySelector('#item_details_view')

    let Observer = new ResizeObserver(entries => {
        entries.forEach(entry => {

            let forms = document.getElementsByTagName('form')

            for(form of forms) {
                form.style.height = 'max-content'
                form.style.overflow = 'auto'
            }
        
            let divs = document.getElementsByTagName('div')
            
            for(div of divs) {
                div.style.height = 'max-content'
            }
            
            let mainContainer = document.querySelector('.main')            
            
            mainContainer.style.height = 'max-content'

        })
    })
    
    Observer.observe(container)

})