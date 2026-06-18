import { actionButtonClassName, actionButtonStyle } from "./buttonStyles";

type Props = {
  url?: string;
  label?: string;
};

const MainButton = ({ url, label }: Props) => {
  return (
    <a
      href={url}
      css={actionButtonStyle}
      className={actionButtonClassName}
    >
      <span className="relative">{label}</span>
    </a>
  );
};

export default MainButton;
