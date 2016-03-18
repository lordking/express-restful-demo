'use strict';

var config = require("../config");
var logger = require("logger-node").createLogger(config.logger);
var requestJSON = require("../lib/requestJSON");

function testCase() {

  var data = {
    username: "leking",
    appCode: 100000
  };

  var url = "http://127.0.0.1:8080/person/new";

  requestJSON(url, 'post', data, function(err, result) {
    if (err) {
      logger.debug('failure:', result);
    } else {
      logger.debug('success:', result);
    }
  });

}

var task = setInterval(function() {
  for (var i = 0; i < 800; i++) {
    testCase();
  }
}, 1000);

// setTimeout(function(){
//   clearInterval(task)
// }, 60000)
