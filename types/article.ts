export type ArticleOverview = {
  id: number;
  date: string;
  title: string;
  thumbnail: string;
  description: string;
};

export type Article = ArticleOverview & {
  createdAt: string;
  updatedAt: string;
  author: string;
  type: string;
  tags: string[];
  content: string;
};
