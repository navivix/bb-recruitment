export type Repo = {
  nameWithOwner: string;
};

export type RepoEdge = {
  node: Repo;
  cursor: string;
};
