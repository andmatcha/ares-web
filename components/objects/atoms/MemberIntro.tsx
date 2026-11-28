"use client";

import Image from "next/image";

import FadeIn from "@/components/objects/atoms/FadeIn";
import Paragraph from "@/components/objects/atoms/Paragraph";
import { Member } from "@/types/index";

type Props = {
  member: Pick<Member, "name" | "university" | "introduction"> & {
    imagePath?: string;
  };
};

const MemberIntro = ({
  member: { name, university, introduction, imagePath },
}: Props) => {
  return (
    <FadeIn
      as="li"
      className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 px-2 md:gap-x-10"
    >
      <div className="relative size-16 overflow-hidden rounded-full bg-white/10 md:size-40">
        {imagePath && (
          <Image
            src={imagePath}
            alt={name}
            fill
            sizes="(min-width: 768px) 160px, 64px"
            className="object-cover"
          />
        )}
      </div>
      <div className="contents md:flex md:flex-col md:gap-4">
        <div>
          <h4 className="tracking-wider pb-1">{name}</h4>
          <p className="text-xs text-gray-400">{university}</p>
        </div>
        <Paragraph size="small" className="col-span-2">
          {introduction}
        </Paragraph>
      </div>
    </FadeIn>
  );
};

export default MemberIntro;
