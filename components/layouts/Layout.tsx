import { NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";

import Header from "../objects/molecules/Header";

interface Props {
  title: string;
  children: ReactNode;
}

const Layout: NextPage<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="URC日本初出場をめざす学生団体ARES オフィシャルウェブサイト"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

const styles = {};

export default Layout;
