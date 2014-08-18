window.onload = function(){
	$("body").toggle(
		function(e){
			e.stopPropagation();
			$("#user-info").animate({left: "0"}, 1000);
		},
		function(e){
			e.stopPropagation();
			$("#user-info").animate({left: "-100"}, 1000);
		}
	);
};
