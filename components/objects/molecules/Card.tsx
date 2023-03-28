import { motion, useAnimation } from "framer-motion";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  id: string;
  title: string;
  imagePath: string;
  children: ReactNode;
};

const Card: NextPage<Props> = ({ id, title, imagePath, children }) => {
  const controls = useAnimation();
  const router = useRouter();
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (router.isReady) {
      setIsActive(router.query.featured === id);
    }
  }, [router.query, router, id]);

  const onClickCard = () => {
    router.push({
      pathname: router.pathname,
      query: { featured: id },
    });
  };
  return (
    <div
      onClick={onClickCard}
      className={
        "rounded-md " +
        (isActive ? "w-3/4" : "max-w-xl max-h-[460px] bg-indigo-400")
      }
    >
      <div className="overflow-hidden ">
        <h4>{title}</h4>
        <img
          src={imagePath}
          alt={title}
          className="object-cover overflow-hidden"
        />
      </div>
      {isActive ? <div>{children}</div> : undefined}
    </div>
  );
};

export default Card;
