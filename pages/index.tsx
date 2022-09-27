import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { css } from "@emotion/react";

const Home: NextPage = () => {
  return (
    <div css={styles.container}>
      <Head>
        <title>Sample Page</title>
        <meta name="description" content="This is a sample page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 css={styles.title}>Sample Page</h1>
        <Image src="/cat.jpg" alt="" width={640} height={360} objectFit="cover" />
        <p>This is a sample page.</p>
      </main>
    </div>
  );
};

const styles = {
  container: css`
    margin: 16px;
  `,
  title: css`
    font-size: 36px;
    color: #c7dc68;
    letter-spacing: 1.6px;
  `,
};

export default Home;
