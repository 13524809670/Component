$(function(){

	// 显示每页的数目
	var two = 5;

	// 获取con内的数据数量
	var items = $('#con').children().size();

	// num_page等于 con 数量 除以 显示每页的数量
	var num_page = Math.ceil(items/two);

	// 隐藏默认值
	$('#one').val(0);

	$('#two').val(two);


	var addHtml = '<a class="prevlink" href="javascript:prev();">上一页</a>';

	var curLink = 0;

	while(num_page > curLink){

		addHtml += '<a class="pageLink" href="javascript:go_to_page(' + curLink +')" longdesc="' + curLink + '">' + (curLink + 1) + '</a>';

		curLink++;
	}

	addHtml += '<a class="next_link" href="javascript:next();">下一页</a>';

	$('#pages').html(addHtml);

	// 将活动类添加到第一个链接
	$('#pages .pageLink:first').addClass('active');

	//隐藏该对象下面的所有子元素
	$('#con').children().css('display','none');

	//显示第n（two）元素
	$('#con').children().slice(0,two).css('display','block');
});


// 上一页
function prev(){

	new_page = parseInt($('#one').val()) - 1;

	// 如果在当前的活动链接运行功能之前有一个项目
	if($('.active').prev('.pageLink').length == true){

		go_to_page(new_page);
	}
}

// 下一页
function next(){
	new_page = parseInt($('#one').val()) + 1;

	// 如果当前活动链接运行该功能后，如果有一个项目
	if($('.active').next('.pageLink').length == true){

		go_to_page(new_page);
	}
}


// 跳转某一页
function go_to_page(page_num){

	// 获取每页显示的项目数
	var two = parseInt($('#two').val());

	// 获取从“开始”的片的元素数
	start_from = page_num * two;

	// 获取要结束的部分的元素数
	end_on = start_from + two;

	// 隐藏的div元素的所有孩子，得到特定的物品和给他们
	$('#con').children().css('display','none').slice(start_from,end_on).css('display','block');

	// 把网页的链接，当前页面的添加活性longdesc属性类，它从以前的活动页链接中删除该类
	$('.pageLink[ longdesc=' + page_num + ']').addClass('active').siblings('.active').removeClass('active');

	// 更新当前页面输入字段
	$('#one').val(page_num);
}

