import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  const arr = n.split('-');
  if (arr.length !== 6) return false;

  const newArr = arr.join('').split('');
  console.log(newArr);
  for (let i = 0; i < newArr.length; i++) {
    if (!isFinite(newArr[i])) {
      if (newArr[i].charCodeAt() < 65 || newArr[i].charCodeAt() > 70) {
        return false;
      }
    }
  }
  return true;
}
