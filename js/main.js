$(document).ready(function() {
	
	// MENU

	$('.menu__item a').click(function() {
		let scroll = $(this).attr('val');
		$('html, body').animate({
			scrollTop: $('#'+scroll).offset().top
		}, 500);
	});

	// BURGER BUTTON

	$('.menu-icon').click(function() {
		$('.menu-icon').toggleClass('active');
		$('nav').toggleClass('active');
	});

    // TO TOP BUTTON

	$(window).scroll(function() {
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function() {
		$('body, html').animate({
			scrollTop: 0
		}, 500)
	});

	// FILTER

	$('.btn[filter]').click(function() {
		$('.btn[filter]').attr('class', 'btn btn-outline-secondary');
		$(this).attr('class', 'btn btn-secondary');
		if ($(this).attr('filter') == 'all') {
			$('.portfolio__img').show(300);
		} else {
			$('.portfolio__img').hide(300);
			let filter = $(this).attr('filter');
			$('.portfolio__img[filter='+filter+']').show(300);
		}
	});

	// CAROUSEL

	$('.multiple-items').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		dots: true,
		dotsClass: 'dots-style',
		responsive: [{
            breakpoint: 1199.98,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
	});

	// FORM

	let form = () => {
	    if($('.footer').width() <= 576) {
		    $('.footer input').attr('class', 'form-control form-control-sm');
		    $('.footer textarea').attr('class', 'form-control form-control-sm');
		    $('.footer button').attr('class', 'col-xl-2 btn btn-light btn-sm');
	    };
	    if($('.footer').width() > 576) {
		    $('.footer input').attr('class', 'form-control form-control-lg');
		    $('.footer textarea').attr('class', 'form-control form-control-lg');
		    $('.footer button').attr('class', 'btn btn-light btn-lg');
	    };
    };
    form();
    $(window).resize(function() {
    	form();
    });
	




});

