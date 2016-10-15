$(function() {


	$("#my-menu").mmenu({
		dividers: {
		},
		extensions: ["widescreen", "theme-white", "effect-menu-slide", "pagedim-black"],
		navbar: {
			title: "Меню"
		},
		navbars: [
		{
			position: "bottom",
			content: [
				"<a class='fa fa-vk' href='#/'></a>",
				"<a class='fa fa-facebook' href='#/'></a>",
				"<a class='fa fa-twitter' href='#/'></a>",
				"<a class='fa fa-instagram' href='#/'></a>",
			 ]
		}
		]
	});

		var api = $("#my-menu").data("mmenu");
		api.bind("closed", function () {
			$(".toggle-mnu").removeClass("on");
		});

		$(".toggle-mnu").click(function() {
		var mmAPI = $( "#my-menu").data( "mmenu" );
		mmAPI.open();
		$(".toggle-mnu").toggleClass("on");
		$(".main-menu").slideToggle();
		return false;

		
	});
$("#my-menu").find( ".mm-next" ).addClass("mm-fullsubopen");


	// Custom JS
	$(".main_nav ul li:not(.categ)").click(function() {
		$(".main_nav ul li.active").removeClass("active");
		$(this).toggleClass("active");
	});

	$(".pagination .page_item").click(function() {
		$(".pagination .page_item.active").removeClass("active");
		$(this).toggleClass("active");
	});

	// undermenu
	$(".main_nav ul li:nth-child(2)").click(function() {
			var line_width = $(".under_menu span").css("width"),
				width = $(document).width();

			if ($(".under_menu span").is(":hidden")) {
				$(".under_menu span").css({"width": "1%", "left": width/2});

				$(".under_menu span").animate({
				width: "100%", 
				left: "0"
			}, {
				duration: 500,
				specialEasing: {
					opacity: 'easeInQuad',
					height: 'swing'
				} 
			});
			}

			if ($(".under_menu span").is(":visible")) {
				$(".under_menu span").animate({
				width: "1%", 
				left: width/2
			}, {
				duration: 600,
				specialEasing: {
					opacity: 'easeInQuad',
					height: 'swing'
				} 
			});
			}

			$(".under_menu").slideToggle(400, function() {
				$(".under_menu li").fadeToggle(600);
			});
	});

	// owlcarousel
	$('.owl-carousel').owlCarousel({
		responsiveClass:true,
		responsive:{
				0:{
					nav:false,
					// autoWidth:false,
					items:1,
				},
				480:{
					nav:true,
				}
		},
		nav:true,
		navSpeed: 600,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		loop: true,
		autoWidth:true,
	});

		/*
	 * Replace all SVG images with inline SVG
	 */
	$('img.img-svg').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
			if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});

	// SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	
});
