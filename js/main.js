const mapStyle = [{
  "elementType": "geometry", "stylers": [ { "color": "#f5f5f5" } ] }, {
  "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, {
  "elementType": "labels.text.fill", "stylers": [ { "color": "#616161" } ] }, {
  "elementType": "labels.text.stroke", "stylers": [ { "color": "#f5f5f5" } ] },
  { "featureType": "administrative.land_parcel", "elementType": "labels",
  "stylers": [ { "visibility": "off" } ] }, { "featureType":
  "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [
  { "color": "#bdbdbd" } ] }, { "featureType": "poi", "elementType": "geometry",
  "stylers": [ { "color": "#eeeeee" } ] }, { "featureType": "poi",
  "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] }, {
  "featureType": "poi", "elementType": "labels.text.fill", "stylers": [ {
  "color": "#757575" } ] }, { "featureType": "poi.park", "elementType":
  "geometry", "stylers": [ { "color": "#e5e5e5" } ] }, { "featureType":
  "poi.park", "elementType": "labels.text.fill", "stylers": [ { "color":
  "#9e9e9e" } ] }, { "featureType": "road", "elementType": "geometry",
  "stylers": [ { "color": "#ffffff" } ] }, { "featureType": "road.arterial",
  "elementType": "labels.text.fill", "stylers": [ { "color": "#757575" } ] }, {
  "featureType": "road.highway", "elementType": "geometry", "stylers": [ {
  "color": "#dadada" } ] }, { "featureType": "road.highway", "elementType":
  "labels.text.fill", "stylers": [ { "color": "#616161" } ] }, { "featureType":
  "road.local", "elementType": "labels", "stylers": [ { "visibility": "off" } ]
  }, { "featureType": "road.local", "elementType": "labels.text.fill",
  "stylers": [ { "color": "#9e9e9e" } ] }, { "featureType": "transit.line",
  "elementType": "geometry", "stylers": [ { "color": "#e5e5e5" } ] }, {
  "featureType": "transit.station", "elementType": "geometry", "stylers": [ {
  "color": "#eeeeee" } ] }, { "featureType": "water", "elementType": "geometry",
  "stylers": [ { "color": "#c9c9c9" } ] }, { "featureType": "water",
  "elementType": "labels.text.fill", "stylers": [ { "color": "#9e9e9e" } ] }];

const sampleVideos = [
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
];

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
  $('.blue-overlay').toggle();
})

$(".video-grid .row > div").click(function(e) {
  let target = e.currentTarget.id;
  let videoID = target.substring(target.indexOf("-")+1);
  $(".main-vid source").attr("src", sampleVideos[videoID-1]); // Change src corresponding to clicked square
  //$(".video-container").toggleClass("d-none");
  //$(".main-vid").toggle().prop("controls", false);;
  //$(".play-icon").toggle();
  if (videoID <= sampleVideos.length) {
      $(".close-icon").toggle();
      $(".main-vid")[0].load();
      $(".main-vid")[0].play();
    	$(".main-vid").toggle();
      $('.blue-overlay').toggle();
    }
})

// $("#overlay-close").click(function() {
// 	$(".main-vid")[0].pause();
// 	$(".main-vid").toggle();
// 	$(".play-icon").toggle();
// 	$(".close-icon").toggle();
// })
//
// $("#overlay-play").click(function() {
// 	$(".main-vid")[0].play().prop("controls", true);
//
//   $(".main-vid").toggle(); //don't ask
//   $(".play-icon").toggle();
//   $(".close-icon").toggle();
// })

// Button control for video item loading on mobile/tablet
let timesLoaded = 1;
function expand() {
  const loadInterval = 10;
  const nrOfItems = $('.video-grid .row > div').length;
  let endInterval = 20 + timesLoaded*loadInterval;
  $('.video-grid .row > div').each(function(index) {
    if (index >= 20 && index < endInterval) {
      $(this).show();
    }
    if (endInterval >= nrOfItems) {
      $('#expand-btn').hide();
    }
  });
  timesLoaded++;
}

// Form control:
$("#data-entry-consent").click(function(){

	$("#consent-prompt").css({"outline": "none"})
	$(".info-message, .failure").hide();

})

// Carousel:
let direction;
$('#quote-slider').on('slid.bs.carousel', function () {
  if ( $(this).hasClass("active") ) {
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
		$("#data-entry-consent").prop("checked", false);
	}
})

$("form").submit(function(event) {
	event.preventDefault();
})

// To top
$(".footer-logo").click(function() {
	window.scroll({top: 0, behavior: "smooth"});
})

// Custom select tags, based on https://jsfiddle.net/BB3JK/47/
$('select').each(function() {

    // Cache the number of options
    let $this = $(this);
    let numberOfOptions = $this.children('option').length;

    let firstSelection = true;
    //$this.selectedIndex = 0;

    // "d-none" hides the select element, we are creating new ones using the select as templates
    // The new select root div (wraps new custom slction and the hidden tag source)
    $this.wrap('<div class="select"></div>');

    // Insert a styled selection div (sibling of the hidden select element, root for options)
    $this.after('<div class="styledSelect"></div>');

    // Cache the styled div
    let $styledSelect = $this.next('div.styledSelect');

    // Show the first select option in the styled div
    $styledSelect.text($this.children('option').eq(0).text());

    // Insert an unordered list after the styled div and also cache the list
    let $list = $('<ul />', {
        'class': 'options'
    }).insertAfter($styledSelect);
    $('<hr />', { 'class': 'selection-hr'}).insertBefore($styledSelect);
    // Insert a list item into the unordered list for each select option
    for (let i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val(),
            class: (i === 0) ? "d-none" : "" // Hide the placehold element from dropdown with bootstrap class
        }).appendTo($list);
    }

    // Cache the list items
    let $listItems = $list.children('li');

    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $(this).removeClass('active'); // This excludes current "$(this)" from the function below
        $('div.styledSelect.active').each(function() { // select all active lists
            $(this).removeClass('active selection-border');
            $(this).next('ul.options').hide();  // hide all other active lists
            $(this).siblings('hr').hide();
        });

        $(this).toggleClass("selection-border");
        $(this).toggleClass('active'); // toggle 'active' flag to signal to others list for a potential close
        $(this).next('ul.options').toggle();
        $(this).siblings('hr').toggle();
    });

    // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
    // Updates the select element to have the value of the equivalent option
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active selection-border'); // Set the styledSelect to clicked item
        $styledSelect.siblings('hr').hide();
        $this.val($(this).attr('rel'));
        $list.hide();
        if (firstSelection) {
          $styledSelect.css({"font-weight": 700});
          firstSelection = false;
        }

        //alert($this.val()); //Uncomment this for demonstration!

        // for (let i = 0; i < numberOfOptions; i++) {
        //   if ($this.children('option').eq(i).text() == $(this).text()) {
        //     $this.selectedIndex = i;
        //   }
        // }
    });

    // Hides the unordered list when clicking outside of it
    $(document).click(function() {
        $styledSelect.removeClass('active selection-border').siblings('hr').hide();
        $list.hide();
    });
});


// Gonna make a map

function initMap() {
  const geoLocation = { lat: 56.95, lng: 24.10 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: geoLocation,
    styles: mapStyle,
  });
  const marker = new google.maps.Marker({
    position: geoLocation,
    map: map,
  });
}
