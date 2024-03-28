import { getArticlesData } from "@/lib/readMdxFile";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const data = getArticlesData(id as string);

  return new Response(JSON.stringify(data), {
    headers: { "content-type": "application/json" },
  });
}
