$(document).ready(function(){
	$('.music').click(function(){
		if($(this).hasClass("playing")){
		  $('#app_bgm').get(0).pause();
			$(this).removeClass("playing").addClass('stop');
		}
		else{
			$(this).addClass("playing").removeClass('stop');
			$('#app_bgm').get(0).play();
		}
	});
	new PageSlider({
	    pages: $('.wrap .page')
	});
})