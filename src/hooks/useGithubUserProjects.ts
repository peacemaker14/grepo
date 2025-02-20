import { useQuery } from "@tanstack/react-query";

import { fetchJson } from "@src/utils/fetchWrapper";

export interface GithubRepo {
  id: number;
  name: string;
  description: string;
  htmlUrl: string;
  stargazersCount: number;
  forksCount: number;
  language: string;
  updatedAt: string;
}

interface GithubResponse {
  data: GithubRepo[];
  totalPages: number;
}

interface GithubRepoRaw {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

const fetchUserProjects = async (
  username: string,
  page: number,
  perPage: number
): Promise<GithubResponse> => {
  const { data, headers } = await fetchJson<GithubRepoRaw[]>(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=${perPage}&page=${page}`
  );

  const linkHeader = headers?.get("link");
  const totalPages = linkHeader
    ? parseInt(linkHeader.match(/page=(\d+)>; rel="last"/)?.[1] || "1")
    : 1;

  return { data, totalPages };
};

export const useGithubUserProjects = (
  username: string,
  page: number,
  perPage: number
) => {
  return useQuery({
    queryKey: ["githubProjects", username, page, perPage],
    queryFn: () => fetchUserProjects(username, page, perPage),
    enabled: !!username,
    staleTime: 1000 * 60 * 5,
  });
};
