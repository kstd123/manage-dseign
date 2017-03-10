require(['materialize','jquery','director'],function($){
	$(function() {
		alert("123")
			$('.carousel').carousel();
			$('.collapsible').collapsible({
				accordion: false
			});
			function open_modal(){
				alert("123");
				console.log("123")
			}
//			$.ajax({
//				type: "POST",
//				url: "localhost:3001/piaoeda-web/mobile/warranty/add",
//				contentType: "application/json",
//
//				success: function(e) {
//					console.log("success ajax")
//					console.log(e);
//				}
//			})
			//					$(".modal-trigger").leanModal({
			//						dismissible: true, // 点击模态框外部则关闭模态框
			//						opacity: .5, // 背景透明度
			//						in_duration: 300, // 切入时间
			//						out_duration: 200, // 切出时间
			//						ready: function() { alert('Ready'); }, // 当模态框打开时执行的函数
			//						complete: function() { alert('Closed'); } // 当模态框关闭时执行的函数
			//					});
		})
		
})
