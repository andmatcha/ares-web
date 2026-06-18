"use client";

import { useTranslations } from "next-intl";

import Hero from "@/components/objects/atoms/Hero";
import LeaderSection from "@/components/objects/organisms/team/LeaderSection";
import TeamAboutSection from "@/components/objects/organisms/team/TeamAboutSection";
import TeamCompositionSection from "@/components/objects/organisms/team/TeamCompositionSection";
import TeamGoalSection from "@/components/objects/organisms/team/TeamGoalSection";
import UrcSection from "@/components/objects/organisms/team/UrcSection";
import { goals } from "@/const/team";
import { Member, SubTeam } from "@/types/index";

const subTeamDefinitions = [
  { key: "tohoku", imagePath: "/images/tohoku_members.jpg" },
  { key: "tokyo", imagePath: "/images/keio_members.jpg" },
  { key: "science", imagePath: "/images/science_members.jpg" },
] as const;

const leaderDefinitions = [
  { key: "pm", imagePath: "/images/members/danishi_ai.jpg" },
  { key: "tohoku_lead", imagePath: "/images/members/kota_matsuhashi.jpg" },
  { key: "tokyo_lead", imagePath: "/images/members/ryoji_nagahara.jpg" },
] as const;

export default function TeamPage() {
  const t = useTranslations();
  const subTeams: SubTeam[] = subTeamDefinitions.map(({ key, imagePath }) => ({
    name: t(`team.subTeams.${key}.name`),
    description: t(`team.subTeams.${key}.description`),
    imagePath,
  }));
  const leaders: Member[] = leaderDefinitions.map(({ key, imagePath }) => ({
    name: t(`team.leaders.${key}.name`),
    university: t(`team.leaders.${key}.university`),
    introduction: t(`team.leaders.${key}.introduction`),
    imagePath,
    isLeader: true,
  }));
  const goalDescriptions = goals.map((_, index) =>
    t(`home.goal.goals.${index}`)
  );

  return (
    <>
      <Hero title="Our Team" imagePath="/images/tohoku_ares_wide.jpg" />
      <TeamAboutSection description={t("team.about")} />
      <TeamGoalSection
        title={t("home.goal.title")}
        descriptions={goalDescriptions}
      />
      <UrcSection
        title={t("home.urc.title")}
        description={t("home.urc.description")}
        linkLabel={t("home.urc.website")}
      />
      <TeamCompositionSection
        title={t("team.team_composition")}
        subTeams={subTeams}
      />
      <LeaderSection title={t("team.leaders.title")} leaders={leaders} />
    </>
  );
}
