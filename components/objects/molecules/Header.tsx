import { css } from "@emotion/react";

const Header = () => {
  return (
    <header css={styles.header}>
      <h1 css={styles.title}>ARES Project</h1>
      <ul css={styles.menu}>
        <li css={styles.menuItem}>NEWS</li>
        <li css={styles.menuItem}>ABOUT US</li>
        <li css={styles.menuItem}>OUR ROVERS</li>
        <li css={styles.menuItem}>BLOG</li>
        <li css={styles.menuItem}>CONTACT</li>
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
  `,
  menu: css`
    display: flex;
    align-items: center;
    gap: 32px;
  `,
  menuItem: css`
    font-size: 14px;
    cursor: pointer;
  `,
};

export default Header;
