import { NextPage } from "next";
import Layout from "../components/layouts/Layout";
import contents from "../contents/team";
import Section from "../components/objects/molecules/Section";
import Paragraph from "../components/objects/atoms/Paragraph";
import topContents from "../contents/top";

const Team: NextPage = () => {
  return (
    <Layout title={contents.title}>
      <div className="w-full h-20"></div>
      <Section
        id={topContents.team.id}
        title={topContents.team.title}
        className="flex flex-col gap-20"
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <img
            src="/images/ares_logo_white.png"
            alt="ARES"
            className="w-4/5 md:w-1/5"
          />
          <Paragraph className="md:w-3/5 md:text-center">
            {topContents.team.paragraph}
          </Paragraph>
        </div>
        {topContents.team.branches.map((branch, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0
                ? "flex-col md:flex-row"
                : "flex-col md:flex-row-reverse"
            } justify-center items-center gap-4 md:gap-[10%]`}
          >
            <img src={branch.imagePath} alt="" className="md:w-[45%]" />
            <div className="md:w-[45%]">
              <h4 className="text-2xl">{branch.title}</h4>
              <Paragraph>{branch.paragraph}</Paragraph>
            </div>
          </div>
        ))}
      </Section>
    </Layout>
  );
};

export default Team;
