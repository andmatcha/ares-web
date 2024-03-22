import dayjs from "dayjs";
import { NextPage } from "next";
import { useRouter } from "next/router";

import Layout from "../../components/layouts/Layout";
import { THUMBNAIL_BASE_URL } from "../../const/articles";
import { useArticle } from "../../hooks/useArticle";

const ArticlePage: NextPage = () => {
  const router = useRouter();
  const { getArticleFromId } = useArticle();
  const articleId = Number(router.query.id);
  const article = getArticleFromId(articleId);
  return (
    <Layout title={article?.title ?? "ARES Project"} allowTopSpace>
      <div className="xl:mx-[10%] lg:mx-[5%] mx-8 my-10 flex flex-col md:flex-row justify-center items-center md:items-start gap-4 xl:gap-[5%]">
        <div className="w-full md:w-1/4 p-4">
          <div className="text-gray-200 text-sm md:text-base border-b border-gray-600 py-3 md:py-4 px-2 tracking-wide">
            {article?.author}
          </div>
          <div className="text-gray-200 text-sm md:text-base border-b border-gray-600 py-3 md:py-4 px-2 tracking-wide">
            {dayjs(article?.date).format("YYYY年M月D日")}
          </div>
          <div className="py-4 px-2 tracking-wide">
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://twitter.com/share?url=https://arespjt.jp${router.asPath}&text=${article?.title}&via=AresPjt2022&related=AresPjt2022`}
              className="border text-sm px-3 py-1 rounded-2xl"
            >
              Xでシェアする
            </a>
          </div>
        </div>
        <div className="md:w-3/4">
          <h2 className="text-2xl md:text-4xl font-medium pb-8 tracking-wide">
            {article?.title}
          </h2>
          <div className="pb-16">
            <img src={THUMBNAIL_BASE_URL + article?.thumbnail} alt="" />
          </div>
          <p className="text-sm md:text-base tracking-wide leading-8">{article?.body}</p>
        </div>
      </div>
    </Layout>
  );
};

export default ArticlePage;
