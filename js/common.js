new WOW().init();

$(document).ready(function () {
	$('#button-callback').on('click', function() {
		$('#modal-callback').toggleClass('modal_visible')
	});
	$('.modal__close').on('click', function() {
		$('#modal-callback').toggleClass('modal_visible')
	});


	// слик слайдер
	$('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: '<div class="arrow arrow_right"></div>',
		prevArrow: '<div class="arrow arrow_left"></div>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	/* отправка формы */
	$(".js-ajax").submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "/mailer/smart.php",
			data: $(this).serialize(),
		}).done(function() {
				$(this).find("input").val("");
				alert("Ваша заявка принята");
				$(".js-ajax").trigger("reset");
			});
		return false;
	});

}); /* end document */


/*
.done(function() {
			$(this).find("input").val("");
			alert("Ваша заявка принята");
			$(".js-ajax").trigger("reset");
		});*/