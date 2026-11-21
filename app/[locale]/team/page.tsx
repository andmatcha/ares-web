"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import ExternalLink from "@/components/objects/atoms/ExternalLink";
import FadeIn from "@/components/objects/atoms/FadeIn";
import Hero from "@/components/objects/atoms/Hero";
import MemberIntro from "@/components/objects/atoms/MemberIntro";
import Paragraph from "@/components/objects/atoms/Paragraph";
import TeamCard from "@/components/objects/atoms/TeamCard";
import Section from "@/components/objects/molecules/Section";
import { goals } from "@/const/team";
import URL from "@/const/url";

type SubTeam = {
  name: string;
  description: string;
  imagePath: string;
};

const memberSections = [
  {
    id: "leaders",
    members: [
      { id: "seiya", imagePath: "/images/members/seiya_nishimura.jpg" },
      { id: "shinnosuke", imagePath: "/images/members/shinnosuke_kumagai.jpg" },
    ],
  },
  {
    id: "founders",
    members: [
      { id: "danishi", imagePath: "/images/members/danishi_ai.jpg" },
      { id: "ryoji", imagePath: "/images/members/ryoji_nagahara.jpg" },
      { id: "nagaoka", imagePath: "/images/members/keita_nagaoka.jpg" },
      { id: "matsuhashi", imagePath: "/images/members/kota_matsuhashi.jpg" },
    ],
  },
] as const;

export default function TeamPage() {
  const t = useTranslations();
  const locale = useLocale();
  const [subTeams, setSubTeams] = useState<SubTeam[]>([]);

  useEffect(() => {
    setSubTeams([
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
    ]);
  }, [t, locale]);

  return (
    <>
      <Hero title="Our Team" imagePath="/images/tohoku_ares_wide.jpg" />
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
      <Section id="goal" title={t("home.goal.title")}>
        <FadeIn
          as="section"
          className="px-2 md:px-[6%] flex flex-col items-center gap-4 md:gap-10 text-lg"
        >
          <div>
            <ol className="flex flex-col lg:flex-row gap-4 lg:gap-8">
              {goals.map(({ icon }, index) => (
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
      </Section>
      <FadeIn
        as="section"
        className="py-5 md:py-10 px-2 md:px-[12%] flex flex-col items-center gap-10 text-lg"
      >
        <div className="flex gap-4 md:gap-10 flex-col items-center lg:flex-row">
          <img src="/images/mars1.png" alt="" className="w-2/3 lg:w-[48%]" />
          <div className="w-full lg:w-[48%] px-4">
            <h3 className="text-2xl md:text-3xl font-medium tracking-wider pb-2 text-center lg:text-left">
              {t("home.urc.title")}
            </h3>
            <Paragraph>{t("home.urc.description")}</Paragraph>
            <ExternalLink href={URL.urc_official}>
              {t("home.urc.website")}
            </ExternalLink>
          </div>
        </div>
      </FadeIn>
      <Section id="sub-teams" title={t("team.team_composition")}>
        <FadeIn className="flex flex-col justify-center items-center lg:items-start gap-10">
          {subTeams.map(({ name, description, imagePath }, index) => (
            <TeamCard key={index} title={name} imagePath={imagePath}>
              {description}
            </TeamCard>
          ))}
        </FadeIn>
      </Section>
      {memberSections.map(({ id, members }) => (
        <Section key={id} id={id} title={t(`team.${id}.title`)}>
          <ul className="mx-auto flex w-full max-w-6xl flex-col gap-10">
            {members.map(({ id: memberId, imagePath }) => {
              const profile = `team.${id}.${memberId}`;

              return (
                <MemberIntro
                  key={memberId}
                  member={{
                    name: t(`${profile}.name`),
                    university: t(`${profile}.university`),
                    introduction: t(`${profile}.introduction`),
                    imagePath,
                  }}
                />
              );
            })}
          </ul>
        </Section>
      ))}
    </>
  );
}
