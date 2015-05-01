//= require jquery
//= require foundation
//= require leaflet
//= require_tree .

$(document).foundation();
$(document).ready(function () {
	if (Modernizr.mq('only all and (max-width: 480px)')) {
	var map = L.map('map').setView([47.610278,-122.334872], 13);
	} else {
	var map = L.map('map').setView([47.610278,-122.334872], 15);
	}

	var openStreetMaps = new L.TileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.png', {
	subdomains:'1234',
	type:'osm'
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

	var marker = L.marker([47.610278,-122.33487], { icon:myIcon })
	marker.bindPopup("<strong>Palomino - Seattle</strong><br/><span>Get <a target='_blank' href='https://www.google.com/maps/dir//Palomino+-+Seattle,+1420+5th+Ave,+Seattle,+WA+98101,+United+States/@47.6102788,-122.3348773,13z/data=!4m12!1m3!3m2!1s0x0000000000000000:0x5514c59a73b099b9!2sPalomino+-+Seattle!4m7!1m0!1m5!1m1!1s0x54906ab48bb5b5dd:0x5514c59a73b099b9!2m2!1d-122.334872!2d47.610278'>directions</a></span>");
	marker.addTo(map);
});
