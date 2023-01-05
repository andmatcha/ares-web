import { PrismaClient } from "@prisma/client";
import { Article, ArticleTag } from "@prisma/client";

type FindArticle = Article & { tags: ArticleTag[] };
type CreateArticle = Omit<Article, "id" | "createdAt" | "updatedAt">;
type UpdateArticle = Omit<Article, "createdAt" | "updatedAt">;

const prisma = new PrismaClient();

// 条件に一致する記事を全件取得
export const searchArticles = async ({
  userId,
  isNews,
}: {
  userId?: string;
  isNews?: boolean;
}): Promise<FindArticle[]> => {
  return await prisma.article.findMany({
    where: { userId, isNews },
    include: { tags: true },
  });
};

// IDに一致する記事を1件取得
export const findArticle = async (id: string): Promise<FindArticle | null> => {
  return await prisma.article.findUnique({
    where: { id },
    include: { tags: true },
  });
};

// 記事を追加
export const createArticle = async (
  { title, userId, isNews, body }: CreateArticle,
  tagIds: string[]
): Promise<FindArticle> => {
  return await prisma.article.create({
    data: {
      title,
      userId,
      isNews,
      body,
      tags: {
        createMany: {
          data: tagIds.map((tagId) => {
            return { tagId };
          }),
        },
      },
    },
    include: { tags: true },
  });
};

// 記事を更新
export const updateArticle = (
  { id, title, userId, isNews, body }: UpdateArticle,
  tagIds: string[]
): Promise<FindArticle> => {
  return prisma.article.update({
    where: { id },
    data: {
      title,
      userId,
      isNews,
      body,
      tags: {
        deleteMany: {},
        createMany: {
          data: tagIds.map((tagId) => {
            return { tagId };
          }),
        },
      },
    },
    include: { tags: true },
  });
};

// 記事を削除
export const deleteArticle = () => {};
