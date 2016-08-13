const uber = require('../server/uber');
const lyft = require('../server/lyft');
const chai = require('chai');
const should = chai.should();

describe('Uber', function(){
	it('should return Uber rides', function (done) {
	let rides;
	uber.uberRequest(['40.7127837', '-74.00594130000002', '40.713700', '-74.0059680000'])
	.then(function(result) {rides = uber.parseUber(result)})

	rides.should.be.a('object');
	done();
	})
})