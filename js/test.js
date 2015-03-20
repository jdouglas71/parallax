/**
 * Parallax Front Page for TouchJet.
 *  
 * Author: Jason Douglas
 */

/**
 * TODO: Calculate full length of background sections.
 * TODO: Define end points for foreground section scrolling.
 * TODO: Define FG-BG overlap points that trigger bg image section swapping.
 * 
 */


$(document).ready(function()  {
	// Cache the Window object
	$window = $(window);

	/**
	 * Move the background sections.
	 */
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

	/**
	 * Move the foreground section.
	 */
	$('section[data-type="foreground"]').each(function(){
		var $fgobj = $(this); // assigning the object
                    
		$(window).scroll(function() {
			var yPos = (($window.scrollTop()+300) / $fgobj.data('speed')); 
			console.log( "FG: " + yPos );
			//if( yPos < 300 ) yPos = 300;
			var yFGMax = '497';
			//Don't go past the max.
			if( yPos > yFGMax ) yPos = yFGMax;
			// Put together our final background position
			var coords = '68% '+ yPos + 'px';
	
			// Move the background
			$fgobj.css({ backgroundPosition: coords });
		}); // window scroll Ends

	});	
}); 


/* 
 * Create HTML5 elements for IE's sake
 */
document.createElement("article");
document.createElement("section");
