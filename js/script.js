$(window).on("load", function() {
    $(".loader .inner").fadeOut(600, function() {
        $(".loader").fadeOut(750);
    });

    $(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});

})

$(document).ready(function() {
    $('#slides').superslides({
        animation: 'fade',
        play: 4000,
        pagination: false
    })

    $("[data-fancybox]").fancybox();

    $("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});

    const nav = $("#navigation");
    const navTop = nav.offset().top;
    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        var body = $("body");
        if($(window).scrollTop()>= navTop){
            
            body.addClass("fixedNav");
        }
        else{
            
            body.removeClass("fixedNav");
        }
    }

});


