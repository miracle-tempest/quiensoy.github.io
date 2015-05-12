$(document).ready(function() {
	$('.1').on('click', 'span', function() {
		alert('sadfsd');
		$('.content').find('.1').show();
	});

	$('.2').on('click', 'span', function() {
		$('.content').find('.2').show();
	});

	$('.3').on('click', 'span', function() {
		$('.content').find('.3').show();
	});

	$('.4').on('click', 'span', function() {
		$('.content').find('.4').show();
	});


});