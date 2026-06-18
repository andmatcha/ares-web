import ExternalLink from "@/components/objects/atoms/ExternalLink";
import FadeIn from "@/components/objects/atoms/FadeIn";
import Paragraph from "@/components/objects/atoms/Paragraph";
import URL from "@/const/url";

type Props = {
  title: string;
  description: string;
  linkLabel: string;
};

const UrcSection = ({ title, description, linkLabel }: Props) => {
  return (
    <FadeIn
      as="section"
      className="py-5 md:py-10 px-2 md:px-[12%] flex flex-col items-center gap-10 text-lg"
    >
      <div className="flex gap-4 md:gap-10 flex-col items-center lg:flex-row">
        <img src="/images/mars1.png" alt="" className="w-2/3 lg:w-[48%]" />
        <div className="w-full lg:w-[48%] px-4">
          <h3 className="text-2xl md:text-3xl font-medium tracking-wider pb-2 text-center lg:text-left">
            {title}
          </h3>
          <Paragraph>{description}</Paragraph>
          <ExternalLink href={URL.urc_official}>{linkLabel}</ExternalLink>
        </div>
      </div>
    </FadeIn>
  );
};

export default UrcSection;
