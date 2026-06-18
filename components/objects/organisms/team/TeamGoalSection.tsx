import FadeIn from "@/components/objects/atoms/FadeIn";
import Paragraph from "@/components/objects/atoms/Paragraph";
import Section from "@/components/objects/molecules/Section";
import { goals } from "@/const/team";

type Props = {
  title: string;
  descriptions: string[];
};

const TeamGoalSection = ({ title, descriptions }: Props) => {
  return (
    <Section id="goal" title={title}>
      <FadeIn
        as="section"
        className="px-2 md:px-[6%] flex flex-col items-center gap-4 md:gap-10 text-lg"
      >
        <div>
          <ol className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            {goals.map(({ icon }, index) => (
              <FadeIn
                as="li"
                options={{ delay: 150 * index }}
                key={index}
                className="flex flex-row lg:flex-col justify-center lg:justify-start items-center gap-4 lg:w-1/5"
              >
                <div className="w-12 lg:w-1/3">
                  <img src={icon} alt="" className="w-full brightness-0" />
                </div>
                <Paragraph className="w-5/6 lg:w-full lg:text-center">
                  {descriptions[index]}
                </Paragraph>
              </FadeIn>
            ))}
          </ol>
        </div>
      </FadeIn>
    </Section>
  );
};

export default TeamGoalSection;
