$(document).ready(function(){
$("#a").click(function(){
        $(".popup").show();
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
  	$("#Uthal").fadeIn( "slow", function() {
//     // Animation complete.
  });
      

});
//from CS
	// $(".image").hover(function(){
	// 	$(this).child(".caption").show();
	// });

// $('.images').on("click",function(){
//   	$('.letters').hide();
// });	

$('#viewimages').on("click",function(){
	$('#galleryBG').show();
});	


$('#x2').on("click",function(){
    // $(window).scrollTop(0);
  	$(galleryBG).hide();   

});


// var scrollPos;

$(window).scroll(function(){
	console.log("scrollPos");

});

// 	if($(window).scrollTop() + $(window).height() == $(document).height() 
// 	|| $(window).scrollTop() == 0 ) {

// 	}
	// if ($('body').scrollTop()>284){
	// 	$('#scroll').toggle(function() {
 //    $(this).rotate({ endDeg:180, persist:true });
 //  }

//  $(window).scroll(function(){
// 	var scrollHeight = $(document).height();
// 	var scrollPosition = $(window).height() + $(window).scrollTop();
// 	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
// 	    // when scroll to bottom of the page
// 	    console.log("time to flip");
// 	$("#arrow").toggleClass(".flip");
// 	}
// });

// if($(window).scrollTop() + $(window).height() == $(document).height()) {
//        console.log("bottom!");
//        $(#arrow).hide();

//    }

// };

// $( "#pc1" ).click(function() {
//   $( "#Behrens" ).fadeOut( "slow", function() {
//     // Animation complete.
//   });
//   $( "#RCA" ).fadeOut( "slow", function() {
//     // Animation complete.
//   });
// });

$( "#Uthal" ).click(function() {
  $( "#toaster" ).toggle( "slide" );
  $( "#Behrens" ).toggle( "slide" );
});

$( "#pc1" ).click(function() {
$( "#Uthal" ).fadeOut( "slow", function() {
//     // Animation complete.
  });
$("#UT").fadeOut("slow", function(){
});

$(".popup2").show();

});



$('#x3').on("click",function(){
    // $(window).scrollTop(0);
  	$(this).parent().hide();
  	$("#Uthal").fadeIn( "slow", function() {
//     // Animation complete.
  });
  	$("#UT").fadeIn( "slow", function() {
//     // Animation complete.
  });
      

});

$('.popuptext2>div').click(function(){
$(".popup3").show();

});

$('#x4').on("click",function(){
    // $(window).scrollTop(0);
  	$(this).parent().hide();
  	  });


$("#next").click(function () {
          $("#pc1").animate({right: '250px'}, "slow" );
    });


//maybe the culprit
$('.popuptext>div').click(function(){
$(".popup1b").show();

});

$('#x5').on("click",function(){
    // $(window).scrollTop(0);
  	$(".popup1b").hide();
  	  });



});

