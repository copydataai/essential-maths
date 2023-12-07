import { createSignal, createMemo, Show } from "solid-js";
import { Caesar } from "../components/Caesar";
import { Vigenere } from "../components/Vigenere";
import {
  CriptoToggleButton,
  OptionCripto,
} from "../components/CriptoToggleButton";
import {
  decodeCaesarCipher,
  encodeCaesarCipher,
  Side,
} from "../utils/caesarCipher";
import {
  encodeVigenereCipher,
  decodeVigenereCipher,
} from "../utils/vigenereCipher";

export function CriptologyLayout() {
  const [option, setOption] = createSignal<OptionCripto>(
    OptionCripto.CaesarCipher
  );
  const [keypass, setKeypass] = createSignal<string>("");
  const [shift, setShift] = createSignal<number>(0);
  const [side, setSide] = createSignal<Side>(Side.Right);
  const [caesarCipher, setCaesarCipher] = createSignal<string>("");
  const [vigenereCipher, setVigenereCipher] = createSignal<string>("");
  const [mode, setMode] = createSignal<boolean>(false);

  const quoteJuliusCaesar = "I came, I saw and I conquered by Julius Caesar.";
  const quoteVigenere =
    "The Arts are learnt by reason and method; they are mastered by practice. by Leon Battista Alberti.";

  const cipherMemo = createMemo<string>(() => {
    const encodeMode = mode();
    const optionCripto = option();
    if (optionCripto === OptionCripto.CaesarCipher) {
      if (encodeMode) {
        return encodeCaesarCipher(caesarCipher(), shift(), side());
      }
      return decodeCaesarCipher(caesarCipher(), shift(), side());
    }
    if (optionCripto === OptionCripto.VigenereCipher) {
      if (encodeMode) {
        return encodeVigenereCipher(vigenereCipher(), keypass());
      }
      return decodeVigenereCipher(vigenereCipher(), keypass());
    }

    return "";
  });

  return (
    <div class="mb-4 flex flex-col items-center">
      <CriptoToggleButton setOption={setOption} setMode={setMode} />
      <Show
        when={option() === OptionCripto.CaesarCipher}
        fallback={
          <Vigenere
            placeholder={quoteVigenere}
            setCipher={setVigenereCipher}
            setKeypass={setKeypass}
          />
        }
      >
        <Caesar
          placeholder={quoteJuliusCaesar}
          setCipher={setCaesarCipher}
          setShift={setShift}
          setSide={setSide}
        />
      </Show>
      <textarea class="textarea textarea-lg w-full max-w-sm" disabled>
        {cipherMemo()}
      </textarea>
    </div>
  );
}
