import { NextPage } from "next";

import Layout from "../components/layouts/Layout";
import FadeIn from "../components/objects/atoms/FadeIn";
import ListItem from "../components/objects/atoms/ListItem";
import MemberIntro from "../components/objects/atoms/MemberIntro";
import Paragraph from "../components/objects/atoms/Paragraph";
import Section from "../components/objects/molecules/Section";
import SponsorArea from "../components/objects/molecules/SponsorArea";
import { branches, infoSets, members, teamContents } from "../const/team";

const Team: NextPage = () => {
  return (
    <Layout title="チーム紹介 - ARES Project" allowTopSpace>
      <div className="w-full relative">
        <img
          src="/images/leaders_wide.jpg"
          alt=""
          className="w-full object-cover opacity-40"
        />
        <div className="absolute top-0 left-0 w-full h-full md:px-40 flex justify-center md:justify-start items-center">
          <h2 className="text-xl md:text-6xl tracking-widest">Our Team</h2>
        </div>
      </div>
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
        <div className="px-[10%] flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="md:w-2/5">
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
            <ul className="w-full flex flex-col gap-4">
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
      <Section id="leaders" title="Leaders">
        <ul className="flex flex-col gap-10 w-full items-center">
          {members.map((member, index) => (
            <MemberIntro key={index} member={member} />
          ))}
        </ul>
      </Section>
      <Section id="branches" title="Branches">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10">
          {branches.map(({ name, description, imagePath }, index) => (
            <div
              key={index}
              className="w-full lg:w-1/2 flex flex-wrap justify-center items-center gap-2 lg:gap-4 px-2"
            >
              <div>
                <h4 className="text-xl lg:text-2xl pb-2">{name}</h4>
                <Paragraph className="lg:h-32">{description}</Paragraph>
              </div>
              <div className="w-full px-10">
                <img src={imagePath} alt="" className="w-full object-contain" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 班紹介 一旦スコープアウト */}
      {/* <Section id="sub-teams" title="Sub-Teams">
        {teamContents.branches.map((branch, index) => (
          <div key={index}>
            <p className="text-2xl font-bold ">{branch.title}</p>
            <div className="flex justify-center gap-20 m-10">
              <img src={branch.imagePath} className="md:w-[45%]" alt="" />
              {branch.paragraph}
            </div>
            <p>メンバー紹介</p>
            <div className="grid grid-cols-4 gap-20 m-10">
              {branch.members.map((member, memberIndex) => (
                <div
                  key={memberIndex}
                  className={`flex justify-center items-center `}
                >
                  <div key={index}>
                    <img src={member.imagePath} alt="" />
                    <div className="text-center">{member.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Section> */}

      <SponsorArea />
    </Layout>
  );
};

export default Team;
