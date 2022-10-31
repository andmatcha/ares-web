import { css } from "@emotion/react";
import { NextPage } from "next";
import { ReactNode } from "react";

const Section: NextPage<{ title: string; children?: ReactNode }> = ({ title, children }) => {
  return (
    <section css={styles.section}>
      <h3 className="text-4xl mt-10 tracking-wider">{title}</h3>
      <div css={styles.content}>{children}</div>
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
  content: css`
    width: 100%;
  `
};

export default Section;
