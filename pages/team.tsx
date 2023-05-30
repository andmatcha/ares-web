import { NextPage } from "next";

import Layout from "../components/layouts/Layout";
import FadeIn from "../components/objects/atoms/FadeIn";
import Paragraph from "../components/objects/atoms/Paragraph";
import Section from "../components/objects/molecules/Section";

const Team: NextPage = () => {
  const teamContents = {
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
    <Layout title="チーム紹介 - ARES Project" allowTopSpace>
      <div className="w-full relative">
        <img
          src="/images/leaders_wide.jpg"
          alt=""
          className="w-full object-cover opacity-40"
        />
        <div className="absolute top-0 left-0 w-full h-full md:px-40 flex justify-center md:justify-start items-center">
          <h2 className="text-4xl md:text-6xl tracking-widest">Our Team</h2>
        </div>
      </div>
      <Section id="team" className="flex flex-col gap-20 items-center">
        <div className="flex justify-center items-center gap-4">
          <div className="w-40">
            <img
              src="/images/ares_logo_white.png"
              alt="w-full object-contain"
            />
          </div>
          <h3 className="text-4xl tracking-widest">ARES Project</h3>
        </div>
        <div className="w-full flex">
          <div className="w-full">
            <ul className="w-full px-2 sm:px-10 md:px-[10%] flex flex-col gap-4">
              <li className="w-full flex justify-between px-4 pb-4 border-b">
                <h4 className="font-bold">所属人数</h4>
                <p>約30人</p>
              </li>
              <li className="w-full flex justify-between px-4 pb-4 border-b">
                <h4>拠点大学</h4>
                <p>東北大学・慶應義塾大学</p>
              </li>
            </ul>
          </div>
        </div>
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
          ROLE
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
