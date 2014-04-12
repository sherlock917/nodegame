var path = require('path');

var express = require('express');
var logfmt = require('logfmt');

var routes = require('./routes');

var app = express();

var port = Number(process.env.PORT || 5000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logfmt.requestLogger());
app.use(express.static(path.join(__dirname, 'assets')));

app.use('/', routes);

app.listen(port, function () {
    console.log('listening on port ' + port);
});

module.exports = app;