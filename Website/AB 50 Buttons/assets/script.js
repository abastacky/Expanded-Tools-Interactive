$(document).ready(function(){
	
	$('#button-3').click(function() {
		$(this).animate({
			opacity: 0.4,
			marginLeft: '2in',
			fontSize: '24px',
			borderWidth: '10px'
		}, 1000 );
	});

	$('#button-4').hover(function(){
		$("#button-3").toggleClass("change-yellow");
		$("#button-5").toggle("slow");

	});

    $('#button-6').click(function(){
        $(this).fadeTo("slow", 0.25);
        $("#button-5").fadeTo("slow", 0.25);

    });


    $('.item #circle').click(function(){
    	//$(this).fadeOut("fast");
    	$(this).fadeOut('fast', function(){
    		$(this).fadeIn('slow');
    	});
    });
	$('.item #thin').click(function(){
		$(this).animate({
			marginTop: '250px'
		});	

	//?works unreliably
	$('.item .square').click(function(){
		$(this).toggleClass('rotate-45');
	});



	});

	var d=true;
	$('#button-13 div').click(function(){
		if (d==true) {
            $(this).animate({
			marginTop: '-100px'});
            d=false;
        }
        else {
            $(this).animate({
			marginTop: '100px'});
            d=true;
        }
    });


    


	var c=true;
	$('#button-14 div').click(function(){
		if (c==true) {
            $(this).css("width", "150px");
            $(this).css("height", "150px");
            $(this).css("border-radius", "75px");
            c=false;
        }
        else {
            $(this).css("width", "50px");
            $(this).css("height", "50px");
            $(this).css("border-radius", "50px");
            c=true;
        }
    });

	//?not working
	$('#button-15 div').click(function(){
		$(this).toggleClass('rotate-180');
	});
        
});

