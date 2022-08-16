// console.log('Starting');

// setTimeout(() => {
// console.log('2 Second timer');
// }, 2000)

// setTimeout(() => {
//     console.log('0 Second timer');
//     }, 000)

// console.log('Stopping');

//weather - app

const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=40a73d9d821ff7c21325900889aa0d16&query=37.8267,-122.4233&units=f'

request({url: url, json:true}, (error, response) => {
    //console.log(response);
    // const data = JSON.parse(response.body)
    // console.log(data.current);
    //console.log(response.body.current);
    if(error){   //error handling 
        console.log('Unable to connect with weather service');
    }else if(response.body.error){
        console.log('unable to find location');
    }
    else{
        console.log(response.body.current.weather_descriptions[0] +'. It is currently '+ response.body.current.temperature 
        + ' degrees out. It feels like ' + response.body.current.feelslike 
        + ' degrees out');
    }
    
})
