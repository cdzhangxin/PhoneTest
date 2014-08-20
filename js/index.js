var params = {a:"初始化"};
$(function(){
	console.log(params.a);
	$("body").swipeRight(function(){
		addLeft();
//		$("#user-info").css("left", 0);
//		$("#user-info").animate({
//			left: "0px"
//		}, 500);
	});	
	
	$("body").swipeLeft(function(){
		cutLeft();
	});
	
	$("body").swipeDown(function(){
		params.a = "向下欢动";
		console.log(params.a);
	});
	
	$("body").swipeUp(function(){
		console.log(params.a);
	});
});

function addLeft(){
	setTimeout(function(){
		if ($("#user-info").offset().left <0) {
			$("#user-info").css("left", ++$("#user-info").offset().left);
			addLeft();
		}
	}, 3);
}

function cutLeft(){
	setTimeout(function(){
		if ($("#user-info").offset().left >= -100) {
			$("#user-info").css("left", --$("#user-info").offset().left);
			cutLeft();
		}
	}, 3);
}
