const request = require('request');
const assert = require('assert');
const expect = require('chai').expect;
const rsvps = require('../db/rsvps').default;
const meetups = require('../db/meetups').default;
const questions = require('../db/questions').default;
const url = "http://localhost:5000/";


describe("meetups", () => {
    describe("GET /", () => {
        it("should return all meetup records", (done) => {
            request.get(url+'api/v1/meetups', (err, res, body) => {
                expect(JSON.parse(res.body).data.length).to.equal(meetups.length);
                done();
            });
        });

        it("should return meetup with id of 1", (done, id=1) => {
            request.get(url+'api/v1/meetups/'+id, (err, res, body) => {
                expect(JSON.parse(res.body).data.id).to.equal(meetups[id-1].id);
                done();
            });
        });
    });
});
