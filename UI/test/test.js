const request = require('request');
const assert = require('assert');
const expect = require('chai').expect;
const meetups = require('../db/meetups').default;
const url = "http://localhost:3888/";


describe("meetups", () => {
    describe("GET /", () => {
        it("should return status code 200", (done) => {
            request.get(url, (err, res, body) => {
                expect(res.statusCode).to.equal(200);
                done();
            });
        });

        it("should return hompage", (done) => {
            request.get(url, (err, res, body) => {
                expect(res.body).to.equal("homepage");
                done();
            });
        });

        it("should be an array", (done) => {
            request.get(url+'api/v1/meetups', (err, res, body) => {
                expect(res.body).to.be.an('array');
                done();
            });
        });

        it("should return meetup records", (done) => {
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
    });
});

describe("users", () => {
    describe("GET /", () => {
        it("should return status code 200", (done) => {
            request.get(url+'api/v1/users', (err, res, body) => {
                expect(res.statusCode).to.equal(200);
                done();
            });
        });

        it("should return meetup records", (done) => {
            request.get(url+'api/v1/users', (err, res, body) => {
                expect(res.body).to.equal(users);
                done();
            });
        });

        it("should return a meetup record", (done, id=1) => {
            request.get(url+'api/v1/users/'+id, (err, res, body) => {
                expect(res.body).to.equal(users[id]);
                done();
            });
        });
    });
});