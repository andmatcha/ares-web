import type { NextPage } from "next";
import { css } from "@emotion/react";
import Layout from "../components/layouts/Layout";
import MainVisual from "../components/objects/MainVisual";
import Section from "../components/objects/common/Section";

const Home: NextPage = () => {
  return (
    <Layout title="ARES Project">
      <div css={styles.container}>
        <MainVisual></MainVisual>
        <Section title="NEWS">
          This is a test.This is a test.This is a test. This is a test. This is
          a test. This is a test. This is a test. This is a test. This is a
          test. This is a test. This is a test. This is a test. This is a test.
          This is a test. This is a test. This is a test. This is a test.
        </Section>
      </div>
    </Layout>
  );
};

const styles = {
  container: css`
  `,
  title: css`
    font-size: 36px;
    color: #c7dc68;
    letter-spacing: 1.6px;
  `,
};

export default Home;
