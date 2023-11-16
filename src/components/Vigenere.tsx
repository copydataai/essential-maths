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
        <div class="flex flex-col items-center space-y-4">
            <label class="" for="keypass">
                <span>KeyPass</span>
                <input class="w-36" id="keypass" type="text" onInput={getKeypass} />
            </label>
            <textarea class="bg-primary-200" onInput={getCipher} placeholder={placeholder} />
        </div>
    );
}
