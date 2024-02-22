let canvas = document.querySelector('#longest-bridges-chart')
let context = canvas.getContext('2d')

let data1 = [
    {"name": "Verrazano-Narrows Bridge", "city,state": "New York, NY", "span": 1298.4, "location": [40.6066, -74.0447]},
    {"name": "Golden Gate Bridge", "city,state": "San Francisco and Marin, CA", "span": 1280.2, "location": [37.8199, -122.4783]},
    {"name": "Mackinac Bridge", "city,state": "Mackinaw and St Ignace, MI", "span": 1158.0, "location": [45.8174, -84.7278]},
    {"name": "George Washington Bridge", "city,state": "New York, NY and New Jersey, NJ", "span": 1067.0, "location": [40.8517, -73.9527]},
    {"name": "Tacoma Narrows Bridge", "city,state": "Tacoma and Kitsap, WA", "span": 853.44, "location": [47.2690, -122.5517]}
]
let chart = new Chart(context, {
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

let name = data1[0].name
let length = data1[0].span
function addDataToChart (name, length) {
    chart.data.labels.push(name)
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(length)
    })

    chart.update()
}

addDataToChart(name, length)
