$(document).ready(function () {
// Now we'are about to create a leaflet map
var markerLatLng= [jsonMap.lat, jsonMap.lng]; // Start coordinates
var map = L.map('map').setView(markerLatLng, jsonMap.zoom); // Show a leaflet map centered on the data provided i nthe json map 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); // Select openstreet map as the default provider for all the tiles to be displayed

// Now we'll create a marker (blue color by default)
L.marker(markerLatLng).addTo(map)
    .bindPopup(jsonMap.textPopup);// add a popup window on the marker - will be shown when the user clicks the marker
});