$(document).ready(function(){

	var d=true;
	$('#yesbutton').click(function(){
		if (d==true) {
            $(this).animate({
			height: '300px',
			width: '100px'


		});
            d=false;
        }
        else {
            $(this).animate({
			height: '100px',
			width: '300px'
		});
            d=true;
        }
    });

    $("#yesbutton").click(function(){
        $("#drawing").slideToggle("slow");
    });

    // $('#yesbutton').click(function(){
    // 	$(this).toggleClass('.nobutton');

    // });

	});