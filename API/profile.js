
const https = require('https');

 let get = (userName) =>{
    const options = {
        hostname: 'api.github.com',
        port: 443,
        path: `/users/${userName}`,
        method: 'GET',
        headers:{
            'user-agent': 'mol'
        }
    };


    let req = https.request(options, (response) => {
        let result = '';
        response.on('data', (data) =>{
            result = result + data;
        })
        response.on('end', () => {

            if(response.statusCode === 200){
                let profile = JSON.parse(result);
                console.log(`userName : '${profile.login}' with ID : '${profile.id}`);
            } else {
                console.log(`cannot found ${userName}`);
            }
        });
    })

    req.end();

    req.on('error', (e) => {
        console.error(e);
    })
}

module.exports = {
     get
 };