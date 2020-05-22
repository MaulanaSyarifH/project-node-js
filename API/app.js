
const profile = require('./profile.js');


let users = process.argv.slice(2);

users.map(user => {
    return profile.get(user);
})


