'use strict';

var _ = require('lodash');

var logger = require('logger-node').getLogger();
var mongo = require('../lib/mongo'),
  redis = require('../lib/redis');

(function() {

  var SampleController = {};
  var Person = mongo.model('Person');
  var redisClient = redis.client();

  SampleController.hello = function(req, res) {

    logger.debug('requset:', req.body);

    return res.jsonResponse(200, "ok")
  }

  SampleController.createPerson = function(req, res) {

    Person.create(req.body, function(err, result) {
      if (err) {
        return res.jsonResponse(400, err.toString());
      } else {
        return res.jsonResponse(200, result);
      }
    })
  }

  SampleController.findPerson = function(req, res) {

    var username = req.params.username;

    Person.find({
      username: username
    }, function(err, result) {
      if (err) {
        return res.jsonResponse(400, err.toString());
      } else {
        return res.jsonResponse(200, result);
      }
    })
  }

  SampleController.updatePerson = function(req, res) {

    var username = req.params.username;

    Person.update({
      username: username
    }, req.body, {
      multi: true
    }, function(err, result) {
      if (err) {
        return res.jsonResponse(400, err.toString());
      } else {
        return res.jsonResponse(200, result);
      }
    })
  }

  SampleController.deletePerson = function(req, res) {

    var username = req.params.username;

    Person.remove({
      username: username
    }, function(err, result) {
      if (err) {
        return res.jsonResponse(400, err.toString());
      } else {
        return res.jsonResponse(200, result);
      }
    })
  }

  SampleController.registerSession = function(req, res) {

    var sid = _.uniqueId('sid_');
    var request = req.body;

    if (!request.username) {
      return res.jsonResponse(400, '`username` is required');
    }

    if (!request.appCode) {
      return res.jsonResponse(400, '`appCode` is required');
    }

    //创建会话
    var value = {
      username: request.username,
      appCode: request.appCode
    };
    redisClient.hmset(sid, value);
    redisClient.expire(sid, 300);

    //打印会话
    redisClient.hgetall(sid, function(err, session) {
      logger.debug('redis register:', sid, session);
      value.sid = sid;
      return res.jsonResponse(200, value);
    });
  }

  module.exports = SampleController;
})()
