import { Link } from "@/i18n/routing";

type Props = {
  iconPath: string;
  title: string;
  description: string;
  linkHref: string;
  linkLabel: string;
};

const ContactResult = ({
  iconPath,
  title,
  description,
  linkHref,
  linkLabel,
}: Props) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="w-32 h-32">
          <img src={iconPath} alt="" className="w-full" />
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-center text-2xl">{title}</h2>
          <p className="text-center text-sm mb-2">{description}</p>
          <Link href={linkHref} className="textaresred ease-in-out">
            {linkLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactResult;
