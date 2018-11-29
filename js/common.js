$(document).ready(function () {
	$('#button-callback').on('click', function() {
		$('#modal-callback').toggleClass('modal_visible')
	});
	$('.modal__close').on('click', function() {
		$('#modal-callback').toggleClass('modal_visible')
	});
});