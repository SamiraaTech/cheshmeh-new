// JavaScript Document for products

 $(document).ready(function(){
	
						var owl = $("#owl"); 
						owl.owlCarousel({
						items :4,
						itemsDesktop : [995,3],
						itemsDesktopSmall : [767,3],
						itemsTablet: [700,2],
						itemsMobile : [479,1], 
						navigation : true,
						pagination :  false
						}); 
						
						var owl = $("#owl2"); 
						owl.owlCarousel({
						items :4,
						itemsDesktop : [995,3],
						itemsDesktopSmall : [767,3],
						itemsTablet: [700,2],
						itemsMobile : [479,1], 
						navigation : true,
						pagination :  false
						}); 
						
						var owl = $("#owl3"); 
						owl.owlCarousel({
						items : 5, //10 items above 1000px browser width
						itemsDesktop : [995,3], //5 items between 1000px and 901px
						itemsDesktopSmall : [767, 3], // betweem 900px and 601px
						itemsTablet: [700, 2], //2 items between 600 and 0
						itemsMobile : [479, 1], // itemsMobile disabled - inherit from itemsTablet option
						navigation : true,
						pagination :  false,
						autoPlay:false
						}); 
		 }); 
		 
		 $(function() {
		 $(".carousel").jCarouselLite({
			  btnNext: ".next",
			  btnPrev: ".prev"
		 });
	});