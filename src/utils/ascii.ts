import { Side } from "./caesarCipher";
export const alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";

export const encodeASCII = (letter: string) => {
    const index = alphabetLowerCase.indexOf(letter.toLowerCase());
    return index > -1 ? index + 1: index;
}

export const decodeASCII = (index: number) => {
    return alphabetLowerCase.charAt(index - 1);
}

// TODO: Find a design pattern to the defin side.Right with position > 0
// and side.Left with position < 0
// because if its side.Right position = 120 that's going to positive infinite
// same as side.Left position = -120 that's going to negative infinite
export function inRangeASCII(position: number, side: Side): number {
    const maxPosition = alphabetLowerCase.length;

    position = ((position - 1) % maxPosition + maxPosition) % maxPosition + 1;

    return position;
}
