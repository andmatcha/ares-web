"use client";

type Props = {
  title: string;
  imagePath: string;
};

const Hero = ({ title, imagePath }: Props) => {
  return (
    <div className="w-full max-h-60 overflow-hidden relative">
      <img
        src={imagePath}
        alt={title}
        className="w-full object-cover opacity-50 -top-40"
      />
      <div className="absolute inset-0 bg-white/40" />
      <div className="absolute top-0 left-0 w-full h-full md:px-40 flex justify-center md:justify-start items-center">
        <h2 className="relative text-xl md:text-6xl tracking-widest font-display text-black">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
