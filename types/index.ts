import { type } from "os";

export type Member = {
  name: string;
  university: string;
  introduction: string;
  imagePath: string;
  isLeader: boolean;
};

export type Sponsor = {
  name: string;
  imagePath: string;
  url: string;
  rank: number;
  bgWhite?: boolean;
};
