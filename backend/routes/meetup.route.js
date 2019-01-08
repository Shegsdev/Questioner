import express from 'express';
const router = express.Router();
import meetupController from '../controllers/meetup.controller';

router.get('/meetups', meetupController.index).post('/meetups', meetupController.create)
.get('/meetups/:id', meetupController.show)


export default router;