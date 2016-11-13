$(function(){

	// 底部按钮的序列号
	var a = 0;

	// 定时器
	var timer;

	// 底部按钮执行函数
	$('.banner_btn li').click(function(){

		// 当前li添加cur类，相邻的li 删除cur类
		$(this).addClass('cur').siblings('li').removeClass('cur');

		// b 等于当前图片的序列号(也叫索引值)
		var b = $(this).index();

		// 第eq(b)张图片以3秒的速度淡入，相邻的以3秒的速度淡出
		$('.banner_img li').eq(b).fadeIn(3000).siblings('li').fadeOut(2000);

		// 按钮序列号  等于 图片索引值
		a = b;
	});


	// 点击右边按钮时执行函数
	$('.next').click(function(){

		// 每点击一下，加一张图片
		a++;

		// 如果按钮序列号 大于 3时，那么按钮序列号 等于 0
		if(a > 3){a = 0;}

		// 底部按钮第eq(a)个按钮添加 cur 类，相邻的 li 删除 cur 类		
		$('.banner_btn li').eq(a).addClass('cur').siblings('li').removeClass('cur');

		// 第eq(a)张图片以3秒的速度淡入，相邻的以3秒的速度淡出
		$('.banner_img li').eq(a).fadeIn(3000).siblings('li').fadeOut(2000);
	});

	// 点击左边按钮时执行函数
	$('.prev').click(function(){

		// 每点击一下，减一张图片
		a--;

		// 如果按钮序列号 小于 0时，那么按钮序列号 等于 3
		if(a < 0){a = 3;}

		// 底部按钮第eq(a)个按钮添加 cur 类，相邻的 li 删除 cur 类	
		$('.banner_btn li').eq(a).addClass('cur').siblings('li').removeClass('cur');

		// 第eq(a)张图片以3秒的速度淡入，相邻的以3秒的速度淡出
		$('.banner_img li').eq(a).fadeIn(3000).siblings('li').fadeOut(2000);
	});

	// 使用定时器实现自动轮播
	var time = function(){

		a++;

		if(a > 3){a = 0;};

		$('.banner_btn li').eq(a).addClass('cur').siblings('li').removeClass('cur');

		$('.banner_img li').eq(a).fadeIn(3000).siblings('li').fadeOut(2000);
	}
	// 调用time的执行函数并赋予时间
	timer = setInterval(time,3000);


	// 鼠标移入是清除定时器
	$('.banner').hover(function(){

		clearInterval(timer)

	},
	// 鼠标移出后继续使用定时器
	function(){

		timer = setInterval(time,3000)
	});
})