import { createSignal, createMemo, createEffect, Show } from 'solid-js';
import { Caesar } from '../components/Caesar';
import { Vigenere } from '../components/Vigenere';
import { CriptoToggleButton, OptionCripto } from '../components/CriptoToggleButton'
import { decodeCaesarCipher, encodeCaesarCipher, Side } from '../utils/caesarCipher';
import { encodeVigenereCipher, decodeVigenereCipher } from '../utils/vigenereCipher';

export function CriptologyLayout() {
    const [option, setOption] = createSignal<OptionCripto>(OptionCripto.CaesarCipher);
    const [keypass, setKeypass] = createSignal<string>("");
    const [shift, setShift] = createSignal<number>(0);
    const [side, setSide] = createSignal<Side>(Side.Right);
    const [caesarCipher, setCaesarCipher] = createSignal<string>("")
    const [vigenereCipher, setVigenereCipher] = createSignal<string>("")


    const quoteJuliusCaesar = "I came, I saw and I conquered by Julius Caesar."
    const quoteVigenere = "The Arts are learnt by reason and method; they are mastered by practice. by Leon Battista Alberti.";

    const cipherText = createMemo<string>(() => {
        if (caesarCipher().length > 0 && option() == OptionCripto.CaesarCipher) {
            return caesarCipher();
        }
        if (vigenereCipher().length > 0 && option() == OptionCripto.VigenereCipher) {
            return vigenereCipher();
        }
    })

    const cipherMemo = createMemo<string>(() => {
        if (option() == OptionCripto.CaesarCipher && cipherText()) {
            return encodeCaesarCipher(cipherText(), shift(), side());
        }
        if (option() == OptionCripto.VigenereCipher && cipherText()) {
            return encodeVigenereCipher(cipherText(), keypass());
        }
    })


    return (
        <div class="flex flex-col items-center space-y-4">
            <CriptoToggleButton option={option} setOption={setOption} />
            <Show when={option() === OptionCripto.CaesarCipher} >
                <Caesar placeholder={quoteJuliusCaesar} setCipher={setCaesarCipher} setShift={setShift} side={side} setSide={setSide} />
            </Show>
            <Show when={option() === OptionCripto.VigenereCipher}>
                <Vigenere placeholder={quoteVigenere} setCipher={setVigenereCipher} setKeypass={setKeypass} />
            </Show>
            <textarea class="textarea textarea-lg w-full max-w-sm" disabled>{cipherMemo()}</textarea>
        </div>
    );
}
