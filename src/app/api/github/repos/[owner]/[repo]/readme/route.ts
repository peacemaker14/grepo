import { NextResponse } from "next/server";

interface GithubReadmeResponse {
  content: string;
  encoding: string;
}

export async function GET(
  request: Request,
  context: {
    params: Promise<{
      owner: string;
      repo: string;
    }>;
  }
): Promise<NextResponse> {
  const { owner, repo } = await context.params;

  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/readme`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    const data: GithubReadmeResponse = await response.json();

    // GitHub returns the content as base64 encoded, so we need to decode it
    const decodedContent = Buffer.from(data.content, "base64").toString(
      "utf-8"
    );

    return NextResponse.json({ content: decodedContent });
  } catch (error) {
    console.error("Error fetching README:", error);
    return NextResponse.json(
      { error: "Failed to fetch README" },
      { status: 500 }
    );
  }
}
