//= require jquery
//= require foundation
//= require leaflet
//= require_tree .

$(document).foundation();
$(document).ready(function () {
	if (Modernizr.mq('only all and (max-width: 480px)')) {
	var map = L.map('map').setView([47.630186, -122.391509], 13);
	} else {
	var map = L.map('map').setView([47.630186, -122.391509], 15);
	}
	
	var openStreetMaps = new L.TileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'png'
});
	map.addLayer(openStreetMaps);
	map.scrollWheelZoom.disable();

	var myIcon = L.icon({
		iconUrl:'/images/marker-icon.png',
		shadowUrl:'/images/marker-shadow.png',
		iconSize:[25, 41],
		iconAnchor:[13, 41],
		popupAnchor:[0, -50]
	});

	var marker = L.marker([47.630186, -122.391509], { icon:myIcon })
	marker.bindPopup("<strong>Palisade - Seattle</strong><br/><span>Get <a target='_blank' href='https://www.google.com/maps/dir//Palisade,+Elliott+Bay+Marina,+2601+West+Marina+Place,+Seattle,+WA+98199,+United+States/@47.630287,-122.391466,15z/data=!4m12!1m3!3m2!1s0x0:0x5c2caffa98e9cb76!2sPalisade!4m7!1m0!1m5!1m1!1s0x54903fd62b5e7f83:0x5c2caffa98e9cb76!2m2!1d-122.391466!2d47.630287'>directions</a></span>");
	marker.addTo(map);
});
