$(document).ready(function(){
	$(".menu-items li").click(function(){
		$(".menu-items li.active").removeClass("active");
		$(this).addClass("active")
	})
});