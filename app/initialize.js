document.addEventListener('DOMContentLoaded', function() {
// do your setup here
	var $ = require('jquery');
	console.log('jQuery Loaded', $('body'));
});

function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
