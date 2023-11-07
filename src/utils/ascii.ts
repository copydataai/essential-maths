export const alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";

export const encodeToASCII = (letter: string) => {
    const index = alphabetLowerCase.indexOf(letter.toLowerCase())
       return index > -1 ? index + 1: index;
}

