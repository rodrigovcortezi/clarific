/*
Template Name: Wrapkit Ui Kit
Author: Themedesigner
Email: niravjoshi87@gmail.com
File: js
*/

 
// This is for the static slider 6
$('.video-img').on('click', function() {
    $(this).addClass('hide');
    $('.embed-responsive').show()
    .removeClass('hide');
    $("video").each(function () { this.play() });
});

    // ============================================================== 
    // Modal video stop on close
    // ============================================================== 

document.addEventListener("turbolinks:load", function() {
        // Gets the video src from the data-src on each button

        var $videoSrc;  
        $('.video-btn').click(function() {
            $(this).scrollspy('refresh');
            $videoSrc = $(this).data( "src" );
            $("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" );
        });
          
          
        // stop playing the youtube video when I close the modal
        $('#mymodal').on('hide.bs.modal', function (e) {
            // a poor man's stop video
            $("#video").attr('src',$videoSrc); 
        }) 
                
          
        // document ready  
});

document.addEventListener("turbolinks:load", function() {
    "use strict";
    // ============================================================== 
    //This is for preloader
    // ============================================================== 
    document.addEventListener("turbolinks:load", function() {
        $(".preloader").fadeOut();
    });
    // ============================================================== 
    // For page-wrapper height
    // ============================================================== 
    var set = function () {
        var topOffset = 390;        
        var height = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $(".page-wrapper").css("min-height", (height) + "px");
        }
       
    };
    $(window).ready(set);
    $(window).on("resize", set);

    // ============================================================== 
    //Tooltip
    // ============================================================== 
    document.addEventListener("turbolinks:load", function() {
        $('[data-toggle="tooltip"]').tooltip()
    })
    // ============================================================== 
    //Popover
    // ============================================================== 
    document.addEventListener("turbolinks:load", function() {
        $('[data-toggle="popover"]').popover()
    })
    // ============================================================== 
    // For mega menu
    // ============================================================== 
    jQuery(document).on('click', '.mega-dropdown', function (e) {
        e.stopPropagation()
    });
     jQuery(document).on('click', '.navbar-nav > .dropdown', function(e) {
         e.stopPropagation();
    });
    $(".dropdown-submenu").click(function(){
              $(".dropdown-submenu > .dropdown-menu").toggleClass("show");                     
    });
    // ============================================================== 
    // Resize all elements
    // ============================================================== 
    $("body").trigger("resize"); 
    // ============================================================== 
    //Fix header while scroll
    // ============================================================== 
    // var wind = $(window);
    //     wind.on("load", function() {
    //        var bodyScroll = wind.scrollTop(),
    //            navbar = $(".topbar");
    //        if (bodyScroll > 100) {
    //            navbar.addClass("fixed-header animated slideInDown")
    //        } else {
    //            navbar.removeClass("fixed-header animated slideInDown")
    //        }
    //    });
    //    $(window).scroll(function () {
    //        if ($(window).scrollTop() >= 200) {
    //            $('.topbar').addClass('fixed-header animated slideInDown');
    //            $('.bt-top').addClass('visible');
    //        } else {
    //            $('.topbar').removeClass('fixed-header animated slideInDown');
    //            $('.bt-top').removeClass('visible');
    //        }
    //    });
    // ============================================================== 
    // Animation initialized
    // ============================================================== 
    AOS.init();
    // ============================================================== 
    // Back to top
    // ============================================================== 
    $('.bt-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
    // ============================================================== 
    // This is for the remove target blank from href
    // ============================================================== 
    $('a[target="_blank"]').removeAttr('target');
    
});
