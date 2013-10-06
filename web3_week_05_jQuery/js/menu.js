/*  JavaScript Document */
/*  Written by Chris Converse */

$(document).ready(function() {

	// Create dropdown menus
	$('.nav_menu .dropmenu').css('display','block');
	$('.nav_menu > ul').dropmenu({
		effect : 'slide',
		speed : 250,
		timeout : 0,
		nbsp : false
	});
	
	// Indicate items with sub-menu
	$('li').has('ul').find('> a').addClass('indicator');
	
});
	