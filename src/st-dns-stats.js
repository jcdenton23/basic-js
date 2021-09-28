import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const obj = {};
  if (domains.length === 0) return obj;
  const domain = domains[0].slice(domains[0].lastIndexOf('.'));
  const arr = domains.map((item) => `.${item.split('.').reverse().join('.')}`);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].includes(arr[i])) {
        obj[arr[i]] = ++count;
      }
    }
    count = 0;
  }
  obj[domain] = arr.length;
  return obj;
}
