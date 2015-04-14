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

function InitializeRotator() 
{	//start after HTML, images have loaded

    var InfiniteRotator =
	{
	    init: function () {
	        //initial fade-in time (in milliseconds)
	        var initialFadeIn = 1000;

	        //interval between items (in milliseconds)
	        var itemInterval = 2000;

	        //cross-fade time (in milliseconds)
	        var fadeTime = 2500;

	        //count number of items
	        var numberOfItems = $('.rotating-item').length;

	        //set current item
	        var currentItem = 0;

	        //show first item
	        $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);

	        //loop through the items		
	        var infiniteLoop = setInterval(function () {
	            $('.rotating-item').eq(currentItem).fadeOut(fadeTime);

	            if (currentItem == numberOfItems - 1) {
	                currentItem = 0;
	            } else {
	                currentItem++;
	            }
	            $('.rotating-item').eq(currentItem).fadeIn(fadeTime);

	        }, itemInterval);
	    }
	};
     
    var InfiniteRotator2 =
	{
	    init: function () {
	        //initial fade-in time (in milliseconds)
	        var initialFadeIn = 1000;

	        //interval between items (in milliseconds)
	        var itemInterval = 2000;

	        //cross-fade time (in milliseconds)
	        var fadeTime = 2500;

	        //count number of items
	        var numberOfItems = $('.rotating-item2').length;

	        //set current item
	        var currentItem = 0;

	        //show first item
	        $('.rotating-item2').eq(currentItem).fadeIn(initialFadeIn);

	        //loop through the items		
	        var infiniteLoop = setInterval(function () {
	            $('.rotating-item2').eq(currentItem).fadeOut(fadeTime);

	            if (currentItem == numberOfItems - 1) {
	                currentItem = 0;
	            } else {
	                currentItem++;
	            }
	            $('.rotating-item2').eq(currentItem).fadeIn(fadeTime);

	        }, itemInterval);
	    }
	};
     
    var InfiniteRotator3 =
	{
	    init: function () {
	        //initial fade-in time (in milliseconds)
	        var initialFadeIn = 1000;

	        //interval between items (in milliseconds)
	        var itemInterval = 2000;

	        //cross-fade time (in milliseconds)
	        var fadeTime = 2500;

	        //count number of items
	        var numberOfItems = $('.rotating-item2').length;

	        //set current item
	        var currentItem = 0;

	        //show first item
	        $('.rotating-item3').eq(currentItem).fadeIn(initialFadeIn);

	        //loop through the items		
	        var infiniteLoop = setInterval(function () {
	            $('.rotating-item3').eq(currentItem).fadeOut(fadeTime);

	            if (currentItem == numberOfItems - 1) {
	                currentItem = 0;
	            } else {
	                currentItem++;
	            }
	            $('.rotating-item3').eq(currentItem).fadeIn(fadeTime);

	        }, itemInterval);
	    }
	};
     
    var InfiniteRotator4 =
	{
	    init: function () {
	        //initial fade-in time (in milliseconds)
	        var initialFadeIn = 1000;

	        //interval between items (in milliseconds)
	        var itemInterval = 2000;

	        //cross-fade time (in milliseconds)
	        var fadeTime = 2500;

	        //count number of items
	        var numberOfItems = $('.rotating-item2').length;

	        //set current item
	        var currentItem = 0;

	        //show first item
	        $('.rotating-item4').eq(currentItem).fadeIn(initialFadeIn);

	        //loop through the items		
	        var infiniteLoop = setInterval(function () {
	            $('.rotating-item4').eq(currentItem).fadeOut(fadeTime);

	            if (currentItem == numberOfItems - 1) {
	                currentItem = 0;
	            } else {
	                currentItem++;
	            }
	            $('.rotating-item4').eq(currentItem).fadeIn(fadeTime);

	        }, itemInterval);
	    }
	};

	InfiniteRotator.init();
	InfiniteRotator2.init();
	InfiniteRotator3.init();
    InfiniteRotator4.init();

}



$(window).load(InitializeRotator);