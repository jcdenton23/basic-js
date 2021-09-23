import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let str = String(n);
  let maxInt = +str.slice(1);
  for (let i = 1; i < str.length; i++) {
    if (+`${str.slice(0, i)}${str.slice(i + 1)}` > maxInt) {
      maxInt = +`${str.slice(0, i)}${str.slice(i + 1)}`;
    }
  }
  return maxInt;
}
