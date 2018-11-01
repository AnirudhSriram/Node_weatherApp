const request = require('request');
const fs = require('fs');
const weatherKey = fs.readFileSync('weatherKey.txt', 'UTF8');

let weatherRequest = function (lat, lng, callback) {


    request({
        url: `https://api.darksky.net/forecast/${weatherKey}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("Unable to connect to server");

        } else if (response.statusCode != 200) {
            callback("Bad request");
        } else {
            callback(undefined, body.currently);
        }


    })
};

module.exports.weatherRequest = weatherRequest; 