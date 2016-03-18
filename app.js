'use strict';

var async = require("async");
var config = require("./config");
var logger = require("logger-node").createLogger(config.logger);

//启动系统
logger.info('--------------------- '+ config.local.name + ' -----------------------');
async.series([
  function (next) {
    var bootstrap = require("./config/bootstrap");
    return bootstrap(next);
  },
  function (next) {
    var savePidToLocal = require("./lib/savePidToLocal");
    return savePidToLocal(next);
  }
], function(err, results) {
  logger.info('--------------------------------------------------------\n');

  if (err) {
    logger.error(err);
    process.exit();
  };
});
