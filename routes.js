import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/login', (req, res) => {
	res.render('login');
});
router.get('/admin', (req, res) => {
	res.render('admin', {meetup: meetups});
});
router.get('/addnew', (req, res) => {
	res.render('addnew');
});
router.get('/meetup', (req, res) => {
	res.render('meetup');
});
router.get('/profile', (req, res) => {
	res.render('profile');
});

export default router;