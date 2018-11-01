
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const argv = yargs.options(
    {
        a: {
            demand: true,
            alias: 'address',
            describe: "Adress to fetch weather",
            string: true
        }
    }
).help().argv;

geocode.geoCodeAddress(argv.address,(errorMessage, result) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(result);
        weather.weatherRequest(result.Latitude, result.Longitude,(error, data) => {
            if (error) {
                console.log(error);
            } else {
                console.log(`The current temperature in ${argv.address} is ${data.temperature}. It feels like ${data.apparentTemperature}`);

            }
        });
    }
});


