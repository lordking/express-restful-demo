'use strict';

var fs = require('fs');
var logger = require("logger-node").getLogger();

module.exports = function(next) {

  var fileName = require('path').dirname(require.main.filename) + "/app.pid";
  fs.open(fileName, 'w', function(err, fd) {
    if (err) {
      logger.debug("try to open app.pid failed:", err);
      return next();
    }
    var pid = process.pid.toString();
    fs.write(fd, pid, 0, 'utf-8', function(err, written, string) {
      fs.close(fd, function() {
        //do nothing
      });
      if (err) {
        logger.error("try to write pid:", pid, " to app.pid file failed:", err);
        return next();
      } else {
        logger.info("write pid:", pid, " to app.pid file success");
        return next();
      }
    })
  });
}
