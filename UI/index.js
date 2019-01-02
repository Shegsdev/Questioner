const express = require('express');
const meetups = require('./db/meetups').default;
const users = require('./db/users').default;
const questions = require('./db/questions').default;

const bodyParser = require('body-parser');

const _exports = module.exports = {};

// Set up express app
const app = express();

// configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', process.env.port || 3888);

app.get('/', (req, res) => res.type('text/plain').send('homepage'));

// Create a meetup record
app.post('/api/v1/meetups', (req, res) => {
	if (!req.body.topic) {
		return res.status(400).send({
			status: 400,
			error: 'topic required',
		});
	}

	const meetup = {
		id: meetups.length+1,
		createdOn: new Date,
		location: req.body.location,
		images: req.body.images,
		topic: req.body.topic,
		happeningOn: req.body.date,
		tags: req.body.tags
	}
	meetups.push(meetup);

	return res.status(200).send({
		status: 201,
		data: meetup,
	});
});

// Create a question record
app.post('/api/v1/questions', (req, res) => {
	if (!req.body.title) {
		return res.status(400).send({
			status: 400,
			error: 'title required',
		});
	}

	const question = {
		id: questions.length+1,
		createdOn: new Date,
		createdBy: null,
		meetups: null,
		title: req.body.title,
		body: req.body.question,
		votes: 0,
	}
	questions.push(question);

	return res.status(200).send({
		status: 201,
		data: question,
	});
});

// Fetch a meetup record
app.get('/api/v1/meetups/:id', (req, res) => {
	const id = parseInt(req.params.id, 10);

	meetups.map(meetup => {
		if (meetup.id === id) {
			return res.status(200).send({
				status: 200,
				data: meetup,
			});
		}
	});
	return res.status(404).send({
		status: 404,
		error: 'meetup was not found',
	})
});

// Fetch all meetups
app.get('/api/v1/meetups', (req, res) => {
	res.status(200).send({
		status: 200,
		data: meetups,
	});
});

// Upvote a specific meetup
app.get('/api/v1/questions/:id/upvote', (req, res) => {
	const id = parseInt(req.params.id, 10);
	let upvotedQuestion;
	let questionIndex;
	questions.map((question, index) => {
		if (question.id === id) {
			upvotedQuestion = question;
			questionIndex = index;
		}
	});

	const updatedQuestion = {
		id: upvotedQuestion.id,
		createdOn: upvotedQuestion.createdOn,
		createdBy: upvotedQuestion.createdBy,
		meetup: upvotedQuestion.meetup,
		title: upvotedQuestion.title,
		body: upvotedQuestion.body,
		votes: upvotedQuestion.votes+1,
	}

	questions.splice(questionIndex, 1, updatedQuestion);

	return res.status(200).send({
		status: 200,
		data: {
			meetup: updatedQuestion.meetup,
			title: updatedQuestion.title,
			body: updatedQuestion.body,
			votes: updatedQuestion.votes,
		},
	});

});

// Downvote a specific meetup
app.put('/api/v1/questions/:id/downvote', (req, res) => {
	const id = parseInt(req.params.id, 10);

	let downvotedQuestion;
	let questionIndex;
	questions.map((question, index) => {
		if (question.id === id) {
			downvotedQuestion = question;
			questionIndex = index;
		}
	});

	const updatedQuestion = {
		id: downvotedQuestion.id,
		createdOn: downvotedQuestion.createdOn,
		createdBy: downvotedQuestion.createdBy,
		meetup: downvotedQuestion.meetup,
		title: downvotedQuestion.title,
		body: downvotedQuestion.body,
		votes: downvotedQuestion.votes-1,
	}

	questions.splice(questionIndex, 1, updatedQuestion);

	return res.status(200).send({
		status: 200,
		data: {
			meetup: updatedQuestion.meetup,
			title: updatedQuestion.title,
			body: updatedQuestion.body,
			votes: updatedQuestion.votes,
		},
	});

});


app.listen(app.get('port'), function() {
	console.log('Server is running on port ' + app.get('port') + '...\nPress Ctrl+C to terminate');
});

exports.closeServer = () => server.close();
