import { NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

interface Props {
  title: string;
  children: ReactNode;
  allowTopSpace?: boolean;
  withSponsor?: boolean;
}

const Layout: NextPage<Props> = ({ title, children, allowTopSpace, withSponsor }) => {
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
      {allowTopSpace && <div className="h-16" />}
      <main>{children}</main>
      <Footer withSponsor={withSponsor} />
    </>
  );
};

const styles = {};

export default Layout;
