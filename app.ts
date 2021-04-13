'use strict';

declare function require(param: string): any;
// import * as express from "express";
import { Request, Response, NextFunction } from 'express';
// const express: any = require('express');

const express: any = require('express');
const app: any = express();
const helmet: any = require('helmet');
const compression = require('compression');
const bodyparser: any = require('body-parser');
const session: any = require('express-session');
const fileStore: any = require('session-file-store')(session)
const port: number = 8080;

import * as shufflerouter from './Router/shufflerouter';
import * as sortrouter from './Router/sortrouter';
import { secret } from './secret/session';
import { createRainbowColor } from './lib/rainbowColor';
import { createShuffledList } from './lib/shuffleList';

app.use(helmet());

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

app.get('/', (request: Request, response: Response, next: NextFunction) => {
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

app.use('/', (request: Request, response: Response, next: NextFunction) => {
  response.status(404).send('Not Found');
})

app.use('/', (error: Error, request: Request, response: Response, next: NextFunction) => {
  console.error(error.stack);
  response.status(500).send('Something broke');
})

app.listen(port, () => {
  console.log(`Waiting... ${port}`);
})

export default app;
