import Paragraph from "@/components/objects/atoms/Paragraph";
import Section from "@/components/objects/molecules/Section";

type Props = {
  description: string;
};

const TeamAboutSection = ({ description }: Props) => {
  return (
    <Section id="about" className="flex flex-col gap-10 items-center">
      <div className="flex -mb-8 md:mb-0 justify-center items-center gap-4">
        <div className="w-20 md:w-40">
          <img
            src="/images/ares_logo_black.png"
            alt=""
            className="w-full object-contain"
          />
        </div>
        <h3 className="text-2xl md:text-4xl tracking-widest">ARES Project</h3>
      </div>
      <div className="px-[10%] flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10">
        <div className="md:w-2/5 rounded-sm overflow-hidden">
          <img
            src="/images/ares_urc3.jpg"
            alt=""
            className="w-full object-contain"
          />
        </div>
        <Paragraph className="md:w-3/5">{description}</Paragraph>
      </div>
    </Section>
  );
};

export default TeamAboutSection;
