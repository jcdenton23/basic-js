import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const result = arr.slice();

  for (let i = 0; i < result.length; i++) {
    if (result[i] === '--discard-next') {
      result.splice(i, 1);
      if (i !== result.length - 1) {
        result.splice(i, 1);
        if (typeof result[i] !== 'number') {
          result.splice(i, 1);
        }
        i--;
      }
    } else if (result[i] === '--discard-prev') {
      result.splice(i, 1);
      if (i !== 0) {
        result.splice(i - 1, 1);
      }
    } else if (result[i] === '--double-next') {
      result.splice(i, 1);
      if (i !== result.length) {
        result.splice(i, 0, result[i]);
      }
    } else if (result[i] === '--double-prev') {
      result.splice(i, 1);
      if (i !== 0) {
        result.splice(i - 1, 0, result[i - 1]);
      }
    }
  }
  return result;
}
