'use strict';

var async = require('async'),
    express = require('express'),
    bodyParser = require('body-parser'),
    ejs = require('ejs');

var logger = require('logger-node').getLogger();

(function() {

    var httpHelp = {};
    var app = express();

    function initRouter() {

        var routes = require('../config/routes')

        for (var key in routes) {
            logger.info('Init controller:', key);

            var method;
            var path = key;

            var ss = key.split(' ');
            if (ss.length == 1) {
                path = key;

            } else if (ss.length == 2) {
                method = ss[0].toLowerCase();
                path = ss[1];

            } else {
                return next('wrong url path')
            }

            if (method == 'get') {
                app.get(path, routes[key]);

            } else if (method == 'post') {
                app.post(path, routes[key]);

            } else if (method == 'put') {
                app.put(path, routes[key]);

            } else if (method == 'delete') {
                app.delete(path, routes[key]);

            } else {
                app.all(path, routes[key])
            }

        }

    }

    function start(serverConfig, next) {
        app.listen(serverConfig.port, function(err) {
            if (err) return next(err);
            logger.info('HTTP On:', serverConfig.port)
            return next()
        });
    }

    httpHelp.bootstrap = function(config, next) {
        var next = next || function() {};

        app.engine('.html', ejs.__express);
        app.set('view engine', 'html');
        app.set('views', __dirname + '/../views');

        app.use(bodyParser.json());
        app.use(express.static(__dirname + '/assets'));

        app.use(function(req, res, next) {

            //打印请求
            logger.debug(req.method, ':', req.url);

            //注入方法
            res.jsonResponse = require('./jsonResponse');

            next();
        });


        initRouter();

        start(config.local, next);
    }

    module.exports = httpHelp
})()
