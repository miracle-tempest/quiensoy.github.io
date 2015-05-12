$(document).ready(function() {
	$('span').hasClass('1').on('click', function() {
		alert('sadfsd');
		$('.content').find('.1').show();
	});

	$('span').hasClass('2').on('click', function() {
		$('.content').find('.2').show();
	});

	$('span').hasClass('3').on('click', function() {
		$('.content').find('.3').show();
	});

	$('span').hasClass('4').on('click', function() {
		$('.content').find('.4').show();
	});


});