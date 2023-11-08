import { test, expect } from "vitest";
import { encodeASCII, decodeASCII } from "../../src/utils/ascii";

test("encode letters to code ASCII", ()=>{
    expect( encodeASCII("a") ).toEqual(1);
    expect( encodeASCII("z") ).toEqual(26);
})
test("receive -1 to unexpected caracters", ()=>{
    expect( encodeASCII("$") ).toEqual(-1);
    expect( encodeASCII("%") ).toEqual(-1);
})

test("decode code ASCII", () => {
    expect(decodeASCII(1)).toEqual("a")
    expect(decodeASCII(5)).toEqual("e")
})

test("decode code ASCII unexpected numbers obtain empty String ", () => {
    expect(decodeASCII(-1)).toEqual("")
    expect(decodeASCII(27)).toEqual("")
})
