'use strict';

var http = require("request");

module.exports = function requestJSON(url, method, data, done) {
  var done = done || function() {};

  http({
    url: url,
    method: method,
    body: data,
    json: true,
    headers: {
      'Content-Type': 'application/json'
    }
  }, function(err, res, result) {

    if (err) {
      return done(err, null);
    }

    if (res.statusCode == 200) {
      return done(null, result);

    } else {
      return done(result, null);
    }

  });
}
