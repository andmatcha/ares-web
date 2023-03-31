import globalContents from "./global";
import topContents from "./top";

const headerContents = {
  aresLogo: {
    label: globalContents.aresLogoWhite.label,
    imagePath: globalContents.aresLogoWhite.imagePath,
  },
  menu: [
    {
      path: "/team",
      label: topContents.team.title,
    },
    {
      path: "/",
      label: topContents.urc.title,
    },
    {
      path: "/",
      label: topContents.rovers.title,
    },
    {
      path: "/",
      label: topContents.news.title,
    },
  ],
};

export default headerContents;
