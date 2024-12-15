import { GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useInView } from "react-intersection-observer";

import Layout from "../components/layouts/Layout";
import ExternalLink from "../components/objects/atoms/ExternalLink";
import Hero from "../components/objects/atoms/Hero";
import CrowdFundingBackersList from "../components/objects/molecules/CrowdfundingBackersList";
import CrowdfundingCounter from "../components/objects/molecules/CrowdfundingCounter";
import {
  campfireBackers,
  readyforBackers,
  readyforBackersImage,
} from "../const/backers";
import URL from "../const/url";

export const getServerSideProps = async ({
  locale,
}: GetServerSidePropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};

const Funding: NextPage = () => {
  const { t } = useTranslation("common");
  const { locale } = useRouter();

  const { ref: campfireRef, inView: campfireInView } = useInView({
    rootMargin: "-10% 0%",
    triggerOnce: true,
  });
  const { ref: readyforRef, inView: readyforInView } = useInView({
    rootMargin: "-10% 0%",
    triggerOnce: true,
  });
  return (
    <Layout title="FUNDING" allowTopSpace>
      <Hero title="FUNDING" imagePath="/images/rovers/ares4_wide.jpg" />
      {/* CAMPFIRE */}
      <div
        className="w-full flex flex-col items-center px-4 py-4"
        ref={campfireRef}
      >
        <h3 className="w-full text-xl md:text-2xl py-2 lg:w-4/5">
          2022.11 − 2023.01 クラウドファンディング（CAMPFIRE）
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-4">
          <div className="w-2/3 md:w-2/5 lg:w-1/5">
            <img
              src="/images/campfire.png"
              alt=""
              className="w-full object-contain"
            />
            <ExternalLink href={URL.campfire_project}>
              {t("funding.campfire")}
            </ExternalLink>
          </div>
          <div className="w-full md:w-3/5 lg:w-3/5">
            <CrowdfundingCounter
              locale={locale ?? ""}
              inView={campfireInView}
              backers={37}
              raised={230500}
            />
            <CrowdFundingBackersList backers={campfireBackers} />
          </div>
        </div>
      </div>
      {/* READYFOR */}
      <div
        className="w-full flex flex-col items-center px-4 py-4"
        ref={readyforRef}
      >
        <h3 className="w-full text-xl md:text-2xl py-2 lg:w-4/5">
          2024.04 − 2024.06 クラウドファンディング（READYFOR）
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-4">
          <div className="w-2/3 md:w-2/5 lg:w-1/5">
            <img
              src="/images/readyfor.jpg"
              alt=""
              className="w-full object-contain"
            />
            <ExternalLink href={URL.readyfor_project}>
              {t("funding.readyfor")}
            </ExternalLink>
          </div>
          <div className="w-full md:w-3/5 lg:w-3/5">
            <CrowdfundingCounter
              locale={locale ?? ""}
              inView={readyforInView}
              backers={105}
              raised={1877000}
            />
            <CrowdFundingBackersList backers={readyforBackers} />
            <div className="flex gap-4 py-2 flex-wrap justify-center">
              {readyforBackersImage.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="w-48 h-24 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Funding;
