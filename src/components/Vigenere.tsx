import type { Component, Setter } from "solid-js";

type VigenereProps = {
  placeholder: string;
  setCipher: Setter<string>;
  setKeypass: Setter<string>;
};

export const Vigenere: Component<VigenereProps> = props => {
  const { placeholder, setCipher, setKeypass } = props;

  const getCipher = event => setCipher(event.target.value);
  const getKeypass = event => setKeypass(event.target.value);

  return (
    <div class="mb-4 flex flex-col items-center">
      <div class="mb-4 flex items-center">
        <span class="mr-2 text-xs">KeyPass</span>
        <input
          placeholder="Keypass"
          class="input input-accent input-xs w-full max-w-sm"
          id="keypass"
          type="text"
          onInput={getKeypass}
        />
      </div>
      <textarea
        class="textarea textarea-secondary"
        onInput={getCipher}
        placeholder={placeholder}
      />
    </div>
  );
};
