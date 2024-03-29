import matter from "gray-matter";
import { getFilePath, readAllMdxFileNames } from "./readFile";
import readingTime from "reading-time";
import { getBundleMDXData } from "./mdx";

// 获取文章详情
export async function getArticleDetails(fileName: string) {
  const fullPath = await getFilePath(fileName);
  const { code, matter, frontmatter } = await getBundleMDXData(fullPath);
  const { text: readTime } = readingTime(code);
  return { code, matter, frontmatter, readingTime: readTime };
}

// 获取所有文章的元数据
export async function getAllArticlesMatter() {
  const fileNames = await readAllMdxFileNames();
  const allMdxFiles = await Promise.all(
    fileNames.map(async (fileName) => {
      const { frontmatter, readingTime } = await getArticleDetails(fileName!);
      return { frontmatter, readingTime, fileName };
    })
  );
  return allMdxFiles;
}
