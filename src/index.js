const fs = require('fs');
if(fs.existsSync('../.env')){
    require('dotenv').config({path: '../.env'});
}else{
    require('dotenv').config();
}

const server = require('./server');
server.listen('80');
