import { Article } from "../types/article";

export const articles: Article[] = [
  {
    id: 1,
    date: "2020-01-01",
    title: "Article 1",
    thumbnail: "https://picsum.photos/400/300",
    description:
      "This is the first article This is the first article This is the first article This is the first article This is the first article This is the first article This is the first article This is the first article This is the first article This is the first article This is the first article This is the first article This is the first article This is the first article This is the first article This is the first article This is the first article This is the first article This is the first article This is the first article This is the first article This is the first article This is the first article This is the first article This is the first article This is the first article This is the first article ",
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    author: "Author 1",
    type: "type1",
    tags: ["tag1", "tag2"],
    content: "This is the content of the first article",
  },
  {
    id: 2,
    date: "2020-01-02",
    title: "Article 2",
    thumbnail: "https://picsum.photos/400/300",
    description: "This is the second article",
    createdAt: "2020-01-02",
    updatedAt: "2020-01-02",
    author: "Author 2",
    type: "type2",
    tags: ["tag1", "tag3"],
    content: "This is the content of the second article",
  },
];
