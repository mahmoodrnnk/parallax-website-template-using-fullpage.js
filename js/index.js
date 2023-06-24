new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
	scrollingSpeed: 1500

});


$(document).ready(function(){
	$(".fancybox").fancybox({
		  openEffect: "none",
		  closeEffect: "none"
	  });
	  
	  $(".zoom").hover(function(){
		  
		  $(this).addClass('transition');
	  }, function(){
		  
		  $(this).removeClass('transition');
	  });
  });
