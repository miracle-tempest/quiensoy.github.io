$(document).ready(function() {
	$('span').on('click', '.1', function() {
		alert('sadfsd');
		$('.content').find('.1').show();
	});

	$('span').on('click', '.2', function() {
		$('.content').find('.2').show();
	});

	$('span').on('click', '.3', function() {
		$('.content').find('.3').show();
	});

	$('span').on('click', '.4', function() {
		$('.content').find('.4').show();
	});


});