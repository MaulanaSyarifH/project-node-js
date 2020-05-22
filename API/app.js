const https = require('https');

const options = {
    hostname: 'api.github.com',
    port: 443,
    path: '/users/MaulanaSyarifH',
    method: 'GET',
    headers:{
        'user-agent': 'mol'
    }
  };


let req = https.request(options, (res) => {

    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

})

req.end();

req.on('error', (e) => {
    console.error(e);
})