import type { NextPage } from "next";
import Layout from "../components/layouts/Layout";
import MainVisual from "../components/objects/organisms/MainVisual";
import Section from "../components/objects/molecules/Section";
import MainButton from "../components/objects/atoms/MainButton";
import NewsRow from "../components/objects/molecules/NewsRow";
import Paragraph from "../components/objects/atoms/Paragraph";
import dayjs from "dayjs";
import contents from "../contents/top";
import newsContents from "../contents/news";

const Home: NextPage = () => {
  return (
    <Layout title={contents.title}>
      <MainVisual />
      <Section
        id={contents.team.id}
        title={contents.team.title}
        className="flex flex-col gap-20"
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <img
            src={contents.team.aresLogo.imagePath}
            alt={contents.team.aresLogo.label}
            className="w-4/5 md:w-1/5"
          />
          <Paragraph className="md:w-3/5 md:text-center">
            {contents.team.paragraph}
          </Paragraph>
        </div>
        {contents.team.branches.map((branch, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0
                ? "flex-col md:flex-row"
                : "flex-col-reverse md:flex-row-reverse"
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
      <Section id={contents.urc.id} title={contents.urc.title}>
        <div className="flex gap-4 md:gap-[4%] flex-col items-center md:flex-row">
          <img src={contents.urc.imagePath} alt="" className="md:w-[48%]" />
          <Paragraph className="md:w-[48%]">
            {contents.urc.paragraph}
            <br />
            <a
              href={contents.urc.urcOfficial.url}
              className="w-full text-left text-xs text-ares-red"
            >
              {contents.urc.urcOfficial.label}
            </a>
          </Paragraph>
        </div>
      </Section>
      <Section id={contents.rovers.id} title={contents.rovers.title}>
        <div className="flex flex-col items-center gap-8">
          <video
            src={contents.rovers.videoPath}
            autoPlay={true}
            muted={true}
            loop={true}
          ></video>
          <MainButton label={contents.rovers.button.label} />
        </div>
      </Section>
      <Section
        id="members"
        title="MEMBERS"
        className="flex flex-col md:flex-row justify-center items-center gap-4"
      >
        <div className="flex md:flex-col justify-center items-center gap-2">
          <div className="w-1/4 md:w-1/5 rounded-full overflow-hidden">
            <img src="/images/members/ryoji.png" alt="" />
          </div>
          <div className="flex flex-col md:items-center gap-1 tracking-wide">
            <h5 className="text-sm md:text-base flex items-baseline gap-2">
              Ryoji Nagahara
            </h5>
            <p className="text-xs">慶應義塾大学理工学部</p>
            <p className="text-xs mt-1">
              天才エンジニア。なんでも3Dプリンターで印刷する。
            </p>
          </div>
        </div>
      </Section>
      <Section
        id={contents.news.id}
        title={contents.news.title}
        className="flex flex-col items-center"
      >
        {newsContents.map((newsContent, index) => (
          <NewsRow
            key={index}
            date={dayjs(newsContent.date)}
            tag={newsContent.tag}
            title={newsContent.title}
          />
        ))}
      </Section>
      <footer className="w-full bg-black flex flex-col items-center py-10">
        <h3 className="text-sm font-light">{contents.sponsor.title}</h3>
        <div className="flex justify-center">
          {contents.sponsor.sponsors.map((sponsor, index) => (
            <img
              key={index}
              src={sponsor.imagePath}
              alt={sponsor.name}
              className="max-w-sm"
            />
          ))}
        </div>
      </footer>
      <Section id={contents.contact.id} title={contents.contact.title}>
        <p className="flex justify-center">Email</p>
      </Section>
    </Layout>
  );
};

export default Home;
