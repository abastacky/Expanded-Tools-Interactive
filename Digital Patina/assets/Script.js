$(document).ready(function(){
$("#e").click(function(){
        $("#popup").show();
    });

$('div.sticky').on("click",function(){
    // $(window).scrollTop(0);
  	$("html, body").animate({ scrollTop: 0 }, 600);
        return false;

});

//get Reactor letterforms to display when you've scrolled down the page
// $(window).scrollTop(200);
// 	$("#r").show();

$('#x').on("click",function(){
    // $(window).scrollTop(0);
  	$(this).parent().hide();
      

});
//from CS
	// $(".image").hover(function(){
	// 	$(this).child(".caption").show();
	// });

$('.images').on("click",function(){
  	$('.letters').hide();
});	

});