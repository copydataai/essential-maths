export const alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";

export const encodeASCII = (letter: string) => {
    const index = alphabetLowerCase.indexOf(letter.toLowerCase());
    return index > -1 ? index + 1: index;
}

export const decodeASCII = (index: number) => {
    return alphabetLowerCase.charAt(index - 1);
}
