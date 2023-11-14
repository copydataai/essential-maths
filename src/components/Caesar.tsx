import { createSignal, createMemo } from 'solid-js';
import './TextArea.css'
import { Side } from '../utils/caesarCipher';
import type { Component, Setter } from 'solid-js';

type CaesarProps = {
    placeholder: string;
    setShift: Setter;
    setCipher: Setter;
    setSide: Setter;
};

export const Caesar: Component<CaesarProps> = (props) => {
    const { placeholder, setCipher, setShift, setSide, children  } = props;
    const [ text, setText ] = createSignal<string>("");
    // TODO: Shift has to be positive no matters what Side choose (Right, Left)

    const getText = (event) => setCipher(event.target.value);
    const getShift = (event) => setShift(event.target.value);
    const getSide = (event) => setSide(event.target.value);
    return (
        <div class="container-criptology">
            <label htmlFor="shift">
                <span>Shift</span>
            </label>
            <input id="shift" type="number" name="shift" value="0" onInput={getShift} />
            <textarea id="" rows="10" cols="20" onInput={getText} placeholder={placeholder} />
            <div>
                <input class="checkbox-input" type="radio" name="side" value={Side.Left} onChange={getSide} />
                <input class="checkbox-input" type="radio" name="side" value={Side.Right} onChange={getSide} checked/>
            </div>
        </div>
    );
}
