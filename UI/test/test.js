//const mocha = require('mocha');
const request = require('request');
const assert = require('assert');
const meetups = require('../db/meetups');
const url = "http://localhost:3888/";


describe("v1", () => {
    describe("GET /", () => {
        it("should return status code 200", (done) => {
            request.get(url, (err, res, body) => {
                assert.equal(200, body.status);
                done();
            });
        });

        it("should return Hompage", (done) => {
            request.get(url, (err, res, body) => {
                assert.equal("homepage", body);
                done();
            });
        });

        it("should return meetup records", (done) => {
            request.get(url+'api/v1/meetups', (err, res, body) => {
                assert.equal(meetups, body.data);
                done();
            });
        });

        it("should return a meetup record", (done, id=1) => {
            request.get(url+'api/v1/meetups/'+id, (err, res, body) => {
                assert.equal(meetups[id], body);
                done();
            });
        });
    });
});