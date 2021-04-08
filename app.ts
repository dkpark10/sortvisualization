'use strict';
declare function require(param: string): any;

import {Request, Response, NextFunction} from 'express';
const express: any = require('express');
const app: any = express();
const helmet: any = require('helmet');
const compression = require('compression');
const bodyparser: any = require('body-parser');
const session: any = require('express-session');
const fileStore: any = require('session-file-store')(session)

import { secret } from './secret/session';
import { createRainbowColor } from './lib/rainbowColor';
import { createShuffledList } from './lib/shuffleList';

const port: number = 8080;

app.use(helmet());

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(compression());
app.use(helmet());
app.use(session(secret));

// app.use('/', sortrouter);
// app.use('/', shufflerouter);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use('/lib', express.static('lib'));       // 다른 곳에 있는 lib 파일 사용하려면

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("hello typescript express!");
});

app.listen(port, () => {
  console.log(`Waiting... ${port}`);
});

export default app;