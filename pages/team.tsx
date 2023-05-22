import { NextPage } from "next";
import Layout from "../components/layouts/Layout";
import contents from "../contents/team";
import Section from "../components/objects/molecules/Section";
import Paragraph from "../components/objects/atoms/Paragraph";
import topContents from "../contents/top";
import teamContents from "../contents/team";

const Team: NextPage = () => {
  return (
    <Layout title={topContents.title}>
      {/* <div className="w-full h-20"></div> */}
      <Section
        id={topContents.title}
        title={topContents.title}
        className="flex flex-col gap-20 items-center"
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <img
            src="/images/keio_members.jpg"
            alt="ARES"
            className="md:w-[45%]"
          />
          <Paragraph className="md:w-3/5 md:text-center">
            {topContents.team.paragraph}
          </Paragraph>
        </div>

        <p className="text-3xl font-bold text-center border-t w-full p-10">
          {topContents.team.title}
        </p>
        {topContents.team.branches.map((branch, index) => (
          <div key={index}>
            <p className="text-2xl font-bold">{branch.title}</p>
            <div className="flex md:flex-row justify-center items-center gap-4 md:gap-[10%] m-10">
              <img src={branch.imagePath} className="md:w-[45%]" alt="" />
              {branch.paragraph}
            </div>
          </div>
        ))}

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
