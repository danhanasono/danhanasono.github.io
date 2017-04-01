$(document).ready(function() {

	setTimeout (introItAll,500);

	//Typed.js intro
	function introItAll(){
		Typed.new('#typed', {
			stringsElement: document.getElementById('typed-strings'),
			typeSpeed: 30,
			startDelay: 250,
			backSpeed: 10,
			shuffle: false,
			backDelay: 150,
			loop: false,
			showCursor: true,
			callback: function() {
				$('#home-footer').addClass('animated fadeInUp');
				foldThatDom()
			},
		});
	};

	function foldThatDom(){
		//Oridomi
		var folded = new OriDomi('#the-fold', {
		  vPanels: [21, 41, 38],     // number of panels when folding left or right (vertically oriented)
		  speed:           2400,  // folding duration in ms
		  ripple: 1 //ripple that bitch
		});
		folded.wait(500).stairs(36);
	};

	//Fade In on Scroll 300px
	var element = document.getElementById("js-fadeInElement");
	  $(element).addClass('js-fade-element-hide');

	  $(window).scroll(function() {
	    if( $("#js-fadeInElement").length > 0 ) {
	      var elementTopToPageTop = $(element).offset().top;
	      var windowTopToPageTop = $(window).scrollTop();
	      var windowInnerHeight = window.innerHeight;
	      var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
	      var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
	      var distanceFromBottomToAppear = 300;

	      if(elementTopToWindowBottom > distanceFromBottomToAppear) {
	        $(element).addClass('js-fade-element-show');
	      }
	      else if(elementTopToWindowBottom < 0) {
	        $(element).removeClass('js-fade-element-show');
	        $(element).addClass('js-fade-element-hide');
	      }
	    }
	  });
	

	//Sticky navbar on scroll
	// var mn = $(".navbar");
	// mns = "navbar-scrolled";
	// hdr = $('#hero').height();

	// $(window).scroll(function() {
	// 	if( $(this).scrollTop() > hdr ) {
	// 		mn.addClass(mns);
	// 	} else {
	// 		mn.removeClass(mns);
	// 	}
	// });


	//Smooth scroll
	$("a[href^='#']:not([href=#carousel-gallery])").on('click', function(e) {

		// prevent default anchor click behavior
		e.preventDefault();

		// store hash
		var hash = this.hash;

		// animate
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function(){

			// when done, add hash to url
			// (default click behaviour)
			window.location.hash = hash;
			console.log('typed.js is live yo');
		});
	});

	//Visible
	(function($) {

	  /**
	   * Copyright 2012, Digital Fusion
	   * Licensed under the MIT license.
	   * http://teamdf.com/jquery-plugins/license/
	   *
	   * @author Sam Sehnert
	   * @desc A small plugin that checks whether elements are within
	   *     the user visible viewport of a web browser.
	   *     only accounts for vertical position, not horizontal.
	   */

	  $.fn.visible = function(partial) {
	    
	      var $t            = $(this),
	          $w            = $(window),
	          viewTop       = $w.scrollTop(),
	          viewBottom    = viewTop + $w.height(),
	          _top          = $t.offset().top,
	          _bottom       = _top + $t.height(),
	          compareTop    = partial === true ? _bottom : _top,
	          compareBottom = partial === true ? _top : _bottom;
	    
	    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

	  };
	    
	})(jQuery);

	var win = $(window);

	var allMods = $(".post-item");

	allMods.each(function(i, el) {
	  var el = $(el);
	  if (el.visible(true)) {
	    el.addClass("already-visible"); 
	  } 
	});

	win.scroll(function(event) {
	  
	  allMods.each(function(i, el) {
	    var el = $(el);
	    if (el.visible(true)) {
	      el.addClass("come-in"); 
	    } 
	  });
	  
	});

	// test if script is loaded
	var myScript = document.createElement('script'); 
	myScript.src = 'js/vendor/masonry.pkgd.js';
	myScript.onload = function() { 
	  console.log('masonry.js is live yo');
	};

	// document.body.appendChild(myScript);

});
