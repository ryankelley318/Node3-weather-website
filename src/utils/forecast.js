const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/a6848d58e1a8ce0dc82f1f31da15beb3/' + lat + ',' + long

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback ('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback ('Unable to find location', undefined)
        } else {
            const rain = body.daily.data[0].precipProbability * 100
            callback(undefined, body.daily.data[0].summary + ' High of ' + body.daily.data[0].temperatureHigh + ', and a Low of ' + body.daily.data[0].temperatureLow + ' Currently ' + body.currently.temperature + ', with a ' + rain.toFixed(2) +'% chance of rain.')
            //callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain')
        } 
    })
}

module.exports = forecast

