import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }

  getKey(str, key) {
    const kf = Math.ceil(str.length / key.length);
    return key.repeat(kf).slice(0, str.length).toUpperCase();
  }

  encrypt(str, key) {
    if (!str || !key) throw new Error('Incorrect arguments!');
    key = this.getKey(str, key);
    str = str.toUpperCase();

    const startPos = 'A'.charCodeAt(0);
    const endPos = 'Z'.charCodeAt(0);
    const abcCount = 26;

    const res = [];

    for (let i = 0, j = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= startPos && str.charCodeAt(i) <= endPos) {
        let letterIdx = str.charCodeAt(i) - startPos;
        let shift = key.charCodeAt(j) - startPos;
        res.push(
          String.fromCharCode(startPos + ((letterIdx + shift) % abcCount))
        );
        j++;
      } else {
        res.push(str[i]);
      }
    }
    return this.type ? res.join('') : res.reverse().join('');
  }

  decrypt(str, key) {
    if (!str || !key) throw new Error('Incorrect arguments!');
    key = this.getKey(str, key);
    str = str.toUpperCase();

    const startPos = 'A'.charCodeAt(0);
    const endPos = 'Z'.charCodeAt(0);
    const abcCount = 26;

    const res = [];

    for (let i = 0, j = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= startPos && str.charCodeAt(i) <= endPos) {
        let letterIdx = str.charCodeAt(i) - startPos;
        let shift = key.charCodeAt(j) - startPos;
        res.push(
          String.fromCharCode(
            startPos + ((letterIdx - shift + abcCount) % abcCount)
          )
        );
        j++;
      } else {
        res.push(str[i]);
      }
    }
    return this.type ? res.join('') : res.reverse().join('');
  }
}
