"use client";

import Paragraph from "./Paragraph";
import { Member } from "../../../types";

type Props = {
  member: Member;
};

const MemberIntro = ({
  member: { name, university, introduction, imagePath },
}: Props) => {
  return (
    <li className="flex justify-center items-center gap-10 px-2">
      <div className="hidden md:block">
        <div className="w-40 h-40 rounded-full overflow-hidden">
          <img
            src={imagePath}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="max-w-4xl md:w-4/5 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="block md:hidden">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img src={imagePath} alt={name} className="h-full object-cover" />
            </div>
          </div>
          <div>
            <h4 className="tracking-wider pb-1">{name}</h4>
            <h5 className="text-xs text-gray-400">{university}</h5>
          </div>
        </div>
        <Paragraph size="small">{introduction}</Paragraph>
      </div>
    </li>
  );
};

export default MemberIntro;
