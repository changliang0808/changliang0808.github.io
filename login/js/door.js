n=0;
var str="";
$(function () {
	//密码提示
	setTimeout(function(){$("#mimts").fadeOut()},1000)
	//找开键盘
	$(".jianpan").click(function(){
		$(".mimasuo").removeClass("none")
		$(".srmima").removeClass("none")
	})
	//输入密码
	$("#carnum li").on("click",function(e){
			$(this).each(function(index, element) {
			  var index = $(e.currentTarget).index()+1
			  if(index == 10){
				index = "*";
			  }else if(index == 11){
				index="0"
			  }else if(index == 12){
				index="";
				str="";
				n=0;
				$(".srmima span").empty()
			  }
			  $(element).addClass("off").siblings().removeClass("off")
              str += index;
			  n++
			  $(".srmima span").append(index)
			  
              if(n==6){
                   if(str === "170808"){
                    $(".srmima,.mimasuo").fadeOut();
					$(".menkai span").addClass("bashou");
					setTimeout(function(){
						$(".menkai").addClass("kaimen").siblings(".kaimen_guang").addClass("guang");
						setTimeout(function(){
							$(window).attr('location','https://changliang0931.github.io/main/index.html');
						},1950)
					},500)
                    //
                   }else{
                       $("#cyts").fadeIn()

                   }
               }
            });
		})
//再一玩一次
    $("#cyts .tac_mimcw img").click(function(){
         index="";
         str="";
         n=0;
         $(".srmima span").empty();
         $("#carnum li").removeClass('off')
         $(this).parents('#cyts').fadeOut()
    })
});
