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

		console.log(n);

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
        }
    });

    $("#yesbutton").click(function(){
        $("#drawing").slideToggle("slow");
    });


	



    // $('#yesbutton').click(function(){
    // 	$(this).toggleClass('.nobutton');

    // });

	});