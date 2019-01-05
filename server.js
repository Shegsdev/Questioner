const express = require('express');
const users = require('./db/users').default;
const rsvps = require('./db/rsvps').default;
const meetups = require('./db/meetups').default;
const questions = require('./db/questions').default;

// Set up body parser
const bodyParser = require('body-parser');

// Set up express app
const app = express();

// set up handlebars view engine
var handlebars = require('express3-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// Set port
app.set('port', process.env.port || 5000);

// static middleware
app.use(express.static(__dirname + '/public'));

// configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
	res.render('register');
});

app.get('/login', function(req, res) {
	res.render('login');
});
app.get('/admin', function(req, res) {
	res.render('admin', {meetup: meetups});
});
app.get('/addnew', function(req, res) {
	res.render('addnew');
});
app.get('/meetup', function(req, res) {
	res.render('meetup');
});
app.get('/profile', function(req, res) {
	res.render('profile');
});

// 404 catch-all handler (middleware)
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});


app.listen(app.get('port'), function() {
	console.log('Server is running on port ' + app.get('port') + '...\nPress Ctrl+C to terminate');
});

