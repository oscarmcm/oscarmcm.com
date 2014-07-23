var express = require('express'),
    swig = require('swig');
var app = express();

// view engine setup
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(res, res){
    res.render('index');
});

app.listen(3000);
console.log('Application Started on http://localhost:3000/');

