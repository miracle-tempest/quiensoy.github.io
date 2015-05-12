$(document).ready(function() {
	$('.content').find('.1').show();
	$('span.1').on('click', function() {
		$('.content').children('*').hide();
		$('.content').find('.1').fadeIn();
	});

	$('span.2').on('click', function() {
		$('.content').children('*').hide();
		$('.content').find('.2').fadeIn();
	});

	$('span.3').on('click', function() {
		$('.content').children('*').hide();
		$('.content').find('.3').fadeIn();
	});

	$('span.4').on('click', function() {
		$('.content').children('*').hide();
		$('.content').find('.4').fadeIn();	
	});

	$('span.5').on('click', function() {
		$('.content').children('*').hide();
		$('.content').find('.5').fadeIn();
	});


});