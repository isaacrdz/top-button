$(document).ready(function(){

	$('.ir').click(function(){
		$('body, html').animate({
			scrollTop:'0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir').slideDown(300);
		}else{
			$('.ir').slideUp(300);

		}
	});

});