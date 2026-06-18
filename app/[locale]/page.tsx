"use client";

import DonationAppeal from "@/components/objects/molecules/DonationAppeal";
import PageTile from "@/components/objects/molecules/PageTile";
import YouTubeEmbed from "@/components/objects/molecules/YouTubeEmbed";
import MainVisual from "@/components/objects/organisms/MainVisual";
import URL from "@/const/url";

const navigationTiles = [
  { title: "TEAM", imagePath: "/images/ares_urc2.jpg", href: URL.team },
  {
    title: "ROVERS",
    imagePath: "/images/rovers/ares4_wide.jpg",
    href: URL.rover,
  },
  { title: "FUNDING", imagePath: "/images/tohoku_field.jpg", href: URL.funding },
  { title: "CONTACT", imagePath: "/images/ares_jacket.jpg", href: URL.contact },
];

const mainMovieUrl =
  "https://www.youtube.com/embed/lSF8VN9TkVM?si=x9_85jqw6cugy0oy";

const movieUrls = [
  "https://www.youtube.com/embed/HOU_xMNRs8M?si=9FGxy4FWyWya48rG",
  "https://www.youtube.com/embed/9xBaypccNPM?si=rWuCS4oEFKVYkEI3",
  "https://www.youtube.com/embed/wn82YigC2aE?si=fgVGke9mTe_uq9E9",
];

export default function HomePage() {
  return (
    <>
      <MainVisual />
      <section className="py-16 px-2 flex flex-col items-center gap-10 text-lg">
        <DonationAppeal />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8">
          {navigationTiles.map((tile) => (
            <PageTile key={tile.title} {...tile} />
          ))}
        </div>
      </section>
      <section className="flex flex-col lg:flex-row items-center lg:items-start py-8 px-4 md:px-16 gap-16">
        <div className="w-full">
          <h3 className="text-center text-3xl py-4 font-display">MOVIES</h3>
          <div className="flex flex-col xl:flex-row justify-center items-center gap-4 mb-4">
            <YouTubeEmbed src={mainMovieUrl} />
          </div>
          <div className="flex flex-col xl:flex-row justify-center items-center gap-4">
            {movieUrls.map((src) => (
              <YouTubeEmbed key={src} src={src} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
