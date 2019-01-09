
class QuestionModel {
    /**
     * class constructor
     * @param {object} data
     */
    constructor() {
      this.questions = [];
    }

    // Create a new meetup record
    create(data, meetupId) {
        const date = new Date;
        const newQuestion = {
            id: this.questions.length+1,
            createdOn: date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear(),
            createdBy: null,
            meetup: meetupId,
            title: data.title,
            body: data.body,
            votes: 0
        };
        this.questions.push(newQuestion);
        return newQuestion;
    }

    // Get one question record
    findOne(id) {
        return this.questions.find(question => question.id === id);
      }

    // Fetch all question records
    findAll() {
      return this.questions;
    }

    // Upvote a specific question
    upvote(id) {
        let upvotedQuestion;
        let questionIndex;
        questions.map((question, index) => {
            if (question.id === id) {
                upvotedQuestion = question;
                questionIndex = index;
            }
        });

        const updatedQuestion = {
            id: upvotedQuestion.id,
            createdOn: upvotedQuestion.createdOn,
            createdBy: upvotedQuestion.createdBy,
            meetup: upvotedQuestion.meetup,
            title: upvotedQuestion.title,
            body: upvotedQuestion.body,
            votes: upvotedQuestion.votes+1,
        }

        questions.splice(questionIndex, 1, updatedQuestion);

        return updatedQuestion;
    }

    // Downvote a specific question
    downvote(id) {
        let downvotedQuestion;
        let questionIndex;
        questions.map((question, index) => {
            if (question.id === id) {
                downvotedQuestion = question;
                questionIndex = index;
            }
        });

        const updatedQuestion = {
            id: downvotedQuestion.id,
            createdOn: downvotedQuestion.createdOn,
            createdBy: downvotedQuestion.createdBy,
            meetup: downvotedQuestion.meetup,
            title: downvotedQuestion.title,
            body: downvotedQuestion.body,
            votes: downvotedQuestion.votes-1,
        }

        questions.splice(questionIndex, 1, updatedQuestion);

        return res.status(200).send({
            status: 200,
            data: [{
                meetup: updatedQuestion.meetup,
                title: updatedQuestion.title,
                body: updatedQuestion.body,
                votes: updatedQuestion.votes,
            }],
        });
    }
  }

  export default new QuestionModel();
  