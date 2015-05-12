$(document).ready(function() {
	$('span.1').on('click', function() {
		$('.content').children('*').hide();
		$('.content').find('.1').fadeIn();
	});

	$('span.2').on('click', function() {
		$('.content').children('*').hide();
		$('.content').find('.2').show();
	});

	$('span.3').on('click', function() {
		$('.content').children('*').hide();
		$('.content').find('.3').show();
	});

	$('span.4').on('click', function() {
		$('.content').children('*').hide();
		$('.content').find('.4').show();
	});

	$('span.5').on('click', function() {
		$('.content').children('*').hide();
		$('.content').find('.5').show();
	});


});