
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const argv =yargs.options(
    {
        a : {
            demand : true , 
            alias : 'address' , 
            describe : "Adress to fetch weather",
            string : true
        }
    }
).help().argv;

geocode.geoCodeAddress(argv.address,callback=(errorMessage,result)=> {
        if(errorMessage) {
            console.log(errorMessage) ; 
        }else {
            console.log(result);
        }
}) ; 


