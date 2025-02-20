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

const fetchUserProjects = async (username: string): Promise<GithubRepo[]> => {
  const data = await fetchJson<GithubRepo[]>(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
  );
  return data;
};

export const useGithubUserProjects = (username: string) => {
  return useQuery({
    queryKey: ["githubProjects", username],
    queryFn: () => fetchUserProjects(username),
    enabled: !!username,
    staleTime: 1000 * 60 * 5,
  });
};
