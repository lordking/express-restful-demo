'use strict';

var redis = require('redis');

var logger = require("logger-node").getLogger();

(function() {
  var root = this;
  var redisAdapter = {};
  var _client = null;
  var _config = null;

  function connect(done) {

    _client = redis.createClient(_config.port, _config.host, _config.options);
    _client.select(_config.db);

    if (_config.password) {
      root._client.auth(_config.password);
    }

    _client.on("error", function(err) {
      logger.error('Redis error:', err);
      done(err);
    })

    _client.on("connect", function() {
      logger.info('Redis:', _config.host + ':' + _config.port);
      done();
    })
  }

  redisAdapter.createClient = function(config, done) {
    done = done || function() {};

    _config = _config || config;
    connect(done);
  }

  redisAdapter.client = function() {

    if (_client == null) {
      connect();
    }

    return _client;
  }

  module.exports = redisAdapter;
})();
