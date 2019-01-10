import RsvpModel from '../models/Rsvp';
import MeetupModel from '../models/Meetup'

const Rsvp = {
    
    create(req, res) {
        const rsvp = RsvpModel.create(req.body, parseInt(req.params.id, 10));
        const meetup = MeetupModel.findOne(parseInt(req.params.id, 10));
        if (!meetup.id) {
            return res.status(400).send({
                status: 400,
                error: "Bad Request Meetup does not exist",
            });
        }

        return res.status(200).send({
            status: 200,
            data: [{
                meetup: rsvp.meetup,
                topic: meetup.topic,
                status: rsvp.response
            }]
        });
    },

    // Fetch all rsvps
    getAll(req, res) {
        const rsvps = RsvpModel.findAll(parseInt(req.params.id, 10));
        if (!rsvps) {
            return res.status(404).send({
                status: 404,
                error: "no rsvp for this meetup",
            });
        }
        const rsvp = rsvps.map(rsvp => rsvp.response)
        return  res.status(200).send({
            status: 200,
            data: rsvp
        });
    }
}

export default Rsvp;
