import { encodeToASCII } from "./ascii";

export enum Side {
    Left = -1,
    Right = 1,
}

export function encodeCaesarCipher(text: string, shift: number, side: Side): Array<number> {
    let positions: Array<number> = [];
    for (const letter of text) {
        const position = encodeToASCII(letter);
        if (!(position > 0)) {
            continue;
        }

        const encodeSalt = shift * side;
        let positionSalt = encodeSalt + position;
        if (side == Side.Left) {
            positions.push(positionSalt < 1 ? positionSalt + 26 : positionSalt);
            continue
        }
        positions.push(positionSalt > 26 ? positionSalt - 26 : positionSalt);
    }

    return positions;
}
