'use strict';
exports.__esModule = true;
var express = require('express');
var app = express();
var helmet = require('helmet');
var compression = require('compression');
var bodyparser = require('body-parser');
var session = require('express-session');
var fileStore = require('session-file-store')(session);
var session_1 = require("./secret/session");
var port = 8080;
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
app.get("/", function (req, res, next) {
    res.send("hello typescript express!");
});
app.listen(port, function () {
    console.log("Waiting... " + port);
});
exports["default"] = app;
