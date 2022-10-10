import type { NextPage } from "next";
import { css } from "@emotion/react";
import Layout from "../components/layouts/Layout";
import MainVisual from "../components/objects/organisms/MainVisual";
import Section from "../components/objects/molecules/Section";
import MainButton from "../components/objects/atoms/MainButton";

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
        <Section title="ROVERS"><MainButton text="SEE OUR ROVERS" /></Section>
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
