import Meetup from '../models/meetup.model';
import meetups from '../db/meetups';

exports.test = (req, res) => res.send('hello from the controller');

/**
 * Fetch all meetup records
 *
 * @return status: Integer, data: []
 */
exports.index = (req, res) => {
    if (meetups.length <= 0) {
        return res.status(400).send({
            status: 400,
            error: 'no meetups found',
        });
    }

    return res.status(200).send({
        status: 200,
        data: meetups,
    });
}

/**
 * Create a meetup record
 *
 * @return status: Integer, data: []
 */
exports.create = (req, res) => {
    if (!req.body.topic) {
        return res.status(400).send({
            status: 400,
            error: 'Topic is required',
        });
    }

    let date = new Date;
    let meetup = new Meetup(
        meetups.length+1,
        req.body.topic,
        req.body.location,
        req.body.image,
        date.getDate()+1 + '-' + date.getMonth() + '-' + date.getFullYear(),
        req.body.happeningOn,
        req.body.time,
        req.body.tags.split(","),
        req.body.description
    );

    meetups.push(meetup);

    return res.status(200).send({
		status: 201,
		data: meetup,
    });
}

/**
 * Fetch a specific meetup record.
 *
 * @param :id
 * @return status: Integer, data: []
 */
exports.show = (req, res) => {
    const id = parseInt(req.params.id, 10);

    meetups.map(meetup => {
        if (meetup.id === id) {
            return res.status(200).send({
                status: 200,
                data: meetup,
            });
        }
    });
    return res.status(404).send({
        status: 404,
        error: 'meetup was not found',
    })
};
