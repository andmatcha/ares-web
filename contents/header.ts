import globalContents from "./global";
import topContents from "./top";

const headerContents = {
  aresLogo: {
    label: globalContents.aresLogoWhite.label,
    imagePath: globalContents.aresLogoWhite.imagePath,
  },
  menu: [
    {
      id: topContents.team.id,
      label: topContents.team.title,
    },
    {
      id: topContents.urc.id,
      label: topContents.urc.title,
    },
    {
      id: topContents.rovers.id,
      label: topContents.rovers.title,
    },
    {
      id: topContents.news.id,
      label: topContents.news.title,
    },
    {
      id: topContents.contact.id,
      label: topContents.contact.title,
    },
  ],
};

export default headerContents;
