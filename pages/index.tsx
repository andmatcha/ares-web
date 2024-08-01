import dayjs from "dayjs";
import type { NextPage } from "next";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useMemo } from "react";

import Layout from "../components/layouts/Layout";
import FadeIn from "../components/objects/atoms/FadeIn";
import Paragraph from "../components/objects/atoms/Paragraph";
import MainVisual from "../components/objects/organisms/MainVisual";
import { articles } from "../const/articles";
import { goals } from "../const/team";
import URL from "../const/url";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  const tile = (title: string, image: string, link: string) => {
    return (
      <Link href={link}>
        <div className="w-72 h-28 md:h-48 relative overflow-hidden rounded-md group hover:cursor-pointer">
          <img
            src={image}
            alt=""
            className="absolute w-full h-full object-cover opacity-60 transition-opacity group-hover:opacity-100"
          />
          <h3 className="absolute text-3xl font-display bottom-4 left-4">
            {title}
          </h3>
        </div>
      </Link>
    );
  };

  const sortArticlesDec = () => {
    return articles.sort((a, b) => {
      return dayjs(a.date).isAfter(b.date) ? -1 : 1;
    });
  };
  const sortedArticles = useMemo(() => sortArticlesDec(), []);

  useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "https://platform.twitter.com/widgets.js");
    s.setAttribute("async", "true");
    document.head.appendChild(s);
  }, []);
  return (
    <Layout title="ARES Project" withSponsor>
      <MainVisual />
      <section className="py-16 px-2 flex flex-col items-center gap-10 text-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8">
          {tile("TEAM", "/images/ares_urc2.jpg", URL.team)}
          {tile("ROVERS", "/images/rovers/ares4_wide.jpg", URL.rover)}
          {tile("FUNDING", "/images/tohoku_field.jpg", URL.funding)}
          {tile("CONTACT", "/images/ares_jacket.jpg", URL.contact)}
        </div>
      </section>
      <section className="flex flex-col lg:flex-row items-center lg:items-start py-8 px-4 md:px-16 gap-16">
        <div className="w-full lg:w-1/2">
          <h3 className="text-center text-3xl py-4 font-display">MOVIES</h3>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="relative aspect-[16/9] w-full">
              <iframe
                src="https://www.youtube.com/embed/l_ktA90qlF4?si=0C9CpjViTHNwmkAb"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
            <div className="relative aspect-[16/9] w-full">
              <iframe
                src="https://www.youtube.com/embed/wqzaqmNvUX4?si=LDszVIpLnRoM2ek8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-center text-3xl py-4 font-display">POSTS</h3>
          <div className="max-w-4xl mx-auto pb-4">
            <a
              className="twitter-timeline"
              data-height="960"
              data-theme="dark"
              href="https://twitter.com/AresPjt2022?ref_src=twsrc%5Etfw"
            >
              Posts by AresPjt2022
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
