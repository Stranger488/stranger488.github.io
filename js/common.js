$(function() {

$(window).scroll(function() {
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if ($(this).scrollTop() > 300){  
    $('.main_head').addClass("sticky");
    $(".sticky_menu").removeClass("hidden");
    $(".top_line .under_menu").removeClass("hidden");
    $(".sticky_menu").addClass("animated fadeInDown");
    $(".top_line .social_wrap").addClass("animated fadeInDown");
    $(".top_line .search").addClass("animated fadeInDown");

    $(".search_wrap").children().addClass("col-lg-4 col-md-4 col-sm-3").removeClass("col-sm-8 col-xs-12");
	$(".social_outer_wrap").children().addClass("col-lg-2 col-md-2 col-sm-2").removeClass("col-sm-4");
	$(".sticky_menu_wrap").children().addClass("col-lg-6 col-md-6 col-sm-7 hidden-xs");
  }
  else{
    $('.main_head').removeClass("sticky");
    $(".sticky_menu").removeClass("animated fadeInDown");
    $(".top_line .social_wrap").removeClass("animated fadeInDown");
    $(".top_line .search").removeClass("animated fadeInDown");
    $(".sticky_menu").addClass("hidden");
    $(".top_line .under_menu").addClass("hidden");

    $(".search_wrap").children().removeClass("col-lg-4 col-md-4 col-sm-3").addClass("col-sm-8 col-xs-12");
	$(".social_outer_wrap").children().removeClass("col-lg-2 col-md-2 col-sm-2").addClass("col-sm-4");
	$(".sticky_menu_wrap").children().removeClass("col-lg-6 col-md-6 col-sm-7 hidden-xs");
  }
});



	// if($(".main_head").hasClass("sticky")) {
	// 	$(".search_wrap").children().addClass("col-lg-4 col-md-4 col-sm-3").removeClass("col-sm-8 col-xs-12");
	// 	$(".social_outer_wrap").children().addClass("col-lg-2 col-md-2 col-sm-2").removeClass("col-sm-4");
	// 	$(".sticky_menu_wrap").children().addClass("col-lg-6 col-md-6 col-sm-7 hidden-xs");
	// };
	
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
				"<a class='fa fa-google-plus' href='#/'></a>",
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


	$(".pagination .page_item").click(function() {
		$(".pagination .page_item.active").removeClass("active");
		$(this).toggleClass("active");
	});

	// undermenu
	$(".full_nav .main_nav .categ").click(function() {
			var line_width = $(".full_nav .under_menu span").css("width"),
				width = $(document).width();

			if ($(".full_nav .under_menu span").is(":hidden")) {
				$(".full_nav .under_menu span").css({"width": "1%", "left": width/2});

				$(".full_nav .under_menu span").animate({
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

			if ($(".full_nav .under_menu span").is(":visible")) {
				$(".full_nav .under_menu span").animate({
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

			$(".full_nav .under_menu").slideToggle(400, function() {
				$(".full_nav .under_menu li").fadeToggle(600);
			});
	});

	$(".main_nav ul li:not(.categ)").click(function() {
		$(".main_nav ul li.active").removeClass("active");
		$(this).toggleClass("active");
	});



	// sticky_menu
	$(".sticky_menu .categ").click(function() {
			var line_width = $(".top_line .under_menu span").css("width"),
				width = $(document).width();

			if ($(".top_line .under_menu span").is(":hidden")) {
				$(".top_line .under_menu span").css({"width": "1%", "left": width/2});

				$(".top_line .under_menu span").animate({
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

			if ($(".top_line .under_menu span").is(":visible")) {
				$(".top_line .under_menu span").animate({
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

			$(".top_line .under_menu").slideToggle(400, function() {
				$(".top_line .under_menu li").fadeToggle(600);
			});


	});

	$(".sticky_nav ul li:not(.categ)").click(function() {
		$(".sticky_nav ul li.active").removeClass("active");
		$(this).toggleClass("active");
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
