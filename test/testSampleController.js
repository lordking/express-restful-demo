'use strict';


var config = require("../config");
var logger = require("logger-node").createLogger(config.logger);
var requestJSON = require("../lib/requestJSON")

describe('#SampleController', function() {

  it('Sample to hello', function(done) {

    var data = {
      name: "leking"
    };

    var url = "http://127.0.0.1:8080/sample/hello";

    requestJSON(url, 'post', data, function(err, result) {
      if (err) {
        logger.debug('failure:', result);
        done(err);
      } else {
        logger.debug('success:', result);
        done();
      }
    });

  });

  it('Sample to create', function(done) {

    var data = {
      username: "leking",
      appCode: 100000
    };

    var url = "http://127.0.0.1:8080/person/new";

    requestJSON(url, 'post', data, function(err, result) {
      if (err) {
        logger.debug('failure:', result);
        done(err);
      } else {
        logger.debug('success:', result);
        done();
      }
    });

  });

  it('Sample to find', function(done) {

    var url = "http://127.0.0.1:8080/person/leking";

    requestJSON(url, 'get', {}, function(err, result) {
      if (err) {
        logger.debug('failure:', result);
        done(err);
      } else {
        logger.debug('success:', result);
        done();
      }
    });

  });

  it('Sample to update', function(done) {

    var data = {
      appCode: 100004
    };

    var url = "http://127.0.0.1:8080/person/leking";

    requestJSON(url, 'put', data, function(err, result) {
      if (err) {
        logger.debug('failure:', result);
        done(err);
      } else {
        logger.debug('success:', result);
        done();
      }
    });

  });

  it('Sample to delete', function(done) {

    var url = "http://127.0.0.1:8080/person/leking";

    requestJSON(url, 'delete', {}, function(err, result) {
      if (err) {
        logger.debug('failure:', result);
        done(err);
      } else {
        logger.debug('success:', result);
        done();
      }
    });

  });

});
