import { useQuery } from "@tanstack/react-query";

import { fetchJson } from "@src/utils/fetchWrapper";

export interface GithubUser {
  id: number;
  login: string;
  avatarUrl: string;
}

interface SearchUsersResponse {
  items: GithubUser[];
}

const searchGithubUsers = async (query: string): Promise<GithubUser[]> => {
  const data = await fetchJson<SearchUsersResponse>(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
  );
  return data.items;
};

export const useGithubUserSearch = (query: string) => {
  return useQuery({
    queryKey: ["githubUsers", query],
    queryFn: () => searchGithubUsers(query),
    enabled: query.length > 0,
    staleTime: 1000 * 60 * 5,
  });
};
