'use strict';
declare function require(param: string): any;

const express: any = require('express');
const router: any = express.Router();
const sanitizer: any = require('sanitize-html');

import { Request, Response, NextFunction } from 'express';
import { createRainbowColor } from '../lib/rainbowColor';
import { createShuffledList } from '../lib/shuffleList';


router.post('/shuffle', (request: Request, response: Response) => {

  sanitizer(request.body); 
  const rainbow : string[] = createRainbowColor();
  const shuffle : number[] = createShuffledList(rainbow.length);
  const sess = {
    rbw: rainbow,
    shf: shuffle
  };
  request.session.sess = sess;

  response.status(200).json({ shf: shuffle, rbw: rainbow });
});

export = router;