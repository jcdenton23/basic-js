import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr, depth = 1, max = 1) {
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        depth += this.calculateDepth(item);
        if (depth > max) {
          max = depth;
        }
        depth = 1;
      }
    });
    return max;
  }
}
