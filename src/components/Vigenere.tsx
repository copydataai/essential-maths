import type { Component, Setter } from 'solid-js';

type VigenereProps = {
    placeholder: string;
    setCipher: Setter<string>;
    setKeypass: Setter<string>;
};

export const Vigenere: Component<VigenereProps> = (props) => {
    const { placeholder, setCipher, setKeypass } = props;


    const getCipher = (event) => setCipher(event.target.value);
    const getKeypass = (event) => setKeypass(event.target.value);


    return (
        <div class="flex flex-col items-center">
            <div class="flex items-center">
                <span>KeyPass</span>
                <input placeholder='Keypass' class="input input-md w-5/12 max-w-sm" id="keypass" type="text" onInput={getKeypass} />
            </div>
            <textarea class="textarea textarea-ghost " onInput={getCipher} placeholder={placeholder} />
        </div>
    );
}
