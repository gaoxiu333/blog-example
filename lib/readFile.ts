import fs from "node:fs/promises";
import path from "path";

const articlesDirectory = path.join(process.cwd(), "app/_articles");

// 读取文章目录内的所有文名
export async function readAllMdxFileNames() {
  const files = await fs.readdir(articlesDirectory);
  return files.map((fileName) => fileName.split(".md").at(0));
}

// 通过文件名获取文件路径
export async function getFilePath(fileName: string) {
  let fullPath = path.join(articlesDirectory, `${fileName}`);
  try {
    const stars = await fs.stat(fullPath);
    fullPath = stars.isDirectory() ? path.join(fullPath, "index") : fullPath;
  } catch (error) {}

  let suffix = "mdx";
  try {
    const stars = await fs.stat(`${fullPath}.${suffix}`);
    suffix = stars.isFile() ? "mdx" : "md";
  } catch (error) {
    suffix = "md";
  }
  return `${fullPath}.${suffix}`;
}
