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
// const city_arr = [
//     {
//         "city": "New York", 
//         "growth_from_2000_to_2013": "4.8%", 
//         "latitude": 40.7127837, 
//         "longitude": -74.0059413, 
//         "population": "8405837", 
//         "rank": "1", 
//         "state": "New York"
//         }, 
//         {
//         "city": "Los Angeles", 
//         "growth_from_2000_to_2013": "4.8%", 
//         "latitude": 34.0522342, 
//         "longitude": -118.2436849, 
//         "population": "3884307", 
//         "rank": "2", 
//         "state": "California"
//         }     
// ];

const city_arr = []


fetch(endpoint)
    .then(blob => blob.json())
    .then(data => city_arr.push(...data))

// console.log(city_arr)
// city_arr.forEach(city => {
//     console.log(city.state); // This will print the state of each city
// });

//next, we want to filter the list when user types a letter in the input on the website
function find_matches (words_match,results)
{
    const words_match_lower = words_match.toLowerCase();
    return results.filter(result => result.city.toLowerCase().includes(words_match_lower));
}

function display_matches()
{
    const matched_arr =find_matches(this.value,city_arr);
    console.log(matched_arr);
}

const search_bar = document.querySelector('.search');
const suggest = document.querySelector('.suggestions');

search_bar.addEventListener('input',display_matches);

