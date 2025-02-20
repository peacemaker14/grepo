interface PaginationLinks {
  next?: number;
  prev?: number;
  first?: number;
  last?: number;
}

export const parseLinkHeader = (linkHeader: string | null): PaginationLinks => {
  if (!linkHeader) return {};

  return linkHeader.split(",").reduce((links, part) => {
    const match = part.match(/<.*[?&]page=(\d+).*>; rel="(\w+)"/);
    if (match) {
      const [, page, rel] = match;
      return { ...links, [rel]: parseInt(page, 10) };
    }
    return links;
  }, {} as PaginationLinks);
};
