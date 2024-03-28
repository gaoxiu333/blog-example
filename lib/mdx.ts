import { bundleMDX } from "mdx-bundler";
import { readMdxRaw } from "./readFileRaw";

// mdx plugins
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";
import remarkSmartypants from "@silvenon/remark-smartypants";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeToc from "@jsdevtools/rehype-toc";
import readingTime from "reading-time";

export async function getMdxData(fileName: string) {
  const { fileContnts, fullPath } = await readMdxRaw(fileName);
  console.log("fullPath", fullPath);
  const result = await bundleMDX({
    file: fullPath,
    // source: fileContnts,
    mdxOptions: (options) => {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkGfm, // github 风格的markdown
        remarkSmartypants, // 更聪明的标点符号
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug, // 给标题添加id属性
        rehypeAutolinkHeadings, // 给标题添加锚点
        [
          rehypeToc, // 生成目录
          {
            headings: ["h1", "h2", "h3"],
          },
        ],
        rehypeCodeTitles, // 代码块增加标题
        rehypePrism, // 代码高亮
      ];
      return options;
    },
  });
  return {
    ...result,
    readingTime: readingTime(result?.matter.content).text, // 计算阅读时间
  };
}
