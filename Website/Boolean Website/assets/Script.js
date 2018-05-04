$(document).ready(function(){

	// var scrollPos;


	// $(window).scroll(function(){

	// 	scrollPos = $('body').scrollTop();
	// 	$("#markscontainer").append("<div></div>");
	// 	// $("body").css("height", scrollPos + "vh");
	// 	var n = $('#markscontainer>div').length;
	// 	$('.counter').text(n);

	// 	console.log(n);

	// });
	$(window).scroll(function(){
		$(".scrollingisdrawing").slideUp();
		// $(".scrollingisdrawing").html("scrolling is work");
		});


	var d=true;
	$("#yesbutton").click(function(){
		if (d==true) {
            $(this).animate({
			height: '200px',
			width: '150px',
		});
            $('.counter').show();
            $('.scrolltext').show();

        // $('.counter').hide();    

		var scrollPos;



		$(window).scroll(function(){

		scrollPos = $('body').scrollTop();
		$("#markscontainer").append("<div></div>");
		// $("body").css("height", scrollPos + "vh");
		var n = $('#markscontainer>div').length;
		// $('.counter').show();
		$('.counter').text(n);
console.log("scrollPos");
		//trying to get notification to show up when user needs to switch scroll direction
		if ($('body').scrollTop()>800){
        $('#switch').fadeIn();
     	}
    		else{
      			$('#switch').fadeIn();
     	}


		var goodjob=Number.isInteger(n / 1000);
  		if (goodjob){
  		console.log("goodjob");
  		$("body").css("background-color", "rgb(255, 204, 0)");

  	}

  		var greatjob=Number.isInteger(n/2000);
  		if(greatjob){
  			console.log("greatjob");
  		$("body").css("background-color", "rgb(255, 113, 53)");	
  		}

  		var superb=Number.isInteger(n/3000);
  		if(superb){
  			console.log("superb");
  		$("body").css("background-color", "rgb(122, 50, 73)");
  		}

  		var topnotch=Number.isInteger(n/4000);
  		if(topnotch){
  			console.log("topnotch");
  		$("body").css("background-color", "rgb(68, 255, 137)");
  		}

  	//maybe add this in later
  	// 	$("body").addClass("flicker");
  	// } else {
  	// 	$("body").removeClass("flicker");
  	// }

		});

  //       var n = $('#markscontainer>div').length;
		// $('.counter').text(n);

		// console.log(n);

        $("body").css("margin-top", "100px");
        $("p").css("text-color", "red");

        $(this).html("<p>N<br>O</p>");

        $('.getto1000000').slideUp();
        $('.scrollingisdrawing').slideUp();
            
            d=false;
        }
        else {
            $(this).animate({
			height: '100px',
			width: '250px'
		});

            $("body").css("margin-top", "auto");
            $(this).html("<p>YES</p>");
            $('.getto1000000').slideDown();
            $('.scrollingisdrawing').slideDown();
            $('.counter').hide();
            d=true;
            //how do I bring the counter back to zero?
            n=0;
            // $('#markscontainer>div').html("");
        }
    });

    $("#yesbutton").click(function(){
        $("#drawing").slideToggle("slow");
        $('#markscontainer').html("");
        // $('.counter').html("<div></div><div class=\"scrolltext\">scroll!<\/div>");
        $('.counter').html("scroll!");

    });

    // if (n/1000 ==)




	



    // $('#yesbutton').click(function(){
    // 	$(this).toggleClass('.nobutton');

    // });

	});