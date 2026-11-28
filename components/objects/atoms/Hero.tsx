"use client";

type Props = {
  title: string;
  imagePath: string;
  imagePosition?: string;
};

const Hero = ({ title, imagePath, imagePosition }: Props) => {
  return (
    <div
      className={`w-full overflow-hidden relative ${imagePosition ? "pt-16" : "max-h-60"}`}
    >
      <img
        src={imagePath}
        alt={title}
        className={`w-full object-cover opacity-40 ${imagePosition ? "h-[max(12rem,27vw)] md:min-h-76" : "-top-40"}`}
        style={{ objectPosition: imagePosition }}
      />
      <div
        className={`absolute inset-0 md:px-40 flex justify-center md:justify-start ${imagePosition ? "items-end pb-2" : "items-center"}`}
      >
        <h2 className="text-xl md:text-6xl tracking-widest font-display">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
