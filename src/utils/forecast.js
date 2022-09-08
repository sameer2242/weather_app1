const request = require('request')
const forecast = (latitude, longitude, callback) => {

    const url=`http://api.weatherstack.com/current?access_key=6869196516fc99105be91164df17dfd6&query=${latitude},${longitude}`;

    request({ url, json: true }, (error,response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            
            const str="Latitude and Longitude of our concerned place is "+ latitude +' , '+longitude+" respectively."+'It`s currently '+response.body.current.weather_descriptions[0]+' out there.'+'Current temperature of that place is ' + response.body.current.temperature + ' degree celcius . Wind speed is ' + response.body.current.wind_speed + 'knots flowing in '+response.body.current.wind_dir+ " direction. "+'There is  '+ response.body.current.cloudcover +'% of cloud cover.'+"Humidity of your concerned place is "+response.body.current.humidity +"."
            callback(undefined,str)
        }
    })
}

module.exports = forecast