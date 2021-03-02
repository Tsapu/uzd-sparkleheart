
jQuery.fn.visible = function() {
    return this.css("visibility", "visible");
};

jQuery.fn.invisible = function() {
    return this.css("visibility", "hidden");
};


// Menu:
$(".menu-icon").click(function() {
	
	$(".menu-icon").toggle();
	$(".menu-close").toggle();
	
	// No need to adjust for viewport since the icon"s clickability already accounts for it
	
	$("#nav-list").toggleClass("nav-list"); // Remove desktop styling
	$("#menu").addClass("menu-list"); // Add m&t styling
	$("#menu").prepend($ ("#menu>li:last-child") ) // Change list element position last->first
	$("#nav-list").visible(); // Show menu
})

$(".menu-close").click(function() {
	$(".menu-icon").toggle();
	$(".menu-close").toggle();
	
	$("#nav-list").toggleClass("nav-list");
	$("#menu").removeClass("menu-list");
	
	$("#menu").append($ ("#menu>li:first-child") );
	$("#nav-list").invisible();
})


// Video controls:
$(".play-icon").click(function() {
	$(".main-vid")[0].load();
	$(".main-vid")[0].play();
	$(".main-vid").toggle();
	$(".play-icon").toggle();
	$(".close-icon").toggle();
	//$(".vid-thumbnail").css(opacity
	$(".video-fade").css({
		"z-index": 1
	})
})

$(".close-icon").click(function() {
	$(".main-vid")[0].pause();
	$(".main-vid").toggle();
	$(".play-icon").toggle();
	$(".close-icon").toggle();
	$(".video-fade").css({
		"z-index": -1
	})
})


// Form control:
$("#data-entry-consent").click(function(){
	
	$("#consent-prompt").css({"outline": "none"})
	$(".info-message, .failure").hide();
	
})

// Carousel:

let direction;
$('#quote-slider').on('slid.bs.carousel', function () {
  if ( $("#quote-first").hasClass("active") ) {
		direction = "prev";	
		} else if ( $("#quote-last").hasClass("active") ) {
			direction = "next";
		} else {
			direction = "";
			$(".quote-nav-prev, .quote-nav-next").css({"opacity": 1})
		}
	$(".quote-nav-" + direction).css({"opacity": .5})
})

let formData;
$("#btn-submit").click(function() {
	
	let consent = $("#data-entry-consent").prop("checked");
	
	
	if (!$("#name-entry")[0].checkValidity() || !$("#email-entry")[0].checkValidity() || !$("#phone-entry")[0].checkValidity()){
		
		return;
		
	} else	if (consent == false) {
		$("#consent-prompt").css({"outline": "2px solid rgb(235,35,52)", "outline-offset": "3px"});
		$(".failure-msg").show();
		
	} else {
		
		let $formRaw = $(".form-control");
		
		formData = {
			name: $formRaw[0].value,
			email: $formRaw[1].value,
			phone: $formRaw[2].value,
		}
		
		if ($formRaw.length <= 4) {
			formData["textMessage"] = $formRaw[3].value;
		}

		console.log(formData);	
		console.log($(".form-control")[0].value.split(" ")[0]);
		
		$(".success-msg").show().fadeOut(3000);
		
		for (let i = 0; i < $formRaw.length; i++) {
			$formRaw[i].value = "";
		}
	}
})

$("form").submit(function(event) {
	event.preventDefault();
})

// To top
 $(".footer-logo").click(function() {
	window.scroll({top: 0, behavior: "smooth"});	
})







