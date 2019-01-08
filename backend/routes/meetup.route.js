import express from 'express';
const router = express.Router();
import MeetupController from '../controllers/meetupController';

router.get('/meetups', MeetupController.index).post('/meetups', MeetupController.create)
.get('/meetups/:id', MeetupController.show);


export default router;