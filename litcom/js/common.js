$(function() {
    // Custom JS
    // overlay
    $('#dismiss, .overlay').on('click', function () {
            // hide sidebar
            $('#sidebar').removeClass('active');
            // hide overlay
            $('.overlay').removeClass('active');
    });

        $('#sidebarCollapse').on('click', function () {
            // open sidebar
            $('#sidebar').addClass('active');
            // fade in the overlay
            $('.overlay').addClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    // toTop button
    $(window).scroll(function() {
        if($(this).scrollTop() > 400) {
            $('#toTop').addClass("top-active");
        } else {
            $('#toTop').removeClass("top-active");
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0}, 500);
    });

});
