import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  str = String(str);
  options.repeatTimes = options.repeatTimes || 1;
  options.separator = options.separator || '+';
  options.additionSeparator = options.additionSeparator || '|';
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  options.addition =
    options.addition !== undefined ? String(options.addition) : null;

  let add = '';
  if (options.addition) {
    add = `${options.addition + options.additionSeparator}`.repeat(
      options.additionRepeatTimes
    );
    add = add.slice(0, add.length - options.additionSeparator.length);
  }
  let strAndAdd = `${str}${add}`;
  let res = '';
  for (let i = 0; i < options.repeatTimes; i++) {
    if (i === options.repeatTimes - 1) {
      res += strAndAdd;
      break;
    }
    res += strAndAdd + `${options.separator}`;
  }
  return res;
}
