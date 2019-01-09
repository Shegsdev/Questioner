import express from 'express';
import Meetup from './controller/Meetup';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('home route');
});

router.post('/meetups', Meetup.create).get('/meetups', Meetup.getAll)
.get('/meetups/:id', Meetup.getOne).delete('/meetups/:id', Meetup.delete);

export default router;