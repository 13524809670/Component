$(function(){
	// 鼠标点击 one 按钮时
	$('.btn .one').click(function(){

		// content and bgcolor 显示
		$('.wrap,.bgcolor').show();
	})

	// 鼠标点击btn2时
	$('.btn2').click(function(){

		// content and bgcolor 影藏
		$('.wrap,.bgcolor').hide();
	});


	// 鼠标点击 two 按钮时
	$('.btn .two').click(function(){

		// content and gbcolor 显示 3秒 后淡入
		$('.wrap_one,.gbcolor').show().delay(3000).fadeOut();
	});
})