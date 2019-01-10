import MeetupModel from '../models/Meetup';

const Meetup = {

  create(req, res) {
    if (!req.body.topic && !req.body.location && !req.body.description) {
        return res.status(400).send({
            status: 400,
            error: 'All fields are required',
        });
    }
    const meetup = MeetupModel.create(req.body);
    return res.status(200).send({
        status: 201,
        data: [{
          topic: meetup.topic,
          location: meetup.location,
          happeningOn: meetup.happeningOn,
          tags: meetup.tags,
        }],
    });
  },

  getAll(req, res) {
    const meetups = MeetupModel.findAll();
    return res.status(200).send({
        status: 200,
        data: meetups,
    });
  },

  getOne(req, res) {
    const meetup = MeetupModel.findOne(parseInt(req.params.id, 10));
    if (!meetup) {
        return res.status(404).send({
            status: 404,
            error: 'meetup was not found',
        });
    }
    return res.status(200).send({
        status: 200,
        data: [{
          topic: meetup.topic,
          location: meetup.location,
          happeningOn: meetup.happeningOn,
          tags: meetup.tags,
        }],
    });
  },

  getUpcoming(req, res) {
    const upcomingMeetups = MeetupModel.findUpcoming();
      if(!upcomingMeetups) {
          return res.status(404).send({
              status: 404,
              error: 'No upcoming meetups',
          });
      }

      const date = upcomingMeetups.map(d => d.join("-"));
      let meetups = MeetupModel.findAll().map(meetup => {
          for (let d of date) {
            if (d === meetup.happeningOn) return meetup;
          }
      })
      return res.status(200).send({
          status: 200,
          data: meetups.map(meetup => {
            return {meetup.id, meetup.topic, meetup.location, meetup.tags}
            })
      });
  },

  delete(req, res) {
    const meetup = MeetupModel.findOne(parseInt(req.params.id, 10));
    if (!meetup) {
        return res.status(404).send({
            status: 404,
            error: 'meetup was not found',
        });
    }
    const ref = MeetupModel.delete(meetup.id);
    return res.status(200).send({
        status: 200,
        data: [ref, 'meetup was successfully deleted'],
    });
  }

}

export default Meetup;
