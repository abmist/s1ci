$(document).ready(function(){

    $(".toggleNavbar").click(function(){
        $("#sideNavbar").animate({
            width: 'toggle'
        });   
    });

    $("#sideNavbar ul li a").click(function(){
        $("#sideNavbar").animate({
            width: 'toggle'
        });        
    });

	$(window).scroll(function() {
		$(".animation1").each(function(){
		    var pos = $(this).offset().top;

		    var winTop = $(window).scrollTop();
		    if (pos < winTop + 600) {
		      $(this).addClass("slide");
		    }
		});
	});

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

    $(document).on("click","#showOrderOptions", function(){
		$("#orderOptions").slideToggle("slow");
	}); 

	 $(document).on("click","#showTalkRoom", function(){
		$("#talkRoom").slideToggle("slow");
	}); 

	 $(document).on("click","#showWorkshopRoom", function(){
		$("#workshopRoom").slideToggle("slow");
	});

});