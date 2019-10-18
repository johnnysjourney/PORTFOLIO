$(function(){
	
	//창의 가로, 세로 크기를 불러오는 함수
			var b_width = screen.availWidth/2-340;
			var b_height = screen.availHeight/2-400;
			
			//alert(b_width);
			//alert(b_height);			
			
	$("nav span a").hover(function(){
		
		
			$(this).css({color:"black"});		
		
		
		},
		function(){
			
			$(this).css({color:"gray"});
			
			
			});
			
	
	$("#section_wrap>div").hover(function(){
		
		
			//$(this).css({background:"black", opacity:"0.5"});
			$(this).children(".div_2th-1").css({display:"block"});
			$(this).find(".div_4th>p").css({display:"block"});	
			
		},
		
		function(){
			
			$(this).find(".div_4th>p").css({display:"none"});	
			$(".div_2th-1").css({display:"none"});
			//$(this).children(".div_2th").css({background:"inherit"});
			
			
			});
	

	//팝업창 열기
		$(".div_4th_1").click(function(){
			

			//창의 위치를 불러오는 함수
			$(".popup").css({top:b_height});
			$(".popup").css({left:b_width});
			
			//창의 내용을 변경하는 함수
			var img_change = $(this).find(".div_5th").find("img").attr("src");
			
			$(".popup_img>img").attr("src", img_change);
		
			$(".popup").css({display:"block"});
					
			//창의 내용을 변경하는 함수
			/*
			var img_change = $(this).find("img").attr("src");
			$(".popup_img>img").attr("src", img_change);
		
			var text_change = $(this).find(".artist_info").text();
			$("#text_change").text(text_change);
			*/	
				});
		//팝업창 닫기
		$("#img_bt").click(function(){
				
					$(".popup").css({display:"none"});
				
				});	
				
}); //스크립트가 끝나는 괄호
	


/*

	
	//팝업상자 클릭
	$("#dj_wrap>li").click(function(){
		
		//창의 위치를 불러오는 함수
		$("#popup_box").css({top:box_height});
		$("#popup_box").css({left:box_width});
		
		
		$("#popup_box").css({display:"block"});
		
		var img_change = $(this).find("img").attr("src");
		$("#img_box>img").attr("src", img_change);
		
		var text_change = $(this).find(".artist_info").text();
		//alert(text_change);
		$("#text_change").text(text_change);
		
		});

		
		*/