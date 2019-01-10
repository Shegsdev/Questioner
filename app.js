
// RSVP for a meetup
app.post('/meetups/:id/rsvps', (req, res) => {
	const id = parseInt(req.params.id, 10);

	let rsvpMeetup;
	meetups.map(meetup => {
		if (meetup.id === id) {
			rsvpMeetup = meetup;
		}
	});

	const rsvp = {
		id: rsvps.length+1,
		meetup: rsvpMeetup.id,
		user: rsvpMeetup.user || null,
		response: req.body.response,
	}

	rsvps.push(rsvp);

	return res.status(200).send({
		status: 200,
		data: [{
			meetup: rsvpMeetup.id,
			topic: rsvpMeetup.topic,
			status: req.body.response,
		}],
	});

});

