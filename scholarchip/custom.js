window.addEventListener('load', function () {
    
    // Custom Product Start
    const container = document.querySelector('#item_details_view')
    
    if (typeof(container) != 'undefined' && container != null) {
    
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
    }
    // Custom Products End
    
     //$('.responsive_tabs-shell .before').appendTo('.header-links'); //move search to header bar
    $('#header_logo img').wrap( "<a href='/strategicfactory/' style='width:273px'></a>" ); //wrap header logo in link to index page
    $('.responsive_tabs dfn a').prop('title', ''); //remove tooltip that displays all of the custom code

    if ($(window).width() > 1200) { //only do on desktop view
        //create two column layout for shipping page
        if( $('#requestor-info').length ) {
            $('#requestor-info').prev('.pagetitle').andSelf().wrapAll('<div class="requestor-info" />');
        }
    }

    if ($(window).width() > 1024) { //only do on desktop view

        //Clone Add a New Person form and move to the page intro paragraph on the My profile page
        if( $('.add-new-person').length ) {
            $('form[name=switchform]').clone().appendTo('.add-new-person');
        }
        //move View My Orders button to sit next to blue boxed profile content on the My profile page
        if( $('.profile_track_button_cell').length ) {
            $('.profile_track_button_cell').wrap("<tr class='moved-profile-button'></tr>");
            $('.moved-profile-button').prependTo('.bottom-button-container');
            $('.bottom-button-container tbody').prepend("<tr><th class='text-end'><h3 class='h2 text-primary'>My Information</h3></th></tr>");
        }

        //Some pages in the checkout process have order preview thumbnails at the bottom, but the product name and image are in different rows. This code wraps them and flexes the parent container for nice layout
        if( $('table td.previewcell').length ) {
            $('td.previewcell').closest('table').addClass('order-preview-table'); //add class to table to easily target rows
            $('.order-preview-table > tbody > tr').addClass('previewrow'); //add class to all first level rows
            var elems = $(".previewrow"); //create variable selecting all rows with class previewrow
            var wrapper = $('<div class="previewcell" />'); //define variable for wrapper
            var rows = elems.length; //create array of all rows
            for (var i = 0;i < rows;i+=2){  //wrap rows in groups of two
                elems.filter(':eq('+i+'),:eq('+(i+1)+')').wrapAll(wrapper);
            };
        }

        if ( $('div.previewcell').length ) {
            $('.previewrow:first-child').each(function () {
                $(this).appendTo($(this).parent());
            });
        }

        //move "Total Price" label to cell with total price on billing page of checkout
        if( $('.updatetotalcol').length ) {
            $('.updatetotalcol').removeClass('right');
            $('.updatetotalcol b').prependTo('.totalinpcol');
        }

        //move shipping method dropdown to shipping method cell on billing page
        if( $("label[for='service_code']").length ) {
            $("label[for='service_code']").closest('td.right').addClass('shipping-cell').removeClass('right');
            $("select#service_code").appendTo('.shipping-cell');
        }

        //Add class to parent row for any cells that contain system messages so striped background color can be removed by css
        if( $('table.items-table .ic-msg').length ) {
            $('table.items-table td:has(".ic-msg")').closest('tr').addClass('white-bg');
        }
        if( $('table.true-table .ic-msg').length ) {
            $('table.true-table td:has(".ic-msg")').closest('tr').addClass('white-bg');
        }

        if( $('.cart_num_items').length ) {
            var orig_items = $('.cart_num_items').html();
            var numitems = orig_items.slice(2,-1);
            $('.cart_num_items').html(numitems);
        }

    }
    
    $( document ).ready(function() {
        if( $('.multisize-table').length ) {
            $('.multisize-table').prev('.onhand_lbl').hide();
        } 
    });
})
