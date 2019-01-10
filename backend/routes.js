import express from 'express';

import Rsvp from './controllers/Rsvp';
import User from './controllers/User';
import Meetup from './controllers/Meetup';
import Question from './controllers/Question';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('home route');
});

// Meetup Routes
router.post('/meetups', Meetup.create).get('/meetups', Meetup.getAll)
.get('/meetups/upcoming', Meetup.getUpcoming).get('/meetups/:id', Meetup.getOne)
.delete('/meetups/:id', Meetup.delete);

// Question Routes
router.post('/questions/:id', Question.create).get('/questions', Question.getAll)
.patch('/questions/:id/upvote', Question.upvote).patch('/questions/:id/downvote', Question.downvote);

// User Route
router.post('/users', User.create).get('/users', User.getAll)
.get('/users/:id', User.getOne);

// Rsvp Route
router.post('/meetups/:id/rsvps', Rsvp.create).get('/meetups/:id/rsvps', Rsvp.getAll);


export default router;
