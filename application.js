$(document).ready(function() {
	$('.content').find('.1').slideUp(1);
	$('span.1').on('click', function() {
		$('.content').find('.1').slideToggle();
	});

	$('span.2').on('click', function() {
		$('.content').find('.2').slideToggle();
	});

	$('span.3').on('click', function() {
		$('.content').find('.3').slideToggle();
	});

	$('span.4').on('click', function() {
		$('.content').find('.4').slideToggle();
	});


});