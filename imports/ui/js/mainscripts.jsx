import $ from 'jquery/dist/jquery.min.js';
export default class MainScripts {

    load() {
        $(document).off('click', '.dashboard-nav ul li a');
        $(document).on('click', '.dashboard-nav ul li a', function(e) {
            if($(this).closest("li").children("ul").length) {
                if ( $(this).closest("li").is(".active-submenu") ) {
                   $('.dashboard-nav ul li').removeClass('active-submenu');
                } else {
                    $('.dashboard-nav ul li').removeClass('active-submenu');
                    $(this).parent('li').addClass('active-submenu');
                }
                e.preventDefault();
            }
        });
    }
}