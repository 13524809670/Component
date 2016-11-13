$(function(){
	var loopPlayerInit = (function(){

		// 检索页面元素的变量
		var $prev = null;
			$next = null;
			$btn1 = null;
			$imglist = null,
			origin=['125px','600px'];
			imgAll=([['images/1.jpg','images/1.jpg','images/1.jpg','images/1.jpg'],['images/1.jpg','images/1.jpg','images/1.jpg','images/1.jpg'],['images/1.jpg','images/1.jpg','images/1.jpg','images/1.jpg']])


		function init(){
			$prev = $('.prev'),
			$next = $('.next'),
			$btn1 = $('.btn1'),
			$imglist = $('.main ul li');
			configer();
			setEvent();
		}

		function configer(){
			var ang = 5,
				aint = -5;
			$imglist.transform({origin:origin});	
			$imglist.each(function(i){
				var $this = $(this);
				$this.transform({rotate:aint +(i*ang)+'deg'});
			})
		}
		function setEvent(){
			$prev.bind('click',function({
				anigo(-1);
				
				return false;
			});

			$next.bind('click',function({
				anigo(1)
				return false;
			});

			$btn1.bind('click',function({
				
				return false;
			});
		}
		return init;

		function createImg(arr){

			var imgArr[];
			for(var i in arr){
				imgArr[i]=[];
				for(var x in arr[i]){
					imgArr[i][x]=new Images();
					imgArr[i][x].src=arr[i][x];
				}
			}
			return imgArr;
		}
	})();
	loopPlayerInit();
})