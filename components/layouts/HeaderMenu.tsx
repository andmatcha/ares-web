import contents from "@/const/header";
import { Link } from "@/i18n/routing";

type Props = {
  className: string;
  itemClassName: string;
};

const HeaderMenu = ({ className, itemClassName }: Props) => {
  return (
    <ul className={className}>
      {contents.menu.map((menuItem) => (
        <li key={menuItem.path} className={itemClassName}>
          <Link href={menuItem.path}>{menuItem.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderMenu;
