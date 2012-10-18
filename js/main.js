$(function() {

	var $sortable = $( "#sortable" );
	
	$sortable.sortable({
		start: function(event, ui) { },
	   
		stop: function(event, ui) {
			//$sortable.find('li').removeClass('height-transform-hide').addClass('height-transform-show');
			//$sortable.sortable("disable");
		}
    }).disableSelection();;
	
	$sortable.sortable({ scroll: true, scrollSensitivity: 200});
	
	$sortable.sortable({ handle: '.dragger' });
	//$sortable.sortable("disable");
	
	
	var $item = $(".item") 
	var $homepage = $('#homepage');
	var $art = $('#art');
	var $home = $("#home");
	
	$item.click(function() {
         
		 $homepage.removeClass('lightSpeedIn').addClass('animated lightSpeedOut'); 
		 $art.fadeIn('slow');
		 $home.css('visibility','visible'); 
		 
		 $('body,html').animate({
			scrollTop: 0
		 }, 800);
		 
		 setTimeout(function() {
			$homepage.css('display','none');
		 }, 400);
		
	 }); 
	
	$home.click(function() {
		  $homepage.css('display','block');
		  $homepage.removeClass('lightSpeedOut').addClass('animated lightSpeedIn'); 
		  $art.fadeOut('slow');
		  $home.css('visibility','hidden');
		  $('body,html').animate({
			scrollTop: 0
		  }, 800);
	 });
	
	$(".expand").click(function(){
	      $(this).parent().next().animate({
			height: "1452px"
		  }, 1500 );	
		  
		  $(this).parent().parent().animate({
			height: "1508px"
			}, 1500, function() {	alert("all done")}
		  );  	
		  
		  $(this).parent().next().find('.slider').css('display','none'); 
		  $(this).parent().next().append('<img id="ext_img" src="img/vertical_index.jpg" />'); 
		
	 });	
	
	$(".collapse").click(function() {
		 $(this).parent().next().find('#ext_img').remove(); 
		 $(this).parent().next().find('.slider').css('display','block'); 
		 $(this).parent().next().animate({
			height: "280px"
			}, 1500, function() {	alert("all done")}
		  );  
				
		  
		  $(this).parent().parent().animate({
			height: "320px"
		  }, 1500 );	
	 });
     
   	
	bindKeyDown();
	
	$item.each(function(){
	
		this.addEventListener("touchstart", touchStart, false);
	
	});

	
	function touchStart(event) {   
			
		var targetTouches = event.targetTouches;
		
		if(targetTouches.length == 2) {
			$(this).find('span').toggleClass('folded-corner');	
			
			if($(this).find('span').hasClass('folded-corner')) {
				//alert('add');
				$(this).find('span img').fadeIn('fast');
				$('img.star').css('z-index','5');
				$('img.star').addClass('star-anim');	
			} else {
				$(this).find('span img').fadeOut('fast');
			}
			
			setTimeout(function() {
				$('img.star').removeClass('star-anim');	
				$('img.star').css('z-index','-1');
			}, 500);
		}
	};
	
	
});


function bindKeyDown() {
	
	var $sortable = $( "#sortable" );

	var foo = $sortable.sortable({
		update: function (e, ui) {
		var order = foo.sortable("toArray").join();
		$.cookie("sortableOrder", order);
		
		}
	});

	var foo = $sortable,
	order = $.cookie("sortableOrder");
	if (order) {
 		$(order.split(',')).each(function (i, id) {
			//appending the element with the ID given id should move each element to the end of the
			// list one after another, and at the end, the order should be restored.
			$("#" + id).appendTo(foo);
			
		});
	}

	foo.sortable('options');

}
	
function sliderTest(args) {
	//console.log(args.targetSliderOffset);
}

function slideComplete(args) {

	$('.next, .prev').removeClass('unselectable');
	
	if(args.currentSlideNumber == 0) {

		$('.prev').addClass('unselectable');

	} else if(args.currentSliderOffset == args.data.sliderMax) {

		$('.next').addClass('unselectable');

	}

}

$(window).load(function() {
	 
	 $('.iosSlider').iosSlider({
		snapToChildren: true,
		desktopClickDrag: true,
		keyboardControls: true,
		scrollbarHide: true,
		onSliderLoaded: sliderTest,
		onSlideStart: sliderTest,
		onSlideComplete: slideComplete,
		navNextSelector: $('.next'),
		navPrevSelector: $('.prev'),
	});
	 
	 $('body').css('visibility', 'visible').css('display','none'); 	
     $('body').fadeIn('slow');

});
			
			