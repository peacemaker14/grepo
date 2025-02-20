import { useQuery } from "@tanstack/react-query";

import { fetchJson } from "@src/utils/fetchWrapper";
import { parseLinkHeader } from "@src/utils/githubPagination";

export interface GithubRepo {
  id: number;
  name: string;
  owner: {
    login: string;
  };
  description: string;
  htmlUrl: string;
  stargazersCount: number;
  forksCount: number;
  language: string;
  updatedAt: string;
}

interface GithubResponse {
  data: GithubRepo[];
  pagination: {
    next?: number;
    prev?: number;
  };
}

const fetchUserProjects = async (
  username: string,
  page: number,
  perPage: number
): Promise<GithubResponse> => {
  const { data, headers } = await fetchJson<{
    data: GithubRepo[];
    headers: Record<string, string>;
  }>(`/api/github/users/${username}/repos?page=${page}&per_page=${perPage}`);

  const links = parseLinkHeader(headers?.link);

  return {
    data,
    pagination: {
      next: links.next,
      prev: links.prev,
    },
  };
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
