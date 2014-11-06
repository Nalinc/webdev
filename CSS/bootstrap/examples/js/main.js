var main=main||{}

main.lib=(function(){
	    $('.carousel').carousel({
    		interval: 2000
    		})

	$("li").on("click",function(){
		$("li").removeClass("active");
		$(this).addClass("active");

	});



}())
