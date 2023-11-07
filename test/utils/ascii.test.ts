import { test, expect } from "vitest";
import { encodeToASCII } from "../../src/utils/ascii";

test("encode letters to code ASCII", ()=>{
    expect( encodeToASCII("a") ).toEqual(1);
    expect( encodeToASCII("z") ).toEqual(26);
})
test("receive -1 to unexpected caracters", ()=>{
    expect( encodeToASCII("$") ).toEqual(-1);
    expect( encodeToASCII("%") ).toEqual(-1);
})
