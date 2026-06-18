import Paragraph from "@/components/objects/atoms/Paragraph";
import { Rover } from "@/types/index";

type Props = {
  rover: Rover;
};

const RoverDetails = ({ rover }: Props) => {
  return (
    <div className="flex flex-col xl:flex-row justify-center items-center gap-5 py-4">
      <div className="w-4/5 xl:w-2/5 rounded-md overflow-hidden">
        <img
          src={rover.imagePath}
          alt={rover.name}
          className="w-full object-contain"
        />
      </div>
      <div className="lg:py-4 flex flex-col gap-4 w-full xl:w-2/5">
        <h2 className="text-3xl font-medium">{rover.name}</h2>
        <Paragraph>{rover.description.ja}</Paragraph>
      </div>
    </div>
  );
};

export default RoverDetails;
