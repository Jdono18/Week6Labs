let canvas = document.querySelector('#longest-bridges-chart')  // binds to id=longest-bridges-chart in html file
let context = canvas.getContext('2d')

let data1 = [  // creates an array titled data1 includes the dataset below
    {"name": "Verrazano-Narrows Bridge", "city,state": "New York, NY", "span": 1298.4, "location": [40.6066, -74.0447]},
    {"name": "Golden Gate Bridge", "city,state": "San Francisco and Marin, CA", "span": 1280.2, "location": [37.8199, -122.4783]},
    {"name": "Mackinac Bridge", "city,state": "Mackinaw and St Ignace, MI", "span": 1158.0, "location": [45.8174, -84.7278]},
    {"name": "George Washington Bridge", "city,state": "New York, NY and New Jersey, NJ", "span": 1067.0, "location": [40.8517, -73.9527]},
    {"name": "Tacoma Narrows Bridge", "city,state": "Tacoma and Kitsap, WA", "span": 853.44, "location": [47.2690, -122.5517]}
]
let chart = new Chart(context, {  // standard charts.js formatting; initializes new chart variable = chart
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Span of bridge in meters',
            data: [],
            backgroundColor: ['red', 'blue', 'yellowgreen', 'green', 'yellow']
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})

data1.forEach( function (name) {  // forEach loop that pushes names of bridges to chart
    chart.data.labels.push(name.name)
    chart.update()
})
data1.forEach(function (span){ // forEach loop that pushes spans of bridges to chart
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(span.span)
    })
})

chart.update()


