"use client";

import { ReactNode } from "react";

import Instagram from "@/components/objects/icons/instagram";
import Twitter from "@/components/objects/icons/twitter";
import URL from "@/const/url";
import { Link } from "@/i18n/routing";

type SocialContactLinkProps = {
  href: string;
  icon: ReactNode;
  label: string;
};

const contactLinkClassName =
  "flex items-center gap-2 py-1 px-4 border border-black rounded-3xl duration-300 fill-black hover:text-white hover:bg-black hover:fill-white";

const iconWrapperClassName = "w-5 h-5";

const SocialContactLink = ({ href, icon, label }: SocialContactLinkProps) => {
  return (
    <Link href={href} target="_blank" className={contactLinkClassName}>
      <div className={iconWrapperClassName}>{icon}</div>
      <p>{label}</p>
    </Link>
  );
};

const ContactLinks = () => {
  return (
    <div className="mt-4 p-4 flex flex-col sm:flex-row justify-center items-center gap-6">
      <SocialContactLink
        href={URL.twitter}
        icon={<Twitter className="w-full h-full fill-inherit" />}
        label="@AresPjt2022"
      />
      <SocialContactLink
        href={URL.instagram}
        icon={<Instagram className="w-full h-full fill-inherit" />}
        label="@ares_project_official"
      />
      <div className="flex items-center gap-2 py-1 px-4 border border-black rounded-3xl">
        <div className={iconWrapperClassName}>
          <img
            src="/images/icons/envelope.svg"
            alt=""
            className="w-full h-full invert"
          />
        </div>
        <p>ares2022.tu@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactLinks;
