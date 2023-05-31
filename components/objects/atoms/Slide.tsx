import { NextPage } from "next";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  images: { src: string; alt: string }[];
  className?: string;
  settings?: Settings;
};

const Slide: NextPage<Props> = ({ images, settings }: Props) => {
  const defaultSettings = {
    fade: true,
    speed: 1500,
    autoplaySpeed: 4000,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    lazyLoad: "ondemand" as const,
    ...settings,
  };

  return (
    <Slider {...defaultSettings}>
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} />
      ))}
    </Slider>
  );
};

export default Slide;
