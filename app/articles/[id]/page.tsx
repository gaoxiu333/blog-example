import { getArticlesData } from "@/lib/mdx";
import { formatDateTime } from "@/lib/time";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";

const Page = async ({ params }: any) => {
  const { content, frontmatter, readingTime } = getArticlesData(params.id);
  return (
    <main className="container pb-24">
      <header className="py-6 mb-6">
        <h1 className="text-3xl font-semibold">{frontmatter.title}</h1>
        <p className="text-default-500">
          <span>
            {formatDateTime(frontmatter.createdAt)} · {readingTime}
          </span>
        </p>
      </header>
      <article className="prose !max-w-none dark:prose-invert">
        <MDXRemote
          source={content}
          options={{
            parseFrontmatter: true,
            mdxOptions: {
              remarkPlugins: [remarkGfm as any],
              rehypePlugins: [rehypePrism as any],
            },
          }}
        />
      </article>
    </main>
  );
};
export default Page;
