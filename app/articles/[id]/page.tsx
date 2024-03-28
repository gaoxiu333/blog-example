import { getMdxData } from "@/lib/mdx";
import { formatDateTime } from "@/lib/time";
import { getMDXComponent } from "mdx-bundler/client";
import * as React from "react";

const Page: React.FC = async ({ params }: any) => {
  const { code, frontmatter, readingTime } = await getMdxData(
    decodeURIComponent(params.id)
  );
  const Component = getMDXComponent(code);

  return (
    <main className="container pb-24">
      <header className="py-6 mb-6">
        <h1 className="text-2xl font-semibold">{frontmatter.title}</h1>
        <p className="text-default-500 text-small">
          <span>
            {formatDateTime(frontmatter.createdAt)} · {readingTime}
          </span>
        </p>
      </header>
      <article className="prose !max-w-none dark:prose-invert">
        <Component />
      </article>
    </main>
  );
};
export default Page;
