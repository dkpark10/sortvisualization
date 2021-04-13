'use strict';
declare function require(param: string): any;

const express: any = require('express');
const router: any = express.Router();
const sanitizer: any = require('sanitize-html');

import { Request, Response, NextFunction } from 'express';
import { sortHandler } from '../lib/sort';
import { ArrayforSwapSort, ArrayforSubstitutionSort, returnSortJson } from '../lib/interface';


function deleteSess(request: Request) {
  request.session.destroy(function () {
    request.session;
  });
}


function createSortFactory(shu: number[], rbw: string[]): Object{

  const shuffledList: number[] = shu;
  const rainbowColor: string[] = rbw;

  return {
    getSortType: function (type: string): ArrayforSubstitutionSort[] | ArrayforSwapSort[] | undefined {

      switch (type) {
        case 'selection':
          return sortHandler.selection(shuffledList) as ArrayforSwapSort[];
          break;
        case 'insertion':
          return sortHandler.insertion(shuffledList) as ArrayforSwapSort[];
          break;
        case 'bubble':
          return sortHandler.bubble(shuffledList) as ArrayforSwapSort[];
          break;
        case 'cocktail':
          return sortHandler.cocktail(shuffledList) as ArrayforSwapSort[];
          break;
        case 'quick':
          return sortHandler.quick(shuffledList) as ArrayforSwapSort[];
          break;
        case 'heap':
          return sortHandler.heap(shuffledList) as ArrayforSwapSort[];
          break;
        case 'merge':
          return sortHandler.merge(shuffledList, rainbowColor) as ArrayforSubstitutionSort[];
          break;
        case 'radix':
          return sortHandler.radix(shuffledList, rainbowColor) as ArrayforSubstitutionSort[];
          break;
        default:
          return undefined;
          break;
      }
    }
  };
}


router.post('/sort', (request: Request, response: Response) => {

  const sorttype: string = sanitizer(request.body.sorttype);
  const shuffledList: number[] = request.session.sess.shf;
  const rainbowColor: string[] = request.session.sess.rbw;

  let sortFactory: any = createSortFactory(shuffledList, rainbowColor);
  const retJson: returnSortJson<any> = { ret: sortFactory.getSortType(sorttype) };
  sortFactory = null; 

  deleteSess(request);

  response.status(200).json(retJson);
});

export = router;