import {test, expect} from "vitest"
import { encodeCaesarCipher, decodeCaesarCipher, Side } from "../../src/utils/caesarCipher"

test("encodeCaesarCipher with shift 4 direction right", () => {
    expect(encodeCaesarCipher("abcd", 4, Side.Right)).toEqual('efgh')
})

test("encodeCaesarCipher with extra caracters direction right", () => {
    expect(encodeCaesarCipher("Hello world", 4, Side.Right)).toEqual("lipps asvph")
})

test("encodeCaesarCipher with extra caracters direction left", () => {
    expect(encodeCaesarCipher("Hello world", 4, Side.Left)).toEqual("dahhk sknhz")
    expect(encodeCaesarCipher("Hello $ !@$ world @!$!", 4, Side.Left)).toEqual("dahhk   sknhz ")
})

test("encodeCaesarCipher with side left", () => {
    expect(encodeCaesarCipher("abcd", 4, Side.Left)).toEqual("wxyz")
})

test("decodeCaesarCipher with shift 4 direction with previous side right", () => {
    expect(decodeCaesarCipher("efgh", 4, Side.Right)).toEqual("abcd")
})

test("decodeCaesarCipher with extra caracters with previous side right", () => {
    expect(decodeCaesarCipher("lipps asvph", 4, Side.Right)).toEqual("hello world")
})

test("decodeCaesarCipher with extra caracters direction left", () => {
    expect(decodeCaesarCipher("dahhk sknhz", 4, Side.Left)).toEqual("hello world");
    expect(decodeCaesarCipher("dahhk   sknhz ", 4, Side.Left)).toEqual("hello   world ");
})

test("decodeCaesarCipher with shift 4 direction left", () => {
    expect(decodeCaesarCipher("wxyz", 4, Side.Left)).toEqual("abcd")
})
