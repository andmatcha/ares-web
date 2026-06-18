import { css } from "@emotion/react";

export const actionButtonClassName =
  "inline-block relative overflow-hidden w-fit text-xs md:text-base py-3 md:py-4 px-6 md:px-16 text-black text-center cursor-pointer border border-black duration-500 hover:text-white max-w-xs";

export const actionButtonStyle = css`
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    transition: all 0.4s ease-in-out;
    transform: translateX(-100%);
    background: #111;
  }
  &:hover::before {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
`;
