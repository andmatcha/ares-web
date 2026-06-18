type Props = {
  title: string;
  description: string;
};

const ListItem = ({ title, description }: Props) => {
  return (
    <li className="w-full flex justify-between items-center px-4 sm:px-8 py-4 sm:py-5 md:py-6 border-b">
      <h4 className="text-xs md:text-sm tracking-wide">{title}</h4>
      <p className="text-xs md:text-sm tracking-wide">{description}</p>
    </li>
  );
};

export default ListItem;
