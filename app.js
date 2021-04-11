'use strict';
exports.__esModule = true;
// const express: any = require('express');
var express = require('express');
var app = express();
var helmet = require('helmet');
var compression = require('compression');
var bodyparser = require('body-parser');
var session = require('express-session');
var fileStore = require('session-file-store')(session);
var port = 8080;
var session_1 = require("./secret/session");
var rainbowColor_1 = require("./lib/rainbowColor");
var shuffleList_1 = require("./lib/shuffleList");
app.use(helmet());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(compression());
app.use(helmet());
app.use(session(session_1.secret));
// app.use('/', sortrouter);
// app.use('/', shufflerouter);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use('/lib', express.static('lib')); // 다른 곳에 있는 lib 파일 사용하려면
app.get('/', function (request, response, next) {
    if (request.session.sess === undefined) {
        var rainbow = rainbowColor_1.createRainbowColor();
        var shuffle = shuffleList_1.createShuffledList(rainbow.length);
        var sess = {
            rbw: rainbow,
            shf: shuffle
        };
        request.session.sess = sess;
    }
    response.render("index", { e: request.session.sess });
});
app.use('/', function (request, response, next) {
    response.status(404).send('Not Found');
});
app.use('/', function (error, request, response, next) {
    console.error(error.stack);
    response.status(500).send('Something broke');
});
app.listen(port, function () {
    console.log("Waiting... " + port);
});
exports["default"] = app;
