"use client";
import { useTranslations } from "next-intl";

import URL from "../../../const/url";
import ExternalLink from "../atoms/ExternalLink";

const HyakuBanch = () => {
  const t = useTranslations("common");
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 bg-black px-8 py-10">
      <a href={URL.hyaku_banch} target="blank">
        <img
          src="/images/brand_marks/100banch.png"
          alt="100BANCH"
          className="hidden md:block w-56"
        />
        <img
          src="/images/brand_marks/100banch_wide.png"
          alt="100BANCH"
          className="block md:hidden w-48"
        />
      </a>
      <p className="text-sm md:text-base text-center md:text-start">
        {t("100banch.title")}
        <br />
        <ExternalLink href={URL.hyaku_banch_project}>
          {t("100banch.website")}
        </ExternalLink>
      </p>
    </div>
  );
};

export default HyakuBanch;
