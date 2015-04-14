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
    //initial fade-in time (in milliseconds)
    var initialFadeIn = 1000;

    //interval between items (in milliseconds)
    var itemInterval = 2000;

    //cross-fade time (in milliseconds)
    var fadeTime = 2500;

    //count number of items
    var numberOfItems = $(container).length;

    //set current item
    var currentItem = 0;

    //show first item
    $(container).eq(currentItem).fadeIn(initialFadeIn);

    //loop through the items		
    var infiniteLoop = setInterval(function () {
        $(container).eq(currentItem).fadeOut(fadeTime);

        if (currentItem == numberOfItems - 1) {
            currentItem = 0;
        } else {
            currentItem++;
        }
        $(container).eq(currentItem).fadeIn(fadeTime);

    }, itemInterval);

}

function InitializeRotator() 
{	//start after HTML, images have loaded

    var InfiniteRotator =
	{
	    init: function () {
	        my_init('.rotating-item');
	    }
	};
     
    var InfiniteRotator2 =
	{
        init: function () {
	        my_init('.rotating-item2');
	    }
	};
     
    var InfiniteRotator3 =
	{
        init: function () {
	        my_init('.rotating-item3');
	    }
	};
     
    var InfiniteRotator4 =
	{
	    init: function () {
	        my_init('.rotating-item4');
	    }
	};

	InfiniteRotator.init();
	InfiniteRotator2.init();
	InfiniteRotator3.init();
    InfiniteRotator4.init();

}



$(window).load(InitializeRotator);