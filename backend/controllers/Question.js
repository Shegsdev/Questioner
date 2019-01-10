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
        const question = QuestionModel.create(req.body, parseInt(req.params.id, 10));
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

    // Fetch all question records
    getAll(req, res) {
        const questions = QuestionModel.findAll();
        return res.status(200).send({
            status: 200,
            data: questions,
        });
    },

    // Upvote a specific question
    upvote(req, res) {
        const question = QuestionModel.upvote(parseInt(req.params.id, 10));
        if (!question) {
            return res.status(400).send({
                status: 400,
                error: 'Question does not exist',
            });
        }
        return res.status(200).send({
            status: 200,
            data: [{
                meetup: question.meetup,
                title: question.title,
                body: question.body,
                votes: question.votes,
            }],
        });
    },

    // Downvote a specific question
    downvote(req, res) {
        const question = QuestionModel.downvote(parseInt(req.params.id, 10));
        if (!question) {
            return res.status(404).send({
                status: 404,
                error: "question does not exist",
            });
        }
        return res.status(200).send({
            status: 200,
            data: [{
                meetup: question.meetup,
                title: question.title,
                body: question.body,
                votes: question.votes,
            }],
        });
    }
}

export default Question;
