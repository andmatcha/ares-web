"use client";
import { ReactNode } from "react";

import { actionButtonClassName, actionButtonStyle } from "./buttonStyles";

type Props = {
  type: "button" | "reset" | "submit";
  children: ReactNode;
};

const Button = ({ type, children }: Props) => {
  return (
    <button
      type={type}
      css={actionButtonStyle}
      className={actionButtonClassName}
    >
      <span className="relative">{children}</span>
    </button>
  );
};

export default Button;
