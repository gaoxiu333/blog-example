import { getAllArticlesMatter } from "@/lib/articles";
import { formatDateTime } from "@/lib/time";
import { Link } from "@nextui-org/react";

export default async function Home() {
  const list = await getAllArticlesMatter();
  return (
    <main className="container mt-20">
      {list.map(({ frontmatter, readingTime, fileName }, idx) => {
        return (
          <div className="py-3" key={idx}>
            <Link className="font-bold text-2xl" href={`/articles/${fileName}`}>
              {frontmatter.title}
            </Link>
            <p className="text-sm text-default-400 mt-1">
              <span>{formatDateTime(frontmatter.createdAt!)}</span> ·{" "}
              <span>{readingTime}</span>
            </p>
          </div>
        );
      })}
    </main>
  );
}
