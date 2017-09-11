$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$('#counter-block').ready(function(){
        $('.completed').animationCounter({
          start: 0,
		  end:7533,
          step: 10,
          delay:100
        });
        $('.goingon').animationCounter({
		  start: 0,
          end: 4222,
          step: 10,
          delay:100,
        });
        $('.client').animationCounter({
          start: 0,
          end: 6980,
          step: 10,
          delay: 1,
		  txt: ' +'
        });
        $('.feedback').animationCounter({
          start: 0,
          end: 100,
          step: 2,
          delay: 90,
          txt: ' %'
        });
    });
	
	
	$(document).ready(function(){
        $(".slide-toggle").click(function(){
            $(".box").animate({
                height: "toggle"
            });
        });
    });
	
	 $(document).ready(function() {
   $(".accordion .accord-header").click(function() {
     // For active header definition
     $('.accord-header').removeClass('on');
     $(this).addClass('on');
     
     // Accordion actions
     if($(this).next("div").is(":visible")){
       $(this).next("div").slideUp(400);
       $(this).removeClass('on');
     } else {
       $(".accordion .accord-content").slideUp(400);
       $(this).next("div").slideToggle(400);
     }
  });
});