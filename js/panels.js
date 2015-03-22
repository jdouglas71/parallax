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
    var panelSizes = new Array( 1475, 728, 1200, 1200, 1200, 1062, 1228 );
	var scaleFactor = 0.5;
    //Calculate the size of the section based on all the panels and set it. 
    var sectionSize = 0, i = 0;
    for(i=0; i < panelSizes.length; i++)
    {   
        sectionSize += Math.round(panelSizes[i]*scaleFactor);
    }

	/**
	 * Set the heights of the panel divs.
	 */
	i = 0;
	$('div.bg-panel').each(function() {
		$(this).height(Math.round(panelSizes[i++]*scaleFactor));
		$(this).width(1200);
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
			var yPos = (($window.scrollTop()));
            yPos += 200;
            $fgobj.css( { top : yPos+'px' } );
		}); // window scroll Ends
	});	
}); 

/** 
 * Create HTML5 elements for IE's sake
 */
document.createElement("article");
document.createElement("section");
