import MeetupModel from '../models/Meetup';

const Meetup = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} meetup object 
   */
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
		data: meetup,
	});
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} meetups array
   */
  getAll(req, res) {
    const meetups = MeetupModel.findAll();
    return res.status(200).send({
		status: 200,
		data: meetups,
	});
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} meetup object
   */
  getOne(req, res) {
    const meetup = MeetupModel.findOne(req.params.id);
    if (!meetup) {
        return res.status(404).send({
            status: 404,
            error: 'meetup was not found',
        });
    }
    return res.status(200).send({
		status: 200,
		data: meetup,
	});
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return status code 200
   */
  delete(req, res) {
    const meetup = MeetupModel.findOne(req.params.id);
    if (!meetup) {
        return res.status(404).send({
            status: 404,
            error: 'meetup was not found',
        });
    }
    const ref = MeetupModel.delete(req.params.id);
    return res.status(200).send({
		status: 200,
		data: ref,
	});
  }
}

export default Meetup;
