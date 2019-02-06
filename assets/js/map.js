var jsonMap= {
	lat: 48.8603,
	lng: 2.443080000000009,
	zoom: 15,
	textPopup: "LE CHATEAU DE MES RÊVES, Montreuil"
	};
////
var markerLatLng= [jsonMap.lat, jsonMap.lng];
var map = L.map('map').setView(markerLatLng, jsonMap.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker(markerLatLng).addTo(map)
    .bindPopup(jsonMap.textPopup);
////