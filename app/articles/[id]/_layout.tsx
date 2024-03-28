import { getArticlesData } from "@/lib/readMdxFile";
import { formatDateTime } from "@/lib/time";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) => {
  const { content, frontmatter, readingTime } = getArticlesData(params.id);
  const source = await serialize(content);
};

export default Layout;
