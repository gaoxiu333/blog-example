import { getArticleDetails } from "@/lib/articles";
import { ArticlesDetails } from "./components/ArticlesDertails";

const Page = async ({ params }: any) => {
  const { frontmatter, readingTime, code } = await getArticleDetails(
    decodeURIComponent(params.id)
  );
  return (
    <main className="container">
      <header className="my-6">
        <h2 className="text-center text-3xl font-black text-default-700">
          {frontmatter.title}
        </h2>
        <p className="text-center text-sm  text-default-400">
          {frontmatter.createdAt} · {readingTime}
        </p>
      </header>
      <ArticlesDetails content={code} />
    </main>
  );
};

export default Page;
