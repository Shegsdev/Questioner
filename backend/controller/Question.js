import QuestionModel from '../models/Question';

const Question = {
    // Create a question for a specific meetup
    create(req, res) {
        if (!req.body.title && !req.body.body) {
            return res.status(400).send({
                status: 400,
                error: 'All fields are required',
            });
        }
        const question = QuestionModel.create(req.body, req.params.id);
        return res.status(200).send({
            status: 201,
            data: [{
              user: question.createdBy,
              meetup: question.meetup,
              title: question.title,
              body: question.body,
            }],
        });
    },

    // Upvote a specific question
    upvote(req, res) {
        const id = parseInt(req.params.id, 10);

    },

    // Downvote a specific question
    downvote(req, res) {
        const question = QuestionModel.findOne(parseInt(req.params.id, 10));

        res.status(200).send({
            status: 200,
            data: [{
                meetup: question.meetup,
                title: question.title,
                body: question.body,
                votes: question.votes+1,
            }],
        });
    }
}

export default Question;
