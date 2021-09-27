import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      if (str[i] !== str[j]) {
        result += `${str.slice(i, j).length > 1 ? str.slice(i, j).length : ''}${
          str[i]
        }`;
        i = j - 1;
        break;
      }
      continue;
    }
  }
  return result;
}
