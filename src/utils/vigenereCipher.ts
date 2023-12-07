import { encodeASCII, decodeASCII, inRangeASCII } from "./ascii";
import { Side } from "./caesarCipher";

export function encodeVigenereCipher(text: string, keypass: string): string {
  let encode = "";
  let keyCode = [];

  for (const key of keypass) {
    const position = encodeASCII(key);
    if (!(position > 0)) continue;
    keyCode.push(position);
  }

  if (keyCode.length == 0) return text;

  let indexKey = 0;

  for (const letter of text) {
    const position = encodeASCII(letter);
    if (!(position > 0)) {
      encode = encode.concat(letter == " " || letter == "\n" ? letter : "");
      continue;
    }

    if (indexKey == keyCode.length) indexKey = 0;

    const encodeSalt = keyCode[indexKey];

    const positionSalt = inRangeASCII(encodeSalt + position, Side.Right);

    encode = encode.concat(decodeASCII(positionSalt));
    indexKey++;
  }

  return encode;
}

export function decodeVigenereCipher(text: string, keypass: string): string {
  let encode = "";
  let keyCode = [];

  for (const key of keypass) {
    const position = encodeASCII(key);
    if (!(position > 0)) continue;
    keyCode.push(position);
  }

  if (keyCode.length == 0) return text;

  let indexKey = 0;

  for (const letter of text) {
    const position = encodeASCII(letter);
    if (!(position > 0)) {
      encode = encode.concat(letter == " " || letter == "\n" ? letter : "");
      continue;
    }

    if (indexKey == keyCode.length) indexKey = 0;

    const encodeSalt = keyCode[indexKey];
    const positionSalt = inRangeASCII(position - encodeSalt, Side.Left);

    encode = encode.concat(decodeASCII(positionSalt));
    indexKey++;
  }

  return encode;
}
