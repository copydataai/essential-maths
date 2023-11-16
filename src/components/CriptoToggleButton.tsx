import { createEffect } from 'solid-js';
import type { Component, Accessor, Setter } from 'solid-js';

type ButtonChoiceProps = {
    option: Accessor<OptionCripto>;
    setOption: Setter<OptionCripto>;
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
        if (option == OptionCripto.CaesarCipher) {
            return OptionCripto.VigenereCipher;
        }

        return OptionCripto.CaesarCipher;
    }

    return (
        <div class="inline-flex align-center rounded-3xl p-4">
            <button class="flex align-center py-2 px-3 border-2 border-black hover:bg-primary-400 text-black hover:text-primary-400 text-base rounded space-x-2" onClick={() => setOption(changeOption)}>
                <span class="text-sm text-primary-900 font-semi-bold">{option()}</span>
            </button>
        </div>
    )
}
