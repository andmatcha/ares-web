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
import supporters from "../const/supporters";
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

  const { ref: fundingRef, inView: fundingInView } = useInView({
    rootMargin: "-10% 0%",
    triggerOnce: true,
  });
  return (
    <Layout title="資金調達">
      <Hero title="資金調達" imagePath="/images/rovers/ares4_wide.jpg" />
      <div
        className="w-full flex flex-col items-center px-4 py-4"
        ref={fundingRef}
      >
        <h3 className="w-full text-2xl py-2 font-sans lg:w-4/5">
          2022.11 − 2023.01 クラウドファンディング（CAMPFIRE）
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-4">
          <div className="w-2/3 md:w-2/5 lg:w-1/5">
            <img
              src="/images/campfire.png"
              alt=""
              className="w-full object-contain"
            />
          </div>
          <div className="w-full md:w-3/5 lg:w-2/5">
            <CrowdfundingCounter
              locale={locale ?? ""}
              inView={fundingInView}
              backers={37}
              raised={230500}
            />
            <CrowdFundingBackersList backers={supporters} />
            <div className="text-center md:text-left">
              <ExternalLink href={URL.campfire_project}>
                {t("funding.campfire")}
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Funding;
