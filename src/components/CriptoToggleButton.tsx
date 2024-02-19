import type { Component, Setter } from "solid-js";

type ButtonChoiceProps = {
  setMode: Setter<boolean>;
};

export enum OptionCripto {
  CaesarCipher = "Caesar",
  VigenereCipher = "Vigenere",
}

export const CriptoToggleButton: Component<ButtonChoiceProps> = props => {
  const { setMode } = props;

  return (
    <div class="form-control">
      <label class="label cursor-pointer space-x-2">
        <span class="label-text">Encode</span>
        <input
          type="checkbox"
          class="toggle toggle-primary"
          onClick={() => setMode(mode => !mode)}
        />
        <span class="label-text">Decode</span>
      </label>
    </div>
  );
};
