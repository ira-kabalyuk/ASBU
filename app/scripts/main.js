console.log('\'Allo \'Allo!');

 
jQuery(document).ready(function() {

  //slider

 $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});

//end slider

    if ($('html').width() > 1025) {


    $('.post').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
    });

    $('.in-top').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated slideInDown',
        offset: 200
    });

    $('.in-fly').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated slideInUp',
        offset: 200
    });

    }    

   
    /*$('html').smoothScroll(300);*/

    /* placeholder*/       
    $('input, textarea').each(function(){
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function(){ $(this).attr('placeholder', '');});
        $(this).focusout(function(){             
            $(this).attr('placeholder', placeholder);           
        });
    });
    /* placeholder*/ 

    //nav

$(".mobile-menu").click(function( e ) {
        e.stopPropagation();        
        $("nav ul").slideToggle(400);        
    }); 

    $(".blog-menu").click(function( e ) {
        e.stopPropagation();        
        $(".blog-categories-list").slideToggle(400);        
    }); 


   $(".mobile-menu").click(function( e ) {
        e.stopPropagation();
        $(".mobile-menu").toggleClass("is-open");
    }); 

    $(".blog-menu").click(function( e ) {
        e.stopPropagation();
        $(".blog-menu").toggleClass("is-open");
    }); 

  //nav end

  //checkbox block

   $(".checkbox-block").click(function( e ) {        
       $(".checkbox-block").removeClass("block-active")
        $(this).addClass("block-active");
       
    });     

  //end checkbox block 

 

  //catalog-menu

   $(".catalog-menu-list li").click(function( e ) {        
       $(".catalog-menu-list li").removeClass("menu-active")
        $(this).addClass("menu-active");
       
    });



    //paging

     $(".paging-list a").click(function( e ) {        
       $(".paging-list a").removeClass("page-active")
        $(this).addClass("page-active");
       
    });  

    //end paging   


});

