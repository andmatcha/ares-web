import { NextPage } from "next";
import { css } from "@emotion/react";

const MainButton: NextPage<{ href?: string; text?: string }> = ({
  href,
  text,
}) => {
  return (
    <a href={href} css={styles.button}>
      <span>{text}</span>
    </a>
  );
};

const styles = {
  button: css`
    display: inline-block;
    position: relative;
    overflow: hidden;
    padding: 16px 64px;
    color: #fff;
    border: #fff 1px solid;
    cursor: pointer;
    transition: 0.4s;
    & span {
      position: relative;
    }
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
    &:hover {
      color: #000;
    }
    &:hover::before {
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
    }
  `,
};

export default MainButton;
