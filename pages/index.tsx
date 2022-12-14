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
          <img
            src={contents.rovers.imagePath}
            alt=""
            className="w-full max-w-xs md:max-w-lg"
          />
          <MainButton label={contents.rovers.button.label} />
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
              className="w-full md:max-w-sm"
            />
          ))}
        </div>
      </footer>
      <Section id={contents.contact.id} title={contents.contact.title}>
        <p className="text-center">{contents.contact.paragraph}</p>
        <div className="max-w-2xl mx-auto mt-5">
          <a
            className="twitter-timeline"
            data-height="1500"
            data-theme="dark"
            href="https://twitter.com/AresPjt2022?ref_src=twsrc%5Etfw"
          >
            Tweets by AresPjt2022
          </a>
          <script async src="https://platform.twitter.com/widgets.js"></script>
        </div>
      </Section>
    </Layout>
  );
};

export default Home;
