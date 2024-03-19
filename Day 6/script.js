const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//the endpoint contains a json list of cities
// {
//     {
//     "city": "New York", 
//     "growth_from_2000_to_2013": "4.8%", 
//     "latitude": 40.7127837, 
//     "longitude": -74.0059413, 
//     "population": "8405837", 
//     "rank": "1", 
//     "state": "New York"
//     }, 
//     {
//     "city": "Los Angeles", 
//     "growth_from_2000_to_2013": "4.8%", 
//     "latitude": 34.0522342, 
//     "longitude": -118.2436849, 
//     "population": "3884307", 
//     "rank": "2", 
//     "state": "California"
//     } 
// }
//first, get an empty array that will store these cities
let city_arr = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => data = city_arr)

// can do the below way as well when array id const
// const city_arr = [];
// fetch(endpoint)
//     .then(blob => blob.json())
//     .then(data => city_arr.push(...data))