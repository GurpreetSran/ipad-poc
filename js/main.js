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
	
	$(".dragger").click(function() {
		//$sortable.find('li').removeClass('height-transform-show').addClass('height-transform-hide');
		$sortable.sortable("enable");
	});
	
	bindKeyDown();
	
	$(".item").each(function(){
	
		this.addEventListener("touchstart", touchStart, false);
	
	});

	
	function touchStart(event) {   
			
		var targetTouches = event.targetTouches;
		
		if(targetTouches.length == 2) 
			$(this).find('span').addClass('folded-corner');	
	   
	};
	
	$('.iosSlider').iosSlider({
		snapToChildren: true,
		desktopClickDrag: true,
		keyboardControls: true,
		onSliderLoaded: sliderTest,
		onSlideStart: sliderTest,
		onSlideComplete: slideComplete,
		navNextSelector: $('.next'),
		navPrevSelector: $('.prev'),
	});
	
			
	
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
			
			