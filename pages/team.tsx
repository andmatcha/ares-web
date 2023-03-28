import { NextPage } from "next";

import Layout from "../components/layouts/Layout";
import Paragraph from "../components/objects/atoms/Paragraph";
import Card from "../components/objects/molecules/Card";
import contents from "../contents/team";
import topContents from "../contents/top";

const Team: NextPage = () => {
  return (
    <Layout title={contents.title} needTopSpace>
      <h2 className=" text-3xl">OUR TEAM</h2>
      <div>
        <h3>東北班</h3>
        <div>
          <img src="" alt="東北班の写真" />
          <p>東北班の説明</p>
        </div>
        <div>
          <Card
            id="mechanical-div"
            title="機構班"
            imagePath="/images/keio_members.jpg"
          >
            aaaafeafefafaefa
          </Card>
          <div>
            <h4>機構班</h4>
          </div>
          <div>
            <h4>電装班</h4>
          </div>
          <div>
            <h4>制御班</h4>
          </div>
        </div>
        <h3>東京班</h3>
        <div>
          <img src="" alt="東京班の写真" />
          <p>東京班の説明</p>
        </div>
        <div>
          <div>
            <h4>機構班</h4>
          </div>
          <div>
            <h4>電装班</h4>
          </div>
          <div>
            <h4>制御班</h4>
          </div>
          <div>
            <h4>bio班</h4>
          </div>
          <div>
            <h4>広報班</h4>
          </div>
        </div>
      </div>
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
      <div></div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[10%]">
        <img src="" alt="" className="md:w-[45%]" />
        <div className="md:w-[45%]">
          <h4 className="text-2xl">bbbb</h4>
          <Paragraph>aaaa</Paragraph>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
