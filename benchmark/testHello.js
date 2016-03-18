'use strict';

var config = require("../config");
var logger = require("logger-node").createLogger(config.logger);
var requestJSON = require("../lib/requestJSON");

function testCase() {
  var data = {
    name: "leking"
  };

  var url = "http://127.0.0.1:8080/sample/hello";

  requestJSON(url, 'post', data, function(err, result) {
    if (err) {
      logger.debug('failure:', result);
    } else {
      logger.debug('success:', result);
    }
  });
}

var task = setInterval(function() {
  for (var i = 0; i < 1000; i++) {
    testCase();
  }
}, 1000);

// setTimeout(function(){
//   clearInterval(task)
// }, 60000)
