import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: Promise<{ username: string }> }
) {
  const { username } = await context.params;
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const perPage = searchParams.get("per_page") || "30";

  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=${perPage}&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    }
  );

  const data = await response.json();
  return NextResponse.json({
    data,
    headers: Object.fromEntries(response.headers.entries()),
  });
}
