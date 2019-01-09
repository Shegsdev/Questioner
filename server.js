import express from 'express';
import routes from './backend/routes';

// Set up body parser
import bodyParser from 'body-parser';

// Set up express app
const app = express();

// Set port
app.set('port', process.env.port || 5000);

// static middleware
app.use(express.static(__dirname + '/client/public'));

app.use('/api/v1', routes);
app.use(express.json());

// configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 404 catch-all handler (middleware)
app.use(function(req, res, next){
	res.status(404);
	res.send('404 Not Found');
});


app.listen(app.get('port'), function() {
	console.log('Server is running on port ' + app.get('port') + '...\nPress Ctrl+C to terminate');
});

