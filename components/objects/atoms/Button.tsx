"use client";
import { css } from "@emotion/react";
import { ReactNode } from "react";

const Button = ({
  type,
  children,
  disabled,
}: {
  type: "button" | "reset" | "submit";
  children: ReactNode;
  disabled?: boolean;
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      css={styles.button}
      className="inline-block relative overflow-hidden w-fit text-xs md:text-base py-3 md:py-4 px-6 md:px-16 text-white text-center cursor-pointer border border-white duration-500 enabled:hover:text-main-bg disabled:cursor-not-allowed disabled:opacity-50 max-w-xs"
    >
      <span className="relative">{children}</span>
    </button>
  );
};

const styles = {
  button: css`
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: "";
      transition: all 0.4s ease-in-out;
      transform: translateX(-100%);
      background: #fff;
    }
    &:not(:disabled):hover::before {
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
    }
  `,
};

export default Button;
