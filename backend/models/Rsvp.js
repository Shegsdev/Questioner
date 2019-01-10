import MeetupModel from "../models/Meetup";

class RsvpModel {
    constructor() {
        this.rsvp = [];
    }

    // create rsvp for specific meetup
    create(data, id) {
        const meetup = MeetupModel.findOne(id);
        const rsvp = {
            id: this.rsvp.length+1,
            meetup: meetup.id,
            user: null,
            response: data.response,
        }
        this.rsvp.push(rsvp);
        return rsvp;
    }

    // Fetch all rsvps of a specific meetup
    findAll(id) {
        const meetup = MeetupModel.findOne(id);
        const rsvps = [];
        for (let i = 0; i < this.rsvp.length; i++) {
            for (let j = 0; j < MeetupModel.findAll().length; j++) {
                if (this.rsvp[i].meetup === meetup.id) {
                    rsvps.push(this.rsvp[i]);
                }
            }
        }
        console.log(rsvps)
        return rsvps;
    }
}

export default new RsvpModel();
