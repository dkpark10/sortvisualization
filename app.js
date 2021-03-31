'use strict';
const express = require('express');
const app = express();
const helmet = require('helmet');
const compression = require('compression');
const bodyparser = require('body-parser');
const port = 8080;

const session = require('express-session');
const fileStore = require('session-file-store')(session)
const secret = require('./secret/session')

const createRainbowColor = require('./lib/rainbowColor');
const createShuffledList = require('./lib/shuffleList');

const sortrouter = require('./Router/sortrouter');
const shufflerouter = require('./Router/shufflerouter');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(compression());
app.use(helmet());
app.use(session(secret));

app.use('/', sortrouter);
app.use('/', shufflerouter);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use('/lib', express.static('lib'));       // 다른 곳에 있는 lib 파일 사용하려면

app.get('/', (request, response) => {

  if (request.session.sess === undefined) {
    const rainbow = createRainbowColor();
    const shuffle = createShuffledList(rainbow.length);
    const sess = {
      rbw: rainbow,
      shf: shuffle
    };

    request.session.sess = sess;
  }

  response.render("index", { e: request.session.sess });
});

app.use((request, response, next) => {
  response.status(404).send('Not Found');
})

app.use((error, request, response, next) => {
  console.error(error.stack);
  response.status(500).send('Something broke');
})

app.listen(port, () => {
  console.log(`Waiting... ${port}`);
})  