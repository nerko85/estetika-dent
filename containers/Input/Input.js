import React from "react";
import { InputRoot, InputContent, InputErrorBox } from "./Input.style";

export default function Input({ disabled, hasError, errorMsg, ...rest }) {
  return (
    <InputRoot>
      <InputContent
        {...rest}
        hasError={hasError}
        disabled={disabled}
      ></InputContent>
      {hasError ? <InputErrorBox>{errorMsg}</InputErrorBox> : null}
    </InputRoot>
  );
}
