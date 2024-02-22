let bridgesMapCoordinates = [37.0902, -95.7129]
let zoomLevel = 4 // test

let map = L.map('longest-bridges-map').setView(bridgesMapCoordinates, zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var bridgeIcon = L.icon({
    iconUrl: 'golden-gate-bridge.png',

    iconSize:     [48, 65], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
})



longest_bridges_data = [
    {"name": "Verrazano-Narrows Bridge", "city,state": "New York, NY", "span": 1298.4, "location": [40.6066, -74.0447]},
    {"name": "Golden Gate Bridge", "city,state": "San Francisco and Marin, CA", "span": 1280.2, "location": [37.8199, -122.4783]},
    {"name": "Mackinac Bridge", "city,state": "Mackinaw and St Ignace, MI", "span": 1158.0, "location": [45.8174, -84.7278]},
    {"name": "George Washington Bridge", "city,state": "New York, NY and New Jersey, NJ", "span": 1067.0, "location": [40.8517, -73.9527]},
    {"name": "Tacoma Narrows Bridge", "city,state": "Tacoma and Kitsap, WA", "span": 853.44, "location": [47.2690, -122.5517]}

]

longest_bridges_data.forEach(function(bridges){
    // draw a marker for this bridge
    let markerText = `<b>${bridges.name}</b><br>Length: ${bridges.span}m`
    L.marker(bridges.location,
        {icon: bridgeIcon})
        .bindPopup(markerText).addTo(map)

})