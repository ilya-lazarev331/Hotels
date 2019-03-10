$(document).ready(MASONRY());
function MASONRY() { 
	$('#container').masonry({
	  	itemSelector: '.item',
	  	singleMode: true,
	  	isResizable: true,
	  	isAnimated: true,
         	 animationOptions: { 
	      		queue: false, 
	      		duration: 500 
	     	 }      
		}); 
  };