import dayjs from "dayjs";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "../../components/layouts/Layout";
import { articles } from "../../const/articles";

const Article: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const article = articles.find((article) => article.id === Number(id));
  return article ? (
    <Layout title={`${id}`} allowTopSpace>
      <div className="px-4 md:px-64 py-4 md:py-8">
        <Link href="/activity" className="text-xs md:text-sm">
          記事一覧に戻る
        </Link>
        <div className="flex justify-center py-8">
          {/* サムネイル画像 */}
          <img
            src={`/images/thumbnails/${article.thumbnail}`}
            alt=""
            className="w-2/3"
          />
        </div>
        <div className="tracking-wider text-gray-400">
          {/* 日付 */}
          {dayjs(article.date).format("YYYY/MM/DD")}
        </div>
        <h2 className="tracking-wide text-4xl font-medium py-4">
          {/* タイトル */}
          {article.title}
        </h2>
        <p className="py-16">
          {/* 本文 */}
          { article.body}
        </p>
      </div>
    </Layout>
  ) : (
    <div>記事が見つかりませんでした</div>
  );
};

export default Article;
