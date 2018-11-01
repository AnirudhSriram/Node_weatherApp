const request = require('request'); 
const fs  = require('fs');

//Create a file with your google geocoding api key and read 
let apiKey =  fs.readFileSync('geocodeCred.txt','UTF8');

let geoCodeAddress = function(data,callback) {
    let address = encodeURIComponent(data);

    
    request({
        url :`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`,
        json:true
    },(error,response,body)=> {
        if(error){
                callback("Cannot connect to servers");
                
        }
        else if(body.status === "ZERO_RESULTS") {
    
            callback("No results for this address");
        }else {
            callback(undefined , {
                Address  : data , 
                Latitude : JSON.stringify(body.results[0].geometry.location.lat,undefined,2),
                Longitude : JSON.stringify(body.results[0].geometry.location.lng,undefined,2),

            });
  
        }
        
        
    })
}

module.exports = {
    geoCodeAddress
}