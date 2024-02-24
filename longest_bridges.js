let bridgesMapCoordinates = [37.0902, -95.7129]  // sets map starting coordinates
let zoomLevel = 4 // sets starting zoom level of map

let map = L.map('longest-bridges-map').setView(bridgesMapCoordinates, zoomLevel)  // binds map container to longest-bridges-map id in html file (sets coordinates, zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {  // adds tile layer to map
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var bridgeIcon = L.icon({   // creates an icon for the 4 smallest bridges in black
    iconUrl: 'golden-gate-bridge.png',

    iconSize:     [48, 65], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
})

var LongestBridgeIcon = L.icon({  // creates an icon for the largest bridge in red
    iconUrl: 'big_bridge.png',

    iconSize:     [48, 65], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
})



longest_bridges_data = [  // creates an array of the dataset
    {"name": "Verrazano-Narrows Bridge", "city,state": "New York, NY", "span": 1298.4, "location": [40.6066, -74.0447]},
    {"name": "Golden Gate Bridge", "city,state": "San Francisco and Marin, CA", "span": 1280.2, "location": [37.8199, -122.4783]},
    {"name": "Mackinac Bridge", "city,state": "Mackinaw and St Ignace, MI", "span": 1158.0, "location": [45.8174, -84.7278]},
    {"name": "George Washington Bridge", "city,state": "New York, NY and New Jersey, NJ", "span": 1067.0, "location": [40.8517, -73.9527]},
    {"name": "Tacoma Narrows Bridge", "city,state": "Tacoma and Kitsap, WA", "span": 853.44, "location": [47.2690, -122.5517]}

]

let largest = 0
newArr = [] // initializes a new Array titled newArr
longest_bridges_data.forEach(function(longestbridge) {  // forEach loop to mark the largest bridge using span
    if (largest < longestbridge.span)
        largest = longestbridge.span  // initializes largest variable to store largest bridge span
})
console.log(largest)

let index = longest_bridges_data.findIndex(i => i.span === largest)  // initializes index variable that searches the longest_bridges_data array for 'largest' span length
console.log(index)
newArr.push(longest_bridges_data[index])  // pushes the index in largest bridge array (in this case index [0]) to a new array titled newArr
longest_bridges_data.shift() // removes the current index[0] in this case largest bridge from longest_bridges_data array
console.log(newArr)
console.log('These are the last 4')
console.log(longest_bridges_data)



longest_bridges_data.forEach(function(bridges){  // draws the 4 shortest bridges in black marker on map
    // draw a marker for this bridge
    let markerText = `<b>${bridges.name}</b><br>Length: ${bridges.span}m`
    L.marker(bridges.location,
        {icon: bridgeIcon})
        .bindPopup(markerText).addTo(map)

})

newArr.forEach(function(longBridge){  // draws the largest bridge by span in a red marker on map
    // draw a marker for the longest bridge
    let markerText = `<b>${longBridge.name}</b><br>Length: ${longBridge.span}m`
    L.marker(longBridge.location,
        {icon: LongestBridgeIcon})
        .bindPopup(markerText).addTo(map)
})
