import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { ReactNode } from "react";

import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

interface Props {
  title: string;
  children: ReactNode;
  allowTopSpace?: boolean;
  withSponsor?: boolean;
}

const Layout: NextPage<Props> = ({
  title,
  children,
  allowTopSpace,
  withSponsor,
}) => {
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={locale ==="ja" ? "University Rover Challenge (URC)優勝を目指す学生プロジェクト。URC2024年大会に日本初出場。" : "A student project aiming to win the University Rover Challenge (URC)."}
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
