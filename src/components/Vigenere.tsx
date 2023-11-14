import { createSignal, createMemo, children } from 'solid-js';
import './TextArea.css'
import { encodeVigenereCipher, decodeVigenereCipher } from '../utils/vigenereCipher';
import type { Component, Setter } from 'solid-js';

type VigenereProps = {
    placeholder: string;
    setCipher: Setter;
    setKeypass: Setter;
};

export const Vigenere: Component<VigenereProps> = (props) => {
    const { placeholder, setCipher, setKeypass, children  } = props;

    const [ text, setText ] = createSignal<string>("");

    const getCipher = (event) => setCipher(event.target.value);
    const getKeypass = (event) => setKeypass(event.target.value);


    return (
        <div class="container-criptology">
            <label htmlFor="keypass">
                <span>KeyPass</span>
            </label>
            <input id="keypass" type="text" onInput={getKeypass} />
            <textarea id="" rows="10" cols="20" onInput={getCipher} placeholder={placeholder} />
        </div>
    );
}
