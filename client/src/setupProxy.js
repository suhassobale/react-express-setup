const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/express', 
        { target: 'http://localhost:5000/' }
    ));
}