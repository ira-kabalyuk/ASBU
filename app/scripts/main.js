console.log('\'Allo \'Allo!');

 
jQuery(document).ready(function() {

   $('.head-slider').slick({
      infinite: true,
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: false,
    });

   if ($('html').width() < 767) {

    $('.responsive-slider').slick({
      infinite: true,
      arrows: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: false,
    });

   }

   $('.slider-content').slick({
      infinite: true,
      arrows: false,
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      accessibility: false,

        responsive: [
            {
              breakpoint: 993,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,               
              }
            },

            {
              breakpoint: 767,
              settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,               
              }
            },
        ]    
    });

   $('.product-slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.product-slider-nav'
       });

      $('.product-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
      });


   $('.slider-product-content').slick({
      infinite: true,
      arrows: false,      
      slidesToShow: 3,
      slidesToScroll: 1,
      accessibility: false,

        responsive: [
            {
              breakpoint: 992,
              settings: { 
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,                                   
              }
            },

            {
              breakpoint: 540,
              settings: {                             
                slidesToShow: 1,
                slidesToScroll: 1,  
                 dots: true,                           
              }
            }
        ]    
    });


   $('.prev-button').click(function(){
    $('.slider-product-content').slick('slickPrev');
  });

   $('.next-button').click(function(){
    $('.slider-product-content').slick('slickNext');
  });


   $('.slider-product-content-1').slick({
      infinite: true,
      arrows: false,      
      slidesToShow: 3,
      slidesToScroll: 1,
      accessibility: false,

        responsive: [
            {
              breakpoint: 992,
              settings: { 
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,                                   
              }
            },

            {
              breakpoint: 540,
              settings: {                             
                slidesToShow: 1,
                slidesToScroll: 1,  
                 dots: true,                           
              }
            }
        ]    
    });

   $('.prev-button-bot').click(function(){
    $('.slider-product-content-1').slick('slickPrev');
  });

   $('.next-button-bot').click(function(){
    $('.slider-product-content-1').slick('slickNext');
  });

   //footer tab

    // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".footer .tab_content").hide();
    $(".footer .tab_content:first").show();

  /* if in tab mode */
    $(".footer ul.tabs li").click(function() {
    
      $(".footer .tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();    
    
      $(".footer ul.tabs li").removeClass("active");
      $(this).addClass("active");

    $(".footer .tab_drawer_heading").removeClass("d_active");
    $(".footer .tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
    
    });
  /* if in drawer mode */
  $(".footer .tab_drawer_heading").click(function() {
      
      $(".footer .tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
    
    $(".footer .tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
    
    $(".footer ul.tabs li").removeClass("active");
    $(".footer ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
  
  
  /* Extra class "tab_last" 
     to add border to right side
     of last tab */
  $('.footer ul.tabs li').last().addClass("tab_last");
  

   //end footer tab

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


   /*$('.mobile-menu').click( function() {
     
   $('nav ul').toggleClass("showing");
    $(".nav ul").slideToggle(400);
    $('body').toggleClass('menu-open');
  });

   $(".mobile-menu").click(function( e ) {
        e.stopPropagation();
        $(".mobile-menu").toggleClass("is-open");
    }); */

  //nav end

  //checkbox block

   $(".checkbox-block").click(function( e ) {        
       $(".checkbox-block").removeClass("block-active")
        $(this).addClass("block-active");
       
    });  

  //end checkbox block 

  //cart

  $(".cart-block").click(function( e ) {
        e.stopPropagation();
        /*$(".cart").toggleClass("is-emersione");*/
        $(".cart").slideToggle(400);
        $('body').toggleClass('menu-open');
    }); 


    $("body").click(function(e) { 
      var div = $(".cart"); 
      if (!div.is(e.target) 
          && !div.has(e.target).length) { 
        div.removeClass("is-emersione"); 
      }
    });

 //cart button

  $(".delete-link").click(function( e ) {       
       $(this).parents( ".cart-item" ).fadeOut( "slow", function() {   
      });
    });

  $(".icon-cart-close").click(function( e ) {       
       $(this).parents( ".cart-item" ).fadeOut( "slow", function() {    
      });
    });
 
 //очистка корзины

  $(".cart-delete-link").click(function( e ) {       
       $(".cart-item" ).fadeOut( "slow", function() {   
      });
    });

  //catalog-menu

   $(".catalog-menu-list li").click(function( e ) {        
       $(".catalog-menu-list li").removeClass("menu-active")
        $(this).addClass("menu-active");
       
    });

   //mob

    // Create the dropdown base
      $("<select />").appendTo(".catalog-menu");

      // Create default option "Go to..."
      $("<option />", {
         "selected": "selected",
         "value"   : "",
         "text"    : "Постельное белье"
      }).appendTo(".catalog-menu select");

      // Populate dropdown with menu items
      $(".catalog-menu a").each(function() {
       var el = $(this);
       $("<option />", {
           "value"   : el.attr("href"),
           "text"    : el.text()
       }).appendTo(".catalog-menu select");

      });

      $(".catalog-menu select").change(function() {
        window.location = $(this).find("option:selected").val();
      }); 

  //catalog-menu-end

  // nice-select

      $(document).ready(function() {
      $('select').niceSelect();
    });

  // end nice-select 

  //left-column

  // Create the dropdown base
      $("<select />").appendTo(".page-menu");

      // Create default option "Go to..."
      $("<option />", {
         "selected": "selected",
         "value"   : "",
         "text"    : "Всё"
      }).appendTo(".page-menu select");

      // Populate dropdown with menu items
      $(".page-menu a").each(function() {
       var el = $(this);
       $("<option />", {
           "value"   : el.attr("href"),
           "text"    : el.text()
       }).appendTo(".page-menu select");

      });

      $(".page-menu select").change(function() {
        window.location = $(this).find("option:selected").val();
      }); 

  //end left-column

  //right-column

   $('.filter-mobile-menu').click( function() {
      
    $('.filter-list').toggleClass("is-show");

  });

   $(".filter-mobile-menu").click(function( e ) {
        e.stopPropagation();
        $(".filter-mobile-menu").toggleClass("open");
    });

    /*$(".filter-item .color-button").click(function( e ) {
        e.stopPropagation();
        $(".filter-list").removeClass("is-show");
    });  */

    //paging

     $(".paging li").click(function( e ) {        
       $(".paging li").removeClass("page-active")
        $(this).addClass("page-active");
       
    });  

    //end paging   

  //end right-column 

  //product-filter

    $('.right-btn').click(function() {
   var countElem = $(this).parent().find('.counter');
      var count = parseInt(countElem.text()) + 1;      
      countElem.text(count);      
    });
  
    $('.left-btn').click(function() {
   var countElem = $(this).parent().find('.counter');
      var count = parseInt(countElem.text()) - 1;
      if(count < 1) {
        return;
        }
      countElem.text(count);        
    });

  //product tab    
    
    $.fn.responsiveTabs = function() {

    return this.each(function() {
      var el = $(this),
          tabs = el.find('dt'),
          content = el.find('dd'),
          placeholder = $('<div class="responsive-tabs-placeholder"></div>').insertAfter(el);

      tabs.on('click', function() {
        var tab = $(this);

        tabs.not(tab).removeClass('active');
        tab.addClass('active');

        placeholder.html( tab.next().html() );
      });

      tabs.filter(':first').trigger('click');
    });

  }


  $('.responsive-tabs').responsiveTabs();

   //end product tab   

   if(navigator.userAgent.match(/iPhone/i)) {
  $('body').addClass('device-iphone');
}


//create-page-tabs

// tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	$('ul.tabs li').last().addClass("tab_last");
	

//create-page-tabs end

//эффекты появления в каталоге

  function onImgload(){
    $(this).parents('.catalog-page .catalog-item').addClass('animated zoomIn');
  }

  $(".catalog-page .catalog-item img").on('load', onImgload).each(function() {
    if(this.complete) onImgload.call(this);
  });

  $(window).on('load', function(){
   $(".catalog-page .catalog-item").each(function(){
    if(!$(this).hasClass('animated zoomIn')) {
     $(this).addClass('animated zoomIn');
    }
   })
  })

});

