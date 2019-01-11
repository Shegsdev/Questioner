import express from 'express';
import routes from './backend/routes';

// Set up body parser
import bodyParser from 'body-parser';

// Set up express app
const app = express();

// Set port
app.set('port', process.env.port || 5000);

// configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', routes);
// app.use(express.json());

app.get('/', (req, res) => {
	res.status(200).send({
		status: 200,
		data: "Welcome to Questioner API"
	});
});

// 404 catch-all handler (middleware)
app.use( (req, res, next) => {
	res.status(404);
	res.send('404 Not Found');
});

// static middleware
app.use(express.static(__dirname + '/client/public'));

app.listen(app.get('port'), function() {
	console.log('Server is running on port ' + app.get('port') + '...\nPress Ctrl+C to terminate');
});

