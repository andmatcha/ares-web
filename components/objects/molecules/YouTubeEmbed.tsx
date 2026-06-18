type Props = {
  src: string;
};

const YouTubeEmbed = ({ src }: Props) => {
  return (
    <div className="relative aspect-[16/9] w-full lg:w-1/2">
      <iframe
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="absolute inset-0 w-full h-full"
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
