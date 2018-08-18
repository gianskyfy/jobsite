import $ from 'jquery/dist/jquery.min.js';
export default class HeaderScripts {
    load()
    {
      $("#header-container")
        .not("#header-container.not-sticky" )
        .clone(true).removeClass('transparent-header')
        .addClass('cloned unsticky')
        .insertAfter("#header-container");

      var stickyLogo = $('#header-container.transparent-header #logo img').attr('data-sticky-logo');
      if(stickyLogo !== undefined) {
        $("#header-container.cloned #logo img").attr("src", stickyLogo);
      }

      var headerOffset = $("#header-container").height() * 2; // height on which the sticky header will shows
      $(window).scroll(function(){
        if($(window).scrollTop() >= headerOffset){
          $("#header-container.cloned").addClass('sticky').removeClass("unsticky");
          $('#header-container .header-notifications').not("#header-container.cloned .header-notifications").removeClass("active");
        } else {
          $("#header-container.cloned").addClass('unsticky').removeClass("sticky");
          $('#header-container.cloned .header-notifications').removeClass("active");
        }
      });


      $(window).on('load resize', function() {
        var transparentHeaderHeight = $('.transparent-header').outerHeight();
        $('.transparent-header-spacer').css({
          height: transparentHeaderHeight,
        });
      });

      $('.ripple-effect, .ripple-effect-dark').on('click', function(e) {
        var rippleDiv = $('<span class="ripple-overlay">'),
          rippleOffset = $(this).offset(),
          rippleY = e.pageY - rippleOffset.top,
          rippleX = e.pageX - rippleOffset.left;

        rippleDiv.css({
          top: rippleY - (rippleDiv.height() / 2),
          left: rippleX - (rippleDiv.width() / 2),
        }).appendTo($(this));

        window.setTimeout(function() {
          rippleDiv.remove();
        }, 800);
      });

      $(".switch, .radio").each(function() {
        var intElem = $(this);
        intElem.on('click', function() {
          intElem.addClass('interactive-effect');
           setTimeout(function() {
              intElem.removeClass('interactive-effect');
           }, 400);
        });
      });

      $(window).on('load', function() {
        $(".button.button-sliding-icon").not(".task-listing .button.button-sliding-icon").each(function() {
          var buttonWidth = $(this).outerWidth()+30;
          $(this).css('width',buttonWidth);
        });
      });

        $('.bookmark-icon').on('click', function(e){
          e.preventDefault();
        $(this).toggleClass('bookmarked');
      });

      $('.bookmark-button').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('bookmarked');
      });

      $("a.close").removeAttr("href").on('click', function(){
        function slideFade(elem) {
          var fadeOut = { opacity: 0, transition: 'opacity 0.5s' };
          elem.css(fadeOut).slideUp();
        }
        slideFade($(this).parent());
      });

      $(".header-notifications").each(function() {
        var userMenu = $(this);
        var userMenuTrigger = $(this).find('.header-notifications-trigger a');

        $(userMenuTrigger).on('click', function(event) {
          event.preventDefault();
          if ( $(this).closest(".header-notifications").is(".active") ) {
                  close_user_dropdown();
              } else {
                  close_user_dropdown();
                  userMenu.addClass('active');
              }
        });
      });

      function close_user_dropdown() {
        $('.header-notifications').removeClass("active");
      }

      var mouse_is_inside = false;

      $( ".header-notifications" ).on( "mouseenter", function() {
        mouse_is_inside=true;
      });

      $( ".header-notifications" ).on( "mouseleave", function() {
        mouse_is_inside=false;
      });

      $("body").mouseup(function(){
          if(! mouse_is_inside) close_user_dropdown();
      });

      $(document).keyup(function(e) {
        if (e.keyCode == 27) {
          close_user_dropdown();
        }
      });

      if ($('.status-switch label.user-invisible').hasClass('current-status')) {
        $('.status-indicator').addClass('right');
      }

      $('.status-switch label.user-invisible').on('click', function(){
        $('.status-indicator').addClass('right');
        $('.status-switch label').removeClass('current-status');
        $('.user-invisible').addClass('current-status');
      });

      $('.status-switch label.user-online').on('click', function(){
        $('.status-indicator').removeClass('right');
        $('.status-switch label').removeClass('current-status');
        $('.user-online').addClass('current-status');
      });

      function wrapperHeight() {
        var headerHeight = $("#header-container").outerHeight();
        var windowHeight = $(window).outerHeight() - headerHeight;
        $('.full-page-content-container, .dashboard-content-container, .dashboard-sidebar-inner, .dashboard-container, .full-page-container').css({ height: windowHeight });
        $('.dashboard-content-inner').css({ 'min-height': windowHeight });
      }

      function fullPageScrollbar() {
        $(".full-page-sidebar-inner, .dashboard-sidebar-inner").each(function() {

          var headerHeight = $("#header-container").outerHeight();
          var windowHeight = $(window).outerHeight() - headerHeight;
          var sidebarContainerHeight = $(this).find(".sidebar-container, .dashboard-nav-container").outerHeight();

          if (sidebarContainerHeight > windowHeight) {
            $(this).css({ height: windowHeight });

          } else {
            $(this).find('.simplebar-track').hide();
          }
        });
      }

      $(window).on('load resize', function() {
        wrapperHeight();
        fullPageScrollbar();
      });

      $('.enable-filters-button').on('click', function(){
        $('.full-page-sidebar').toggleClass("enabled-sidebar");
        $(this).toggleClass("active");
        $('.filter-button-tooltip').removeClass('tooltip-visible');
      });

      $(window).on('load', function() {
        $('.filter-button-tooltip').css({
          left: $('.enable-filters-button').outerWidth() + 48
        }).addClass('tooltip-visible');
      });

      this.avatarSwitcher();
    }

    avatarSwitcher() {
        var readURL = function(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('.profile-pic').attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        };

        $(".file-upload").on('change', function(){
            readURL(this);
        });

        $(".upload-button").on('click', function() {
           $(".file-upload").click();
        });
    }
}
