$(function(){
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
		console.log("向下滑动");
	});
	
	$("body").swipeUp(function(){
		console.log("向上滑动");
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
		if ($("#user-info").offset().left > -100) {
			$("#user-info").css("left", --$("#user-info").offset().left);
			cutLeft();
		}
	}, 3);
}
