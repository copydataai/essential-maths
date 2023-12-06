import type { Component, Setter } from 'solid-js';

type ButtonChoiceProps = {
    setOption: Setter<OptionCripto>;
    setMode: Setter<boolean>;
};

export enum OptionCripto {
    CaesarCipher = "Caesar",
    VigenereCipher = "Vigenere",
};


export const CriptoToggleButton: Component<ButtonChoiceProps> = (props) => {
    const { setOption, setMode } = props;

    return (
        <>
           <div class="form-control">
                <label class="label cursor-pointer space-x-2">
                    <span class="label-text">Encode</span> 
                    <input type="checkbox" class="toggle toggle-primary" onClick={() => setMode(( mode) => !mode)}/>
                    <span class="label-text">Decode</span> 
                </label>
            </div> 
           <div class="form-control">
                <label class="label cursor-pointer space-x-2">
                    <span class="label-text">{OptionCripto.CaesarCipher}</span> 
                    <input type="checkbox" class="toggle toggle-secondary" onClick={() => setOption((option) => option === OptionCripto.CaesarCipher ? OptionCripto.VigenereCipher : OptionCripto.CaesarCipher)}/>
                    <span class="label-text">{OptionCripto.VigenereCipher}</span> 
                </label>
            </div> 
        </>
    )
}
