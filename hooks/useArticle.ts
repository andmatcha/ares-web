import { articles } from "../const/articles";

export const useArticle = () => {
  const getArticleFromId = (articleId: number) => {
    return articles.find((article) => {
      return article.id === articleId;
    });
  };
  return {
    getArticleFromId,
  };
};
