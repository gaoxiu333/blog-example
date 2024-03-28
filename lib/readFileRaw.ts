import fs from "node:fs/promises";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const articlesDirectory = path.join(process.cwd(), "app/_articles");

export async function readMdxRaw(fileName: string) {
  let fullPath = path.join(articlesDirectory, `${fileName}`);
  try {
    const stars = await fs.stat(fullPath);
    fullPath = stars.isFile() ? fullPath : path.join(fullPath, fileName);
  } catch (error) {}

  let suffix = (await fs.readFile(`${fullPath}.mdx`)) ? ".mdx" : ".md";
  const fileContnts = await fs.readFile(`${fullPath}${suffix}`, "utf8");
  return { fileContnts, fullPath: `${fullPath}${suffix}` };
}
