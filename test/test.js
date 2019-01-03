const request = require('request');
const assert = require('assert');
const expect = require('chai').expect;
const rsvps = require('../db/rsvps').default;
const meetups = require('../db/meetups').default;
const questions = require('../db/questions').default;
const url = "http://localhost:3888/";


describe("meetups", () => {
    describe("GET /", () => {
        it("should return status code 200", (done) => {
            request.get(url, (err, res, body) => {
                expect(res.statusCode).to.equal(200);
                done();
            });
        });

        it("should return all meetup records", (done) => {
            request.get(url+'api/v1/meetups', (err, res, body) => {
                expect(res.body).to.equal(meetups);
                done();
            });
        });

        it("should return a meetup record", (done, id=1) => {
            request.get(url+'api/v1/meetups/'+id, (err, res, body) => {
                expect(res.body).to.equal(meetups[id]);
                done();
            });
        });

        it("should return upcoming meetup records", (done) => {
            request.get(url+'api/v1/meetups/upcoming', (err, res, body) => {
                expect(res.body).to.equal(meetups);
                done();
            });
        });
    });
});

describe("questions", () => {
    describe("GET /", () => {
        it("should return status code 200", (done) => {
            request.get(url+'api/v1/questions', (err, res, body) => {
                expect(res.statusCode).to.equal(200);
                done();
            });
        });

        it("should return a question record", (done, id=1) => {
            request.get(url+'api/v1/questions/'+id, (err, res, body) => {
                expect(res.body).to.equal(questions[id]);
                done();
            });
        });
    });

    describe("PATCH /", () => {
        it("should upvote a question", (done, id=1) => {
            request.get(url+'api/v1/questions/'+id+'/upvote', (err, res, body) => {
                expect(res.body.votes).to.equal(questions[id].votes+1);
                done();
            });
        });

        it("should downvote a question", (done, id=1) => {
            request.get(url+'api/v1/questions/'+id+'/downvote', (err, res, body) => {
                expect(res.body.votes).to.equal(questions[id].votes-1);
                done();
            });
        });
    });
});

describe("rsvps", () => {
    describe("GET /", () => {
        it("should return status code 200", (done) => {
            request.get(url+'api/v1/meetups/:id/rsvps', (err, res, body) => {
                expect(res.statusCode).to.equal(200);
                done();
            });
        });

        it("should return rsvps of a specific meetup record", (done) => {
            request.get(url+'api/v1/meetups/:id/rsvps', (err, res, body) => {
                expect(res.body).to.equal(rsvps);
                done();
            });
        });
    });
});