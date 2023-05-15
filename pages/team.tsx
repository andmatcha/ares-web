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
           texttexttexttexttexttexttextt
           exttexttexttexttexttexttext
         </Paragraph>  
        </div> 
        <div className="flex flex-row justify-center">
        {teamContents.members.map((member, index) => (
           <div
            key={index}
            className={`flex ${
              index % 2 === 0
                ? "flex-col md:flex-row"
                : "flex-col md:flex-row-reverse"
            } justify-center items-center gap-4 md:gap-[10%]`}
          >
     
        {/* <img src={member.imagePath} alt="" /> */}
        <Paragraph><div >{member.name}</div></Paragraph>
        </div>
      ))}
      </div>
     </Section>

     </Layout>

  )
};

export default Team;
