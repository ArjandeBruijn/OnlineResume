// Copyright (c) 2010 TrendMedia Technologies, Inc., Brian McNitt. 
// All rights reserved.
//
// Released under the GPL license
// http://www.opensource.org/licenses/gpl-license.php
//
// **********************************************************************
// This program is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
// **********************************************************************

function my_init(container) 
{
    var first_rotating_item = 1; // 0= background

    //initial fade-in time (in milliseconds)
    var initialFadeIn = 1;

    //interval between items (in milliseconds)
    var itemInterval = 1000;

    //cross-fade time (in milliseconds)
    var fadeTime = 1;

    //count number of items
    var numberOfItems = $(container).length;

    //show first item
    $(container).eq(0).fadeIn(0);

    //set current item
    var currentItem = first_rotating_item;

    //show first item
    $(container).eq(currentItem).fadeIn(initialFadeIn);

    //loop through the items		
    var infiniteLoop = setInterval(function () {
        $(container).eq(currentItem).fadeOut(fadeTime);

        if (currentItem == numberOfItems - 1) 
        {
            currentItem = first_rotating_item;
        }
        else {
            currentItem++;
        }
        $(container).eq(currentItem).fadeIn(fadeTime);

    }, itemInterval);

}

 
$(window).load(function () { my_init('.rotating-item'); my_init('.rotating-item2'); my_init('.rotating-item3'); my_init('.rotating-item4') });