import { NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";

import Header from "../objects/molecules/Header";

interface Props {
  title: string;
  children: ReactNode;
  allowTopSpace?: boolean;
}

const Layout: NextPage<Props> = ({ title, children, allowTopSpace }) => {
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
      {allowTopSpace && <div className="h-20" />}
      <main>{children}</main>
    </>
  );
};

const styles = {};

export default Layout;
