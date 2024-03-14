export type ArticleOverview = {
  id: number;
  date: string;
  tags: number[];
  title: string;
  thumbnail: string;
  description: string;
};

export type Article = ArticleOverview & {
  author: string;
  type: string;
  content: string;
};

export type Tag = {
  id: number;
  label: string;
};
