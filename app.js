
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);

var index = require('./routes/index');
var myworkout = require('./routes/myworkout');
<<<<<<< HEAD
var bodyMap = require('./routes/bodyMap');
var workoutResults = require('./routes/workoutresults')
=======
var favorites = require('./routes/favorites');
var dailylog = require('./routes/dailylog');
var notes = require('./routes/notes');

var existing = require('./routes/existing')
>>>>>>> dcaf03d031a992ef2c95e7cb4c008b98547a56de


app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/myworkout', myworkout.viewWorkoutScreen);
<<<<<<< HEAD
app.get('/bodyMap', bodyMap.viewBodyMap);
app.get('/workoutresults', workoutResults.viewWorkoutResults);
=======
app.get('/favorites', favorites.viewfavorites);
app.get('/dailylog', dailylog.viewDailyLog);
app.get('/notes', notes.viewNotes);

app.get('/existing', existing.viewExisting);
>>>>>>> dcaf03d031a992ef2c95e7cb4c008b98547a56de

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
