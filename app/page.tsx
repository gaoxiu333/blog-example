import { getAllArticlesData } from "@/lib/mdx";
import { formatDateTime } from "@/lib/time";
import { Link } from "@nextui-org/react";

export default function Home() {
  const data = getAllArticlesData();
  return (
    <main className="container mt-20">
      {data.map(({ fileName, frontmatter, readingTime }, idx) => {
        return (
          <div className="py-3" key={idx}>
            <Link className="font-bold text-2xl" href={`/articles/${fileName}`}>
              {frontmatter.title}
            </Link>
            <p className="text-sm text-default-400 mt-1">
              <span>{formatDateTime(frontmatter.createdAt)}</span> ·{" "}
              <span>{readingTime}</span>
            </p>
          </div>
        );
      })}
    </main>
  );
}
