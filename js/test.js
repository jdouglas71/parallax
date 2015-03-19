/**
 * Parallax Scrolling Tutorial
 * For NetTuts+
 *  
 * Author: Mohiuddin Parekh
 *	http://www.mohi.me
 * 	@mohiuddinparekh   
 */


$(document).ready(function(){
	// Cache the Window object
	$window = $(window);
                
   $('section[data-type="background"]').each(function(){
     var $bgobj = $(this); // assigning the object
                    
      $(window).scroll(function() {
                    
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!								
		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
	    var yBGMax = '-1245';
        console.log( "BG: " + yPos );
        if( yPos < yBGMax )  yPos = yBGMax;    
		// Put together our final background position
		var coords = '50% '+ yPos + 'px';

		// Move the background
		$bgobj.css({ backgroundPosition: coords });
		
       }); // window scroll Ends

 });

   $('section[data-type="foreground"]').each(function(){
     var $bgobj = $(this); // assigning the object
                    
      $(window).scroll(function() {
		var yPos = (($window.scrollTop()+300) / $bgobj.data('speed')); 
        console.log( "FG: " + yPos );
        //if( yPos < 300 ) yPos = 300;
        var yFGMax = '497';
        //Don't go past the max.
        if( yPos > yFGMax ) yPos = yFGMax;
		// Put together our final background position
		var coords = '68% '+ yPos + 'px';

		// Move the background
		$bgobj.css({ backgroundPosition: coords });
		
       }); // window scroll Ends

 });	

}); 
/* 
 * Create HTML5 elements for IE's sake
 */

document.createElement("article");
document.createElement("section");
