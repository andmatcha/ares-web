import { css } from "@emotion/react";
import { NextPage } from "next";
import { ReactNode } from "react";

const Section: NextPage<{ title: string; children: ReactNode }> = ({ title, children }) => {
  return (
    <section css={styles.section}>
      <h3 css={styles.title}>{title}</h3>
      <p>{children}</p>
    </section>
  );
};

const styles = {
  section: css`
    height: 100vh;
    padding: 80px 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    font-size: 18px;
  `,
  title: css`
    font-size: 2em;
    margin-top: 40px;
  `
};

export default Section;
