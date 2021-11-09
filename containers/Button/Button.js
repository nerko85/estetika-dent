import React from "react";
import { Button as StyledButton } from "./Button.style";
import Link from "next/link";

export default function Button({ children, type, url, target, disabled }) {
  return (
    <StyledButton type={type} disabled={disabled}>
      <Link href={url}>
        <a target={target}>{children}</a>
      </Link>
    </StyledButton>
  );
}

Button.defaultProps = {
  url: "#",
  type: "primary",
};
