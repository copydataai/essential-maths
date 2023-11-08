import { decodeASCII, encodeASCII } from "./ascii";

export enum Side {
    Left = -1,
    Right = 1,
}

export function encodeCaesarCipher(text: string, shift: number, side: Side): string {
    let encode = "";
    for (const letter of text) {
        const position = encodeASCII(letter);
        if (!(position > 0)) {
            encode = encode.concat((letter == " " || letter == "\n") ? letter : "");
            continue;
        }

        const encodeSalt = shift * side;
        let positionSalt = encodeSalt + position;
        if (side == Side.Left) {
            encode = encode.concat(positionSalt < 1 ? decodeASCII(positionSalt + 26) : decodeASCII(positionSalt));
            continue
        }

        encode = encode.concat(positionSalt > 26 ? decodeASCII(positionSalt - 26) : decodeASCII(positionSalt));
    }

    return encode;
}

// It's just a encode function but changing the side
export function decodeCaesarCipher(cipher: string, shift: number, side: Side){
    if (side == Side.Left){
        return encodeCaesarCipher(cipher, shift, Side.Right)
    }

    return encodeCaesarCipher(cipher, shift, Side.Left)
}
