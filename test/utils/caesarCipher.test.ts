import {test, expect} from "vitest"
import { encodeCaesarCipher, Side } from "../../src/utils/caesarCipher"

test("encodeCaesarCipher with shift 4 direction right", () => {
    expect(encodeCaesarCipher("abcd", 4, Side.Right)).toEqual([5,6,7,8])
})

test("encodeCaesarCipher with extra caracters direction right", () => {
    expect(encodeCaesarCipher("Hello world", 4, Side.Right)).toEqual([12,9, 16, 16, 19, 1, 19, 22, 16, 8])
})

test("encodeCaesarCipher with extra caracters direction left", () => {
    expect(encodeCaesarCipher("Hello world", 4, Side.Left)).toEqual([4,1, 8, 8, 11, 19, 11, 14, 8, 26])
    expect(encodeCaesarCipher("Hello $ !@$ world @!$!", 4, Side.Left)).toEqual([4,1, 8, 8, 11, 19, 11, 14, 8, 26])
})

test("encodeCaesarCipher with shift 4 direction left", () => {
    expect(encodeCaesarCipher("abcd", 4, Side.Left)).toEqual([23,24,25,26])
})
