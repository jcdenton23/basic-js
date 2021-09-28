import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  const resMatrix = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(3).fill(0));

  for (let col = 0; col < matrix.length; col++) {
    for (let row = 0; row < matrix[col].length; row++) {
      let counter = 0;

      if (row > 0) {
        if (matrix[col][row - 1]) counter++;
      }

      if (row !== matrix.length - 1) {
        if (matrix[col][row + 1]) counter++;
      }

      if (col > 0) {
        if (matrix[col - 1][row]) counter++;
      }

      if (col < matrix.length - 1) {
        if (matrix[col + 1][row]) counter++;
      }

      if (col > 0 && row > 0) {
        if (matrix[col - 1][row - 1]) counter++;
      }

      if (col > 0 && row !== matrix.length - 1) {
        if (matrix[col - 1][row + 1]) counter++;
      }

      if (col < matrix.length - 1 && row !== matrix.length - 1) {
        if (matrix[col + 1][row + 1]) counter++;
      }

      if (col < matrix.length - 1 && row > 0) {
        if (matrix[col + 1][row - 1]) counter++;
      }

      resMatrix[col][row] = counter;
    }
  }
  return resMatrix;
}
