import { useQuery } from "@tanstack/react-query";

import { fetchJson } from "@src/utils/fetchWrapper";

interface ReadmeResponse {
  content: string;
}

const fetchRepoReadme = async (
  owner: string,
  repo: string
): Promise<string> => {
  const data = await fetchJson<ReadmeResponse>(
    `/api/github/repos/${owner}/${repo}/readme`
  );
  return data.content;
};

export const useGithubRepoReadme = (owner: string, repo: string) => {
  return useQuery({
    queryKey: ["repoReadme", owner, repo],
    queryFn: () => fetchRepoReadme(owner, repo),
    enabled: Boolean(owner && repo),
  });
};
