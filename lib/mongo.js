var _ = require('lodash'),
  async = require('async'),
  mongoose = require('mongoose');

var logger = require("logger-node").getLogger();

(function() {

  var root = this;
  var Dao = {};

  var _config;
  var db;
  var modelNames = [];

  function connect(next) {

    logger.info('Database:', _config.uri);
    db = mongoose.createConnection(_config.uri, _config.options);

    db.on('error', console.error.bind(console, '连接错误:'));

    return next();
  }


  function disconnect(next) {
    mongoose.disconnect();
  }

  Dao.bootstrap = function(config, callback) {
    _config = config;
    callback = callback || function() {};

    async.series([
      connect
    ], function(err, result) {
      if (err) {
        callback(err);
      } else {
        callback();
      }
    });
  }

  Dao.close = function() {
    disconnect();
  }

  Dao.model = function(modelName) {

    if (_.indexOf(modelNames, modelName) < 0) {
      require('./../model/' + modelName)(db);
      modelNames.push(modelName)
    }

    return db.model(modelName);
  }

  module.exports = Dao;
})();
