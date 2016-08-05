$(document).ready(function(){

    // toggle the side navbar
    $(".toggleNavbar").click(function(){
        $("#sideNavbar").animate({
            width: 'toggle'
        });   
    });

    // toggle the content of the side navbar
    $("#sideNavbar ul li a").click(function(){
        $("#sideNavbar").animate({
            width: 'toggle'
        });        
    });

    // Animations for quotes/testimonials and "Are you interested in attending?" section
	$(window).scroll(function() {
		$(".animation1").each(function(){
		    var pos = $(this).offset().top;

		    var winTop = $(window).scrollTop();
		    if (pos < winTop + 600) {
		      $(this).addClass("slide");
		    }
		});
	});

    // Change color of elements in four columns below the last parallax effect
    $(window).scroll(function(e) {
        if ($(this).scrollTop() > 7350 && $(this).scrollTop() < 7750) 
        {
            $(".bar").css("background-color", "#5f5f9f");
            $(".glyphicon-record, .glyphicon-blackboard, .glyphicon-flash, .glyphicon-fullscreen").css("color", "#5f5f9f");
        }
        else
        {
            $(".bar").css("background-color", "#f6f6fc");
            $(".glyphicon-record, .glyphicon-blackboard, .glyphicon-flash, .glyphicon-fullscreen").css("color", "#dddde2");
        }
    });

   // slideToggle menu to order agenda in programme.html
    $(document).on("click","#showOrderOptions", function(){
		$("#orderOptions").slideToggle("slow");
	});

    // slideToggle explanation on talks in venue.html
	$(document).on("click","#showTalkRoom", function(){
		$("#talkRoom").slideToggle("slow");
	}); 

    // slideToggle explanation on workshops in venue.html
    $(document).on("click","#showWorkshopRoom", function(){
		$("#workshopRoom").slideToggle("slow");
	});

});