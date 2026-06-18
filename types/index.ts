export type Member = {
  name: string;
  university: string;
  introduction: string;
  imagePath: string;
  isLeader: boolean;
};

export type SubTeam = {
  name: string;
  description: string;
  imagePath: string;
};

export type Sponsor = {
  name: string;
  imagePath: string;
  url: string;
  rank: number;
  bgWhite?: boolean;
  label?: string;
};

export type Rover = {
  name: string;
  description: {
    ja: string;
    en: string;
  };
  imagePath: string;
};
