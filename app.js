
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);

var index = require('./routes/index');
var myworkout = require('./routes/myworkout');
var bodyMap = require('./routes/bodyMap');
var workoutResults = require('./routes/workoutresults')
var yourlist = require('./routes/yourlist');
var favorites = require('./routes/favorites');
var dailylog = require('./routes/dailylog');
var notes = require('./routes/notes');
var login = require('./routes/login');
var addWorkoutToList = require('./routes/addWorkoutToList');
var addFavorite = require('./routes/addFavorite');

var existing = require('./routes/existing')


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

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/dropdown', index.viewDropdown);
app.post('/', index.viewLogin);
	//jsonfile.writeFile(file, obj, function(err) {console.error(err)});
app.get('/myworkout', myworkout.viewWorkoutScreen);
//app.get('/myworkout/dropdown', myworkout.viewDropdownWorkoutScreen);

app.get('/addWorkoutToList', addWorkoutToList.addWorkoutToList);
//app.get('/addWorkoutToList/dropdown', addWorkoutToList.addDropdownWorkoutToList);

app.get('/bodyMap', bodyMap.viewBodyMap);
//app.get('/bodyMap/dropdown', bodyMap.viewDropdownBodyMap);

app.get('/workoutresults', workoutResults.viewWorkoutResults);
//app.get('/workoutresults/dropdown', workoutResults.viewDropdownWorkoutResults);

app.get('/favorites', favorites.viewfavorites);
app.get('/dailylog', dailylog.viewDailyLog);
app.get('/notes', notes.viewNotes);
app.get('/yourlist', yourlist.viewWorkoutList);
app.get('/login', login.viewLogin);
app.get('/existing', existing.viewExisting);
app.get('/addFavorite', addFavorite.add);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
