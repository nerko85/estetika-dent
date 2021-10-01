import React from "react";
import {
  InputRoot,
  TextArea as StyledTextArea,
  InputErrorBox,
} from "./Input.style";

export default function TextArea({ disabled, hasError, errorMsg, ...rest }) {
  return (
    <InputRoot>
      <StyledTextArea
        {...rest}
        hasError={hasError}
        disabled={disabled}
      ></StyledTextArea>
      {hasError ? <InputErrorBox>{errorMsg}</InputErrorBox> : null}
    </InputRoot>
  );
}
