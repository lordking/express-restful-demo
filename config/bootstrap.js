'use strict';

var async = require("async");

module.exports = function(done) {

  var config = require("../config");

  async.series([
    function(next) {
      var dao = require('../lib/mongo');
      return dao.bootstrap(config.db, next);
    },
    function(next) {
      var redis = require('../lib/redis');
      return redis.createClient(config.redis, next);
    },
    function(next) {
      var http = require('../lib/http')
      return http.bootstrap(config, next);
    },

  ], done);

}
