import FadeIn from "@/components/objects/atoms/FadeIn";
import MemberIntro from "@/components/objects/atoms/MemberIntro";
import Section from "@/components/objects/molecules/Section";
import { Member } from "@/types/index";

type Props = {
  title: string;
  leaders: Member[];
};

const LeaderSection = ({ title, leaders }: Props) => {
  return (
    <Section id="leaders" title={title}>
      <ul className="flex flex-col gap-10 w-full items-center">
        {leaders.map((member) => (
          <FadeIn key={member.name}>
            <MemberIntro member={member} />
          </FadeIn>
        ))}
      </ul>
    </Section>
  );
};

export default LeaderSection;
