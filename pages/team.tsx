import { NextPage } from "next";

import Layout from "../components/layouts/Layout";
import FadeIn from "../components/objects/atoms/FadeIn";
import Paragraph from "../components/objects/atoms/Paragraph";
import Section from "../components/objects/molecules/Section";

const Team: NextPage = () => {
const teamContents = {
  title: "ROLE",
  branches: [
    {
      title: "機構班",
      imagePath: "/images/keio_members.jpg",
      paragraph:
        "班の説明。班の説明。班の説明。班の説明。班の説明。班の説明。班の説明。班の説明。班の説明。班の説明。班の説明。班の説明。班の説明。班の説明。班の説明。",
      members: [
        {
          imagePath: "/images/arm1.png",
          name: "aaaさん",
        },
        {
          imagePath: "/images/arm2.png",
          name: "bbbさん",
        },
        {
          imagePath: "/images/arm3.png",
          name: "cccさん",
        },
        {
          imagePath: "/images/arm3.png",
          name: "dddさん",
        },
        {
          imagePath: "/images/arm3.png",
          name: "eeeさん",
        },
        {
          imagePath: "/images/arm3.png",
          name: "fffさん",
        },
        {
          imagePath: "/images/arm3.png",
          name: "gggさん",
        },
        {
          imagePath: "/images/arm3.png",
          name: "hhhさん",
        },
        {
          imagePath: "/images/arm3.png",
          name: "iiiさん",
        },
        {
          imagePath: "/images/arm3.png",
          name: "llllさん",
        },
      ],
    },
    {
      title: "制御班",
      imagePath: "/images/tohoku_members.jpg",
      paragraph:
        "制御します！！！！制御します！！！！制御します！！！！制御します！！！！制御します！！！！",
      members: [
        {
          imagePath: "/images/arm1.png",
          name: "aaaさん",
        },
        {
          imagePath: "/images/arm2.png",
          name: "bbbさん",
        },
        {
          imagePath: "/images/arm3.png",
          name: "cccさん",
        },
      ],
    },
  ],
};

  return (
    <Layout title="チーム紹介 - ARES Project">
      <Section
        id="team"
        title="ARES Project"
        className="flex flex-col gap-20 items-center"
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <img
            src="/images/keio_members.jpg"
            alt="ARES"
            className="md:w-[45%]"
          />
          <Paragraph className="md:w-3/5 md:text-center">
            火星探査機の学生世界大会 “University Rover Challenge (URC)”
            へ、日本チームとして初の出場を目指す学生団体プロジェクトです。東北大学・慶應義塾大学を主な拠点として活動しています。
          </Paragraph>
        </div>

        <p className="text-3xl font-bold text-center border-t w-full p-10">
          TEAM
        </p>
        <FadeIn
          options={{ rootMargin: "-20% 0px" }}
          className={`flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[10%]`}
        >
          <img src="/images/keio_members.jpg" alt="" className="md:w-[45%]" />
          <div className="md:w-[45%]">
            <h4 className="text-2xl">東京班</h4>
            <Paragraph>
              東京班は主にアームの設計を行っています。この大会では宇宙飛行士のサポートを前提としたミッションや岩を移動させるミッションがあるためアームは重要な役割を果たします。
            </Paragraph>
          </div>
        </FadeIn>
        <FadeIn
          className={`flex flex-col md:flex-row-reverse justify-center items-center gap-4 md:gap-[10%]`}
        >
          <img src="/images/tohoku_members.jpg" alt="" className="md:w-[45%]" />
          <div className="md:w-[45%]">
            <h4 className="text-2xl">東北班</h4>
            <Paragraph>
              東北班は機体の設計、開発を行っています。整備されていない地形でミッションを進めることができるようにそれぞれの得意分野を活かして開発しています。
            </Paragraph>
          </div>
        </FadeIn>

        <p className="text-3xl font-bold text-center border-t w-full p-10">
          {teamContents.title}
        </p>
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
      </Section>
    </Layout>
  );
};

export default Team;
