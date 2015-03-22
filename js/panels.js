/**
 * Parallax Front Page for TouchJet.
 *  
 * Author: Jason Douglas
 */

/**
 * TODO: Define FG-BG overlap points that trigger bg image section swapping.
 * TODO: Handle scaling.
 */

$(document).ready(function()  {
	// Cache the Window object
	$window = $(window);
    var $oldPanel = 0;

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
    var topLimit = 200; //As measured from top
    var bottomLimit = 3045; //As measured from bottomo
    var deltaFG = bottomLimit - topLimit;
	/**
	 * Move the foreground section.
	 */
	$('section[data-type="foreground"]').each(function(){
		var $fgobj = $(this); // assigning the object
		var ratio = Math.round(sectionSize/$window.height()) + 1;

		$(window).scroll(function() {
			var yPos = $window.scrollTop();
			prevSchool = yPos;
			var curPos = parseInt($fgobj.css('top'),10);
			if( isNaN(curPos) ) curPos = topLimit;        
			var panelNum = getPanelNumber(curPos); 
            if( panelNum != $oldPanel )  
            {
                console.log( "SWAPPING" );
                swapPanelImages( panelNum );
            }
            $oldPanel = panelNum;
            console.log( "Panel Number: " + getPanelNumber(curPos) );
			console.log( "curPos: " + curPos );
			//console.log( "yPos+topLimit: " + (yPos+topLimit) );
			//console.log( "ratio: " + ratio );
			if( (curPos < bottomLimit) || (curPos > (yPos+$window.height()-100)) )  
			{
				yPos += $(window).scrollTop()/ratio;
				yPos += topLimit;
				//console.log( "FG yPos: " + yPos );
				$fgobj.css( { top : yPos } );              
			}
		}); 
	});

	/**
	 * Get the panel number based on curPos.
	 */
	function getPanelNumber(curPos)
	{
		var i = 1;
		var total = panelSizes[0]*scaleFactor;
		for(i=1; i<panelSizes.length; i++, total += panelSizes[i]*scaleFactor)
		{
			if( curPos < total )
			{
				return i;
			}
		}
	}

    /**
     * Swap images
     */
    function swapPanelImages(panelNum)
    {
        if( panelNum == 2 || panelNum == 6 || panelNum == 7 ) return;
        $('#bg-panel-'+panelNum).fadeOut( 1000, function() {
            $(this).css( 'background-image', 'url(../images/panel'+panelNum+'.png)' );
            $(this).fadeIn( 500 );    
        });
    }
}); 

/** 
 * Create HTML5 elements for IE's sake
 */
document.createElement("article");
document.createElement("section");
