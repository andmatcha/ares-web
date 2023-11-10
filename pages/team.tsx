import { NextPage } from "next";
import { useEffect, useMemo } from "react";

import Layout from "../components/layouts/Layout";
import FadeIn from "../components/objects/atoms/FadeIn";
import Hero from "../components/objects/atoms/Hero";
import ListItem from "../components/objects/atoms/ListItem";
import MemberIntro from "../components/objects/atoms/MemberIntro";
import Paragraph from "../components/objects/atoms/Paragraph";
import TeamCard from "../components/objects/atoms/TeamCard";
import Section from "../components/objects/molecules/Section";
import { branches, infoSets, members, subTeams } from "../const/team";

const Team: NextPage = () => {
  const leaders = useMemo(() => {
    return members.filter((member) => member.isLeader);
  }, []);

  useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "https://platform.twitter.com/widgets.js");
    s.setAttribute("async", "true");
    document.head.appendChild(s);
  }, []);
  return (
    <Layout title="チーム紹介 - ARES Project" allowTopSpace>
      <Hero title="Our Team" imagePath="/images/leaders_wide.jpg" />
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
              src="/images/group_photo1.png"
              alt=""
              className="w-full object-contain"
            />
          </div>
          <Paragraph className="md:w-3/5">
            火星探査機の学生世界大会 “University Rover Challenge (URC)” および
            “European Rover Challenge (ERC)”
            へ、日本チームとして初の出場を目指す学生団体プロジェクトです。東北大学・慶應義塾大学を主な拠点として活動しています。
          </Paragraph>
        </div>
        <div className="w-full flex">
          <div className="w-full px-2 sm:px-10 md:px-[10%]">
            <h4 className="md:text-xl pb-4">基本情報</h4>
            <ul className="w-full flex flex-col">
              {infoSets.map((infoSet, index) => (
                <ListItem
                  key={index}
                  title={infoSet.title}
                  description={infoSet.description}
                />
              ))}
            </ul>
          </div>
        </div>
      </Section>
      {/* 支部紹介 */}
      <Section id="branches" title="Branches">
        <FadeIn className="flex flex-col justify-center items-center lg:items-start gap-10">
          {branches.map(({ name, description, imagePath }, index) => (
            <TeamCard key={index} title={name} imagePath={imagePath}>
              {description}
            </TeamCard>
          ))}
        </FadeIn>
      </Section>
      {/* 班紹介 */}
      {/* <Section id="sub-teams" title="Sub-Teams">
        <FadeIn className="flex flex-col justify-center items-center gap-6">
          {subTeams.map(({ name, description, imagePath }, index) => (
            <TeamCard key={index} title={name} imagePath={imagePath}>
              {description}
            </TeamCard>
          ))}
        </FadeIn>
      </Section> */}
      {/* 幹部紹介 */}
      <Section id="leaders" title="Leaders">
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
