var jsonMap;
$(document).ready(function () {
  // Handler for .ready() called.
  console.log("abcd");
  //alert("defg");
  var jsonDataProperty= {
	lat: 48.8603,
	lng: 2.443080000000009,
	zoom: 15,
	page_title: "Achat de château de 1500m² à Montreuil - Rue de Stalingrad 0",
	castle_name: "Chateau de Breuilmoulin 0"
	};
    // replace the contents of the div with the json text
    $('#castle_name').html(jsonDataProperty.castle_name);
	$('#page_title').html(jsonDataProperty.page_title);
	// now we need to prepare a json object for the map creation
	jsonMap= {
	lat: jsonDataProperty.lat,
	lng: jsonDataProperty.lng,
	zoom: jsonDataProperty.zoom,
	textPopup: jsonDataProperty.page_title
	};
});