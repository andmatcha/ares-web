import { GetServerSidePropsContext, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";

import Layout from "../components/layouts/Layout";
import FadeIn from "../components/objects/atoms/FadeIn";
import Hero from "../components/objects/atoms/Hero";
import MemberIntro from "../components/objects/atoms/MemberIntro";
import Paragraph from "../components/objects/atoms/Paragraph";
import TeamCard from "../components/objects/atoms/TeamCard";
import Section from "../components/objects/molecules/Section";

export const getServerSideProps = async ({
  locale,
}: GetServerSidePropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "ja", ["common"])),
    },
  };
};

const Team: NextPage = () => {
  const { t } = useTranslation("common");

  const subTeams = [
    {
      name: t("team.subTeams.tohoku.name"),
      description: t("team.subTeams.tohoku.description"),
      imagePath: "/images/tohoku_members.jpg",
    },
    {
      name: t("team.subTeams.tokyo.name"),
      description: t("team.subTeams.tokyo.description"),
      imagePath: "/images/keio_members.jpg",
    },
    {
      name: t("team.subTeams.science.name"),
      description: t("team.subTeams.science.description"),
      imagePath: "/images/science_members.jpg",
    },
  ];

  const leaders = [
    {
      name: t("team.leaders.pm.name"),
      university: t("team.leaders.pm.university"),
      introduction: t("team.leaders.pm.introduction"),
      imagePath: "/images/members/danishi_ai.jpg",
      isLeader: true,
    },
    {
      name: t("team.leaders.tohoku_lead.name"),
      university: t("team.leaders.tohoku_lead.university"),
      introduction: t("team.leaders.tohoku_lead.introduction"),
      imagePath: "/images/members/kota_matsuhashi.jpg",
      isLeader: true,
    },
    {
      name: t("team.leaders.tokyo_lead.name"),
      university: t("team.leaders.tokyo_lead.university"),
      introduction: t("team.leaders.tokyo_lead.introduction"),
      imagePath: "/images/members/ryoji_nagahara.jpg",
      isLeader: true,
    },
  ];

  useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "https://platform.twitter.com/widgets.js");
    s.setAttribute("async", "true");
    document.head.appendChild(s);
  }, []);
  return (
    <Layout title="チーム紹介 - ARES Project" allowTopSpace>
      <Hero title="Our Team" imagePath="/images/tohoku_ares_wide.jpg" />
      {/* ARES全体紹介 */}
      <Section id="about" className="flex flex-col gap-10 items-center">
        <div className="flex -mb-8 md:mb-0 justify-center items-center gap-4">
          <div className="w-20 md:w-40">
            <img
              src="/images/ares_logo_white.png"
              alt=""
              className="w-full object-contain"
            />
          </div>
          <h3 className="text-2xl md:text-4xl tracking-widest">ARES Project</h3>
        </div>
        <div className="px-[10%] flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10">
          <div className="md:w-2/5 rounded-sm overflow-hidden">
            <img
              src="/images/ares_urc3.jpg"
              alt=""
              className="w-full object-contain"
            />
          </div>
          <Paragraph className="md:w-3/5">{t("team.about")}</Paragraph>
        </div>
      </Section>
      {/* 班紹介 */}
      <Section id="sub-teams" title={t("team.team_composition")}>
        <FadeIn className="flex flex-col justify-center items-center lg:items-start gap-10">
          {subTeams.map(({ name, description, imagePath }, index) => (
            <TeamCard key={index} title={name} imagePath={imagePath}>
              {description}
            </TeamCard>
          ))}
        </FadeIn>
      </Section>
      {/* リーダー紹介 */}
      <Section id="leaders" title={t("team.leaders.title")}>
        <ul className="flex flex-col gap-10 w-full items-center">
          {leaders.map((member, index) => (
            <FadeIn key={index}>
              <MemberIntro member={member} />
            </FadeIn>
          ))}
        </ul>
      </Section>
      {/* Twitter */}
      <Section id="contact" title="Follow Us!">
        <p className="text-center  text-sm md:text-base">
          ↓日々の活動の様子や最新情報を発信しています↓
        </p>
        <div className="max-w-4xl mx-auto mt-5">
          <a
            className="twitter-timeline"
            data-height="500"
            data-theme="dark"
            href="https://twitter.com/AresPjt2022?ref_src=twsrc%5Etfw"
          >
            Tweets by AresPjt2022
          </a>
        </div>
      </Section>
    </Layout>
  );
};

export default Team;
