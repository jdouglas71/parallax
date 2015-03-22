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

    /** Background Section Processing */
    //The panel sizes 
    //JGD TODO: Read these on load.
    //var panelSizes = new Array( 1475, 728 );//, 1200, 1200, 1062, 1228 );
    //Calculate the size of the section based on all the panels and set it. 
    //var sectionSize = 0, i = 0;
    //for(i=0; i < panelSizes.length; i++)
    //{   
    //    sectionSize += Math.round(panelSizes[i]/2);
    //}
    //$('#bg-panel').height( sectionSize );
    //var coords = getCoordStr( 0 );
    //$('#bg-panel').css({ backgroundPosition: coords });
	
    /**
	 * Move the background sections.
	 */
	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this); // assigning the object
                    
		$(window).scroll(function() {
			// Scroll the background at var speed
			// the yPos is a negative value because we're scrolling it UP!								
			var yPos = -($window.scrollTop());/// $bgobj.data('speed'));
            var coords = '50% ' + yPos + 'px';
            //var coords = getCoordStr( yPos );
			// Move the background
			$bgobj.css({ backgroundPosition: coords });
		}); // window scroll Ends
	});

    /** Foreground Section Processing */
    var topLimit = 300; //As measured from top
    //var bottomLimit = 300; //As measured from bottom
    //var foregroundLimit = sectionSize - topLimit - bottomLimit;
    //var bgFGRatio = foregroundLimit / sectionSize;
	/**
	 * Move the foreground section.
	 */
	$('section[data-type="foreground"]').each(function(){
		var $fgobj = $(this); // assigning the object
                    
		$(window).scroll(function() {
			var yPos = (($window.scrollTop()+topLimit));
            // Put together our final background position
			var coords = '68% '+ yPos + 'px';
			// Move the background
			$fgobj.css({ backgroundPosition: coords });
		}); // window scroll Ends
	});	

    /**
     * Calculate the coords string based on the yPos
     */
    function getCoordStr(yPos)
    {
		// Put together our final background position
		var coords = '50% '+ yPos + 'px,';
        for(i=0; i<(panelSizes.length - 1);i++)
        {
            coords += '50% ' + (yPos+(Math.round(panelSizes[i]/2))) + 'px,';
        }
        console.log( "coords: " + coords );
        return coords;
    }
}); 

/** 
 * Create HTML5 elements for IE's sake
 */
document.createElement("article");
document.createElement("section");
