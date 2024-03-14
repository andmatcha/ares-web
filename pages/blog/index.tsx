import Layout from "../../components/layouts/Layout";
import ArticleCard from "../../components/objects/atoms/ArticleCard";
import Hero from "../../components/objects/atoms/Hero";
import { articles } from "../../const/articles";

const BlogHome = () => {
  return (
    <Layout title="BLOG" allowTopSpace>
      <Hero title="BLOG" imagePath="/images/hero_2.jpg" />
      <div className="flex md:flex-col gap-4 p-4">
        {articles.map((article) => (
          <ArticleCard key={article.id} articleOverview={article}></ArticleCard>
        ))}
      </div>
    </Layout>
  );
};

export default BlogHome;
