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
            console.log('Observer fired')
        })
    })
    
    Observer.observe(container)

    window.hue=0.0;
    window.disco_speed=8.0; // 4.0 = 1 css-hsl() hue point per second
    function discoLaserDanceRave () {
        jQuery('body').css('background-color','hsl('+window.hue+',100%,50%)');
        window.hue+=window.disco_speed/4;
        if (window.hue>360) window.hue=window.hue-360;
        setTimeout(discoLaserDanceRave,10);
    }
    //discoLaserDanceRave();

    if( $('.bundle_subitem_subgroupname').length ) {
        $('.bundle_subitem_subgroupname:parent(tr)').before('</tbody></table><table class="bundle_subgroup_table"><tbody>');
    }
})