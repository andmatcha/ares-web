import { css } from "@emotion/react";

const Header = () => {
  return (
    <header css={styles.header}>
      <h1 css={styles.title}>A<span className="text-red-600">R</span>ES Project</h1>
      <ul className="flex items-center gap-10 text-xs">
        <li className="cursor-pointer">TEAM</li>
        <li className="cursor-pointer">WHAT'S URC?</li>
        <li className="cursor-pointer">ROVERS</li>
        <li className="cursor-pointer">NEWS</li>
        <li className="cursor-pointer">CONTACT</li>
      </ul>
    </header>
  );
};

const styles = {
  header: css`
    position: fixed;
    width: 100vw;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 48px;
    justify-content: space-between;
    z-index: 10;
  `,
  title: css`
    font-size: 24px;
  `
};

export default Header;
