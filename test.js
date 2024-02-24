let data1 = [
    {"name": "Verrazano-Narrows Bridge", "city,state": "New York, NY", "span": 1298.4, "location": [40.6066, -74.0447]},
    {"name": "Golden Gate Bridge", "city,state": "San Francisco and Marin, CA", "span": 1280.2, "location": [37.8199, -122.4783]},
    {"name": "Mackinac Bridge", "city,state": "Mackinaw and St Ignace, MI", "span": 1158.0, "location": [45.8174, -84.7278]},
    {"name": "George Washington Bridge", "city,state": "New York, NY and New Jersey, NJ", "span": 1067.0, "location": [40.8517, -73.9527]},
    {"name": "Tacoma Narrows Bridge", "city,state": "Tacoma and Kitsap, WA", "span": 853.44, "location": [47.2690, -122.5517]}
]

//console.log(data1)
let largest = 0
newArr = []
data1.forEach(function(longestbridge) {
    if (largest < longestbridge.span)
    largest = longestbridge.span
})
    console.log(largest)

let index = data1.findIndex(i => i.span === largest)
console.log(index)
newArr.push(data1[index])
data1.shift()
console.log(newArr)
console.log('These are the last 4')
console.log(data1)












