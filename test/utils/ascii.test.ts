import { test, expect } from "vitest";
import { encodeASCII, decodeASCII, inRangeASCII } from "../../src/utils/ascii";
import { Side } from "../../src/utils/caesarCipher";

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


test("inRangeASCII expecte to specific long ciphers", ()=>{
    expect(inRangeASCII(52, Side.Right)).toEqual(26)
    expect(inRangeASCII(126, Side.Right)).toEqual(22)
    expect(inRangeASCII(27, Side.Right)).toEqual(1)
    expect(inRangeASCII(1, Side.Left)).toEqual(1)
    expect(inRangeASCII(1, Side.Right)).toEqual(1)
    expect(inRangeASCII(120, Side.Right)).toEqual(16)
    expect(inRangeASCII(-120, Side.Left)).toEqual(10)
})
