import { NextPage } from "next";
import Layout from "../components/layouts/Layout";
import contents from "../contents/team";
import Section from "../components/objects/molecules/Section";
import Paragraph from "../components/objects/atoms/Paragraph";
import topContents from "../contents/top";
import teamContents from "../contents/team";

const Team: NextPage = () => {
  return (
    <Layout title={contents.title}>
      <div className="w-full h-20"></div>
      <Section
        id={teamContents.title}
        title={teamContents.title}
        className="flex flex-col gap-20"
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <img
            src="/images/keio_members.jpg"
            alt="ARES"
            className="w-1/6 md:w-3/5"
          />
          <Paragraph className="md:w-3/5 md:text-center">
            {/* {topContents.team.paragraph} */}
            texttexttexttexttexttexttextt exttexttexttexttexttexttext
          </Paragraph>
        </div>
        {teamContents.branches.map((branch, index) => (
          <div key={index}>
            {branch.title}
            <div className="flex justify-center gap-20">
              {branch.members.map((member, memberIndex) => (
                <div
                  key={memberIndex}
                  className={`flex justify-center items-center gap-4 md:gap-[10%]`}
                >
                  <div>
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
