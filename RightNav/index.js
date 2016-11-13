$(function(){

	// 鼠标经过时
	$('#main a').hover(function(){

		// 如果当前的（prop 道具）类名是 hides
		if($(this).prop('className')=='hides'){

			// 那么当前 hides 的子元素 img.hide则隐藏
			$(this).children('img.hide').show();
		}
		else{
			// 否则当前 hides 的子元素 img.hide则隐藏
			$(this).children('img.hide').show();

			// 否则当前 hides 的子元素 img.hide则显示
			$(this).children('img.show').hide();

			// 否则当前 hides 的子元素 img.hide的位置缓慢的回到原始位置
			$(this).children('img.hide').animate({marginRight:'0px'},'slow');
		}
	},
	// 鼠标离开时
	function(){
		// 如果当前的 prop 道具) 类名是 hides
		if($(this).prop('className')=='hides'){

			// 那么当前hides 的子元素img.hide则缓慢的隐藏
			$(this).children('img.hide').hide('slow');
		}
		else{
			// 否则当前子元素img.hide缓慢的向右移动143px
			$(this).children('img.hide').animate({
				marginRight:'-143px'},'slow',
			function(){
				// 当前的隐藏
				$(this).hide();

				// 当前的下一个img.hide显示
				$(this).next('img.show').show();
			});
		}
	});

	// 点击返回顶部执行函数
	$('#gotop').click(function(){

		// 如果滚动距离 == 关 返回
		if(scroll == 'off') return;

		// 那么html,body以600ms的速度回到距离顶部为0的位置
		$('html,body').animate({scrollTop:0},800);
	});
})