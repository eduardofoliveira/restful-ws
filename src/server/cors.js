const corsMiddleware = require('restify-cors-middleware');

//const cors = corsMiddleware({
//  preflightMaxAge: 5,
//  origins: ['http://api.myapp.com', 'http://web.myapp.com'],
//  allowHeaders: ['API-Token'],
//  exposeHeaders: ['API-Token-Expiry']
//});

const cors = corsMiddleware({
  preflightMaxAge: 5,
  origins: ['*'],
  allowHeaders: ['*'],
  exposeHeaders: ['*']
});

module.exports = cors;
