/*----------------------------*/
// This is for the portfolio 3 Filterable Portfolio
/*----------------------------*/
document.addEventListener("turbolinks:load", function() {
    "use strict";
    /*----------------------------*/
    // This is for the portfolio 4 Masonry Filterable Portfolio
    /*----------------------------*/

    // filter items on button click
    $('.portfolio4 .filterby').on('click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
	loadMore(initShow);
    });
    // init Isotope
    var $grid = $('.portfolio-box4').isotope({
        itemSelector: '.filter',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.filter',
        }
    });


    //****************************
    // Isotope Load more button
    //****************************

    var initShow = 12; //number of images loaded on init & onclick load more button
    var counter = initShow; //counter for load more button
    var iso = $grid.data('isotope'); // get Isotope instance

    loadMore(initShow); //execute function onload

    function loadMore(toShow) {
        $grid.find(".hidden").removeClass("hidden");

        var elementsToHide = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
            return item.element;
        });

	if(elementsToHide > 0) {
	    $(elementsToHide).addClass('hidden');
	    $("#load-more").show();
	} else {
	    //when no more to load, hide show more button
	    $("#load-more").hide();
	}

	$grid.imagesLoaded().progress( function() {
	  $grid.isotope('layout');
	});
    }

    //append load more button
    $grid.after('<div class="text-center"><a id="load-more" class="btn btn-themecolor btn-md btn-arrow m-t-20" href="javascript:void(0)"> <span>Carregar Mais <i class="ti-arrow-right"></i></span></a></div>');

    //when load more button clicked
    $(".portfolio4 #load-more").click(function() {
        if ($('#filters').data('clicked')) {
            //when filter button clicked, set initial value for counter
            counter = initShow;
            j$('#filters').data('clicked', false);
        } else {
            counter = counter;
        };

        counter = counter + initShow;

        loadMore(counter);
    });
});

/**--------------------------------**/
// portfolio 5
/**--------------------------------**/
$('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
            return item.el.attr('title') + '<small>by Jon Doe</small>';
        }
    }
});
