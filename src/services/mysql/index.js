const mysqlServer = require('mysql');

const connection = mysqlServer.createConnection({
    host: 'duduhouse.dyndns.info',
    user: 'restful',
    password: '190790edu',
    database: 'restful_ws'
});

const errorHandler = (error, msg, rejectFunction) => {
    console.error(error);
    rejectFunction({error: msg});
};
const categoryModule = require('./categories')({connection, errorHandler});

module.exports = {
    categories: () => categoryModule
};