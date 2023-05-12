import { NextPage } from "next";
import Layout from "../components/layouts/Layout";

const Team: NextPage = () => {
  return (
    <Layout title="Our Rover">
      <div className="w-full h-20"></div>
      <div className="px-40">
        <div>
          <h1 className="border-b text-5xl pb-4">Our Rovers</h1>
        </div>
        <div>
          <ul className="flex gap-4 py-8">
            <li className="flex flex-col gap-2 justify-center items-center opacity-60">
              <div className="rounded-full overflow-hidden w-24 h-24 border-2">
                <img
                  src="/images/ares1.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm">ARES 1</p>
            </li>
            <li className="flex flex-col gap-2 justify-center items-center opacity-60">
              <div className="rounded-full overflow-hidden w-24 h-24 border-2">
                <img
                  src="/images/ares2.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm">ARES 2</p>
            </li>
            <li className="flex flex-col gap-2 justify-center items-center opacity-60">
              <div className="rounded-full overflow-hidden w-24 h-24 border-2">
                <img
                  src="/images/ares3.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm">ARES 3</p>
            </li>
            <li className="flex flex-col gap-2 justify-center items-center">
              <div className="rounded-full overflow-hidden w-24 h-24 border-2">
                <img
                  src="/images/ares4.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm">ARES 4</p>
            </li>
          </ul>
        </div>
        <div className="flex gap-5">
          <div className="w-3/5">
            <img
              src="/images/ares4.png"
              alt="ARES 3"
              className="w-full object-contain"
            />
          </div>
          <div className="py-4 flex flex-col gap-8">
            <h2 className="text-5xl">ARES 4</h2>
            <ul className="flex flex-col items-start gap-4">
              <li className="flex items-baseline gap-4">
                <div className="text-sm">制作年:</div>
                <div className="text-lg">2023</div>
              </li>
              <li className="flex items-baseline gap-4">
                <div className="text-sm">制作期間:</div>
                <div className="text-lg">99日</div>
              </li>
              <li className="flex items-baseline gap-4">
                <div className="text-sm">制作費:</div>
                <div className="text-xl">¥99,999</div>
              </li>
              <li className="flex flex-col gap-4">
                <div className="flex h-7 items-end">
                  <div className="text-sm">特徴:</div>
                </div>
                <div className="text-base pl-4">
                  <ul className="flex flex-col gap-4 list-disc">
                    <li>
                      Modular Interchangeable payloads for specialised rover
                    </li>
                    <li>
                      configurations Six wheel double bogie suspension system
                    </li>
                    <li>
                      Board-to-board connectors via a custom backplane board 6
                    </li>
                    <li>
                      Degree of Freedom Robotic Arm Two finger parallel end
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
