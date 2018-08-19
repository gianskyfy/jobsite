import $ from 'jquery/dist/jquery.min.js';
export default class LayoutScripts {
    load()
    {
        function wrapperHeight() {
            var headerHeight = $("#header-container").outerHeight();
            var windowHeight = $(window).outerHeight() - headerHeight;
            $('.full-page-content-container, .dashboard-content-container, .dashboard-sidebar-inner, .dashboard-container, .full-page-container').css({ height: windowHeight });
            $('.dashboard-content-inner').css({ 'min-height': windowHeight });
        }
    
        // Enabling Scrollbar
        function fullPageScrollbar() {
            $(".full-page-sidebar-inner, .dashboard-sidebar-inner").each(function() {
                var headerHeight = $("#header-container").outerHeight();
                var windowHeight = $(window).outerHeight() - headerHeight;
                var sidebarContainerHeight = $(this).find(".sidebar-container, .dashboard-nav-container").outerHeight();
    
                // Enables scrollbar if sidebar is higher than wrapper
                if (sidebarContainerHeight > windowHeight) {
                    $(this).css({ height: windowHeight });
            
                } else {
                    $(this).find('.simplebar-track').hide();
                }
            });
        }
    
        // Init
        $(window).on('load resize', function() {
            wrapperHeight();
            fullPageScrollbar();
        });
    }
}
