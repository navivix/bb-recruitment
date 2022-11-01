export type Repo = {
  nameWithOwner: string;
};

export type RepoEdge = {
  node: Repo;
  cursor: string;
};

export type RepoWithData = {
  nameWithOwner: string;
  description: string;
  defaultBranchRef: {
    target: {
      history: {
        totalCount: number;
      };
    };
  };
  issues: { totalCount: number };
  releases: { totalCount: number };
};
