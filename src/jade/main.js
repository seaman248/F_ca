// main.js
$(document).ready(function(){
	// carousel
	$('.carousel').slick({
		dots: false,
		speed: 500
	})
	// magnificPopup
	$('.product .galary').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery:{
			enabled:true
		}
	});
});