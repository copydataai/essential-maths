import { test, expect } from "vitest";
import { encodeVigenereCipher, decodeVigenereCipher } from "../../src/utils/vigenereCipher";


test("encodeVigenereCipher with key 'bitcoin'", () => {
    const key = "bitcoin";
    expect(encodeVigenereCipher("hello", key)).toEqual("jnfod")
})

test("encodeVigenereCipher withan empty key", () => {
    expect(encodeVigenereCipher("hello", "")).toEqual("hello")
})

test("encodeVigenereCipher with a key with special caracters", () => {
    expect(encodeVigenereCipher("hello", "$#@#@")).toEqual("hello")
})

test("encodeVigenereCipher with key 'bitcoin'", () => {
    const key = "bitcoin";
    expect(encodeVigenereCipher("hello world", key)).toEqual("jnfod fctux")
    expect(encodeVigenereCipher("hello $$$#$##$#world ", key)).toEqual("jnfod fctux ")
})


test("decodeVigenereCipher with key 'bitcoin' with space", () => {
    const key = "bitcoin";
    expect(decodeVigenereCipher("jnfod fctux", key)).toEqual("hello world")
    expect(decodeVigenereCipher("jnfod$@#@ fctux ", key)).toEqual("hello world ")
})

test("decodeVigenereCipher with key 'bitcoin' with a jump of line", () => {
    const key = "bitcoin";
    expect(decodeVigenereCipher(`jnfod \n fctux`, key)).toEqual("hello \n world")
})

test("decodeVigenereCipher with an empty key return the same text", () => {
    expect(decodeVigenereCipher("jnfod fctux", "")).toEqual("jnfod fctux")
})

test("decodeVigenereCipher with an empty key with special caracters", () => {
    expect(decodeVigenereCipher("hello", "$#@#@")).toEqual("hello")
})
