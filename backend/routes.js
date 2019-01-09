import express from 'express';
import Meetup from './controller/Meetup';
import Question from './controller/Question';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('home route');
});

router.post('/meetups', Meetup.create).get('/meetups', Meetup.getAll)
.get('/meetups/upcoming', Meetup.getUpcoming).get('/meetups/:id', Meetup.getOne)
.delete('/meetups/:id', Meetup.delete);

router.post('/questions', Question.create).get('/questions', Question.getAll)
.patch('/questions/:id/upvote', Question.upvote).patch('/questions/:id/downvote', Question.downvote);


export default router;
