"use client";

import { useLocale, useTranslations } from "next-intl";

import Hero from "@/components/objects/atoms/Hero";
import CrowdfundingProject from "@/components/objects/molecules/CrowdfundingProject";
import {
  campfireBackers,
  readyforBackers,
  readyforBackersImage,
} from "@/const/backers";
import URL from "@/const/url";

export default function FundingPage() {
  const t = useTranslations();
  const locale = useLocale();

  const projects = [
    {
      title: "2022.11 − 2023.01 クラウドファンディング（CAMPFIRE）",
      imagePath: "/images/campfire.png",
      projectUrl: URL.campfire_project,
      projectLabel: t("funding.campfire"),
      backersCount: 37,
      raisedAmount: 230500,
      backers: campfireBackers,
    },
    {
      title: "2024.04 − 2024.06 クラウドファンディング（READYFOR）",
      imagePath: "/images/readyfor.jpg",
      projectUrl: URL.readyfor_project,
      projectLabel: t("funding.readyfor"),
      backersCount: 105,
      raisedAmount: 1877000,
      backers: readyforBackers,
      backerImages: readyforBackersImage,
    },
  ];

  return (
    <>
      <Hero title="FUNDING" imagePath="/images/rovers/ares4_wide.jpg" />
      {projects.map((project) => (
        <CrowdfundingProject
          key={project.title}
          locale={locale ?? "en"}
          {...project}
        />
      ))}
    </>
  );
}
