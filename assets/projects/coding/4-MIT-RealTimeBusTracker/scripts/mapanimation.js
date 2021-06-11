mapboxgl.accessToken =
"pk.eyJ1Ijoic295ZGFuaWVscm9tZXJvIiwiYSI6ImNrcHFmaGU3OTAyemkyb3F2Z3F2eTUyMW4ifQ.kcV610ChAkDgygc915Y6gQ";

const map = new mapboxgl.Map({
container: "map", // container ID
style: "mapbox://styles/mapbox/streets-v11", // style URL
center: [-71.104881, 42.365554], // starting position [lng, lat]
zoom: 12, // starting zoom
});
map.resize();

var busesinTransit = [];
var busesMarkers = [];
async function run(){
	// get bus data    
	const locations = await getBusLocations();
	console.log(new Date());
	console.log(locations);

	// if (busesMarkers.length >= 1){
	// 	locations.forEach((bus, i)=>{
	// 		marker.remove();
	// 	});
	// }

	locations.forEach((bus, i) => {
		var marker = new mapboxgl.Marker()
		.setLngLat([bus.attributes.longitude, bus.attributes.latitude])
		.setPopup(new mapboxgl.Popup({offset: 25, closeOnClick: false, closeButton: false}).setHTML(`<h3>Bus #: ${i+1}</h3>`))
		.addTo(map)
		.togglePopup();

		busesMarkers.push(marker);	
	});

	function eraseMarks(){
		if (busesMarkers!==null) {
		for (var i = busesMarkers.length - 1; i >= 0; i--) {
		busesMarkers[i].remove();
		}
	}
	}
	busesinTransit = [];

	setTimeout(eraseMarks,7500)

	// timer
	setTimeout(run, 15000);
}
		
// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}

run();