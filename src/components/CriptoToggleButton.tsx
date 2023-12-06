import { createEffect } from 'solid-js';
import type { Component, Accessor, Setter } from 'solid-js';

type ButtonChoiceProps = {
    option: Accessor<OptionCripto>;
    setOption: Setter<OptionCripto>;
    setMode: Setter<boolean>;
};

export enum OptionCripto {
    CaesarCipher = "Caesar Cipher",
    VigenereCipher = "Vigenere Cipher",
};


export const CriptoToggleButton: Component<ButtonChoiceProps> = (props) => {
    const { option, setOption, setMode } = props;


    createEffect(() => {
        // TODO: To validate in localstorage which option they choice
        // TODO: to apply components to submit to caesar or vigenere
    })

    const changeOption = (option: OptionCripto) => {
        if (option == OptionCripto.CaesarCipher) {
            return OptionCripto.VigenereCipher;
        }

        return OptionCripto.CaesarCipher;
    }

    return (
        <>
           <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">Encode</span> 
                    <input type="checkbox" class="toggle" onClick={() => setMode(( mode) => !mode)}/>
                    <span class="label-text">Decode</span> 
                </label>
            </div> 
            <button class="btn btn-accent" onClick={() => setOption(changeOption)}>
                <span class="text-sm font-semi-bold">{option()}</span>
            </button>
        </>
    )
}
