import FadeIn from "@/components/objects/atoms/FadeIn";
import TeamCard from "@/components/objects/atoms/TeamCard";
import Section from "@/components/objects/molecules/Section";
import { SubTeam } from "@/types/index";

type Props = {
  title: string;
  subTeams: SubTeam[];
};

const TeamCompositionSection = ({ title, subTeams }: Props) => {
  return (
    <Section id="sub-teams" title={title}>
      <FadeIn className="flex flex-col justify-center items-center lg:items-start gap-10">
        {subTeams.map(({ name, description, imagePath }) => (
          <TeamCard key={name} title={name} imagePath={imagePath}>
            {description}
          </TeamCard>
        ))}
      </FadeIn>
    </Section>
  );
};

export default TeamCompositionSection;
