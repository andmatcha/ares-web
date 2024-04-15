import { NextPage } from "next";
import Link from "next/link";

import Layout from "../../app/_components/layouts/Layout";
import ArticleCard from "../../app/_components/objects/atoms/ArticleCard";
import Hero from "../../app/_components/objects/atoms/Hero";
import { articles } from "../../app/_common/constants/articles";
import { Article } from "../../app/_common/types/article";

const BlogHome: NextPage = async () => {
  // const res = await fetch("/api/articles");
  // const articles: Article[] = await res.json();
  return (
    <Layout title="BLOG" allowTopSpace>
      <Hero title="BLOG" imagePath="/images/hero_2.jpg" />
      <div className="flex md:flex-col flex-wrap gap-4 p-4">
        {articles.map((article) => (
          <Link href={`/blog/${article.id}`} key={article.id}>
            <ArticleCard article={article}></ArticleCard>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default BlogHome;
