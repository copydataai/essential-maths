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

  const cipherCaesar = createMemo<string>(() => {
    const encodeMode = mode();
    const optionCripto = option();
    if (optionCripto === OptionCripto.CaesarCipher) {
      console.log(side());
      if (encodeMode) {
        console.log("encode");
        return encodeCaesarCipher(caesarCipher(), shift(), side());
      }
      return decodeCaesarCipher(caesarCipher(), shift(), side());
    }

    return "";
  });

  const cipherVigenere = createMemo<string>(() => {
    const encodeMode = mode();
    const optionCripto = option();
    if (optionCripto === OptionCripto.VigenereCipher) {
      if (encodeMode) {
        return encodeVigenereCipher(vigenereCipher(), keypass());
      }
      return decodeVigenereCipher(vigenereCipher(), keypass());
    }

    return "";
  });

  return (
    <div class="flex flex-col items-center">
      <div role="tablist" class="tabs tabs-bordered">
        <input
          type="radio"
          name="option"
          role="tab"
          onChange={() => setOption(OptionCripto.VigenereCipher)}
          class="tab ml-20"
          aria-label="Vigenere"
        />
        <div role="tabpanel" class="tab-content p-10">
          <CriptoToggleButton setMode={setMode} />
          <Vigenere
            placeholder={quoteVigenere}
            setCipher={setVigenereCipher}
            setKeypass={setKeypass}
          />
          <textarea
            class="textarea textarea-success textarea-lg w-full max-w-sm"
            readonly
          >
            {cipherVigenere()}
          </textarea>
        </div>

        <input
          type="radio"
          name="option"
          role="tab"
          onChange={() => setOption(OptionCripto.CaesarCipher)}
          class="tab"
          aria-label="Caesar"
          checked
        />
        <div role="tabpanel" class="tab-content p-10">
          <CriptoToggleButton setMode={setMode} />
          <Caesar
            placeholder={quoteJuliusCaesar}
            setCipher={setCaesarCipher}
            setShift={setShift}
            setSide={setSide}
          />
          <textarea
            class="textarea textarea-success textarea-lg w-full max-w-sm"
            readonly
          >
            {cipherCaesar()}
          </textarea>
        </div>
      </div>
    </div>
  );
}
