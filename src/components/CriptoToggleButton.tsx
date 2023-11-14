import { createEffect } from 'solid-js';
import './CriptoToggleButton.css';
import type { Component, Accessor, Setter } from 'solid-js';

type ButtonChoiceProps = {
    option: Accessor;
    setOption: Setter;
};

export enum OptionCripto {
    CaesarCipher = "Caesar Cipher",
    VigenereCipher = "Vigenere Cipher",
};


export const CriptoToggleButton: Component<ButtonChoiceProps> = (props) => {
    const { option, setOption } = props;

    createEffect(() => {
        // TODO: To validate in localstorage which option they choice
        // TODO: to apply components to submit to caesar or vigenere
    })

    const changeOption = (option: OptionCripto) => {
        if ( option == OptionCripto.CaesarCipher ) {
            return OptionCripto.VigenereCipher;
        }

        return OptionCripto.CaesarCipher;
    }

    return (
        <div class="cripto-toggle-button">
            <button onClick={() => setOption(changeOption)}>
                <div>{option()}</div>
            </button>
        </div>
    )
}
