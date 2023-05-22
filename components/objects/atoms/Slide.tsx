import { NextPage } from "next";
import { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  images: { src: string; alt: string }[];
  className?: string;
};

const Slide: NextPage<Props> = ({ images, className }: Props) => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleIndex((visibleIndex + 1) % images.length);
    }, 4000);
    return () => clearTimeout(timer);
  });

  const settings = {
    fade: true,
    speed: 1500,
    autoplaySpeed: 5000,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    lazyLoad: "ondemand" as const,
    className: className,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </Slider>
  );
};

export default Slide;
