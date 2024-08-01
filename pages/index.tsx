import dayjs from "dayjs";
import type { NextPage } from "next";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useMemo } from "react";

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
  return (
    <Layout title="ARES Project" withSponsor>
      <MainVisual />
      {/* <section className="py-10 md:py-20 px-2 md:px-[10%] flex flex-col items-center gap-10 text-lg">
        <FadeIn
          options={{ triggerOnce: true }}
          className="flex gap-8 justify-center items-center pb-4 px-4"
        >
          <h3 className="text-4xl md:text-6xl leading-relaxed md:leading-relaxed tracking-wider font-normal">
            {t("home.whats")}
            {locale === "ja" ? "" : <br />}
            ARES
            <br />
            Project
            <br />
            {t("home.question")}
          </h3>
          <div className="w-3/5 flex flex-col gap-8">
            <Paragraph>{t("home.description")}</Paragraph>
            <div
              ref={teamRef}
              className="flex justify-center items-center gap-4 md:gap-10"
            >
              <div className="flex flex-col justify-center items-end md:items-center gap-2 font-display">
                <div className="text-4xl md:text-6xl flex items-center justify-center">
                  <div className="w-16 md:w-28 flex justify-center">
                    <CountUp active={teamInView} from={0} to={40} time={1200} />
                  </div>
                </div>
                <span className="text-sm">members</span>
              </div>
              <div className="flex flex-col justify-center items-end md:items-center gap-2 font-display">
                <div className="text-4xl md:text-6xl flex items-center justify-center">
                  <div className="w-16 md:w-28 flex justify-center">
                    <CountUp active={teamInView} from={0} to={60} time={1600} />
                  </div>
                  +
                </div>
                <span className="text-sm">backers</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </section> */}
      <section className="py-8 px-2 flex flex-col items-center gap-10 text-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8">
          {tile("TEAM", "/images/ares_urc2.jpg", URL.team)}
          {tile("ROVERS", "/images/rovers/ares4_wide.jpg", URL.rover)}
          {tile("FUNDING", "/images/tohoku_field.jpg", URL.funding)}
          {tile("CONTACT", "/images/ares_jacket.jpg", URL.contact)}
        </div>
      </section>
      <section className="">
        <h3 className="text-center text-3xl py-4 font-display">MOVIES</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-16">
          <div className="relative aspect-[16/9] w-full md:w-1/2">
            <iframe
              src="https://www.youtube.com/embed/l_ktA90qlF4?si=0C9CpjViTHNwmkAb"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
          <div className="relative aspect-[16/9] w-full md:w-1/2">
            <iframe
              src="https://www.youtube.com/embed/wqzaqmNvUX4?si=LDszVIpLnRoM2ek8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
      {/* <div className="w-screen overflow-hidden">
        <img
          src="/images/rovers/ares4_wide.jpg"
          alt="ARES4"
          className="w-full object-cover"
        />
      </div> */}
      <FadeIn
        as="section"
        className="py-10 md:py-20 px-2 md:px-[10%] flex flex-col items-center gap-4 md:gap-10 text-lg"
      >
        <h3 className="text-3xl md:text-5xl font-medium tracking-wider pb-2">
          {t("home.goal.title")}
        </h3>
        <div>
          <ol className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            {goals.map(({ title, icon }, index) => (
              <FadeIn
                as="li"
                options={{ delay: 150 * index }}
                key={index}
                className="flex flex-row lg:flex-col justify-center lg:justify-start items-center gap-4 lg:w-1/5"
              >
                <div className="w-12 lg:w-1/3">
                  <img src={icon} alt="" className="w-full" />
                </div>
                <Paragraph className="w-5/6 lg:w-full lg:text-center">
                  {t(`home.goal.goals.${index}`)}
                </Paragraph>
              </FadeIn>
            ))}
          </ol>
        </div>
      </FadeIn>
      <div className="block md:hidden w-screen h-24 overflow-hidden mt-4">
        <img src="/images/mars1.png" alt="" className="w-screen" />
      </div>
      <FadeIn
        as="section"
        className="py-5 md:py-10 px-2 md:px-[10%] flex flex-col items-center gap-10 text-lg"
      >
        <div className="flex gap-4 md:gap-10 flex-col items-center md:flex-row">
          <img
            src="/images/mars1.png"
            alt=""
            className="hidden md:block md:w-[48%]"
          />
          <div className="md:w-[48%] px-4">
            <h3 className="text-2xl md:text-3xl font-medium tracking-wider pb-2">
              {t("home.urc.title")}
            </h3>
            <Paragraph>{t("home.urc.description")}</Paragraph>
            <a
              href={URL.urc_official}
              target="blank"
              className="w-full text-left text-xs text-ares-red"
            >
              {t("home.urc.website")}
            </a>
          </div>
        </div>
      </FadeIn>
    </Layout>
  );
};

export default Home;
