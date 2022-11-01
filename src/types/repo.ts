export type Repo = {
  name: string;
  owner: string;
};

export type RepoEdge = {
  node: Repo;
  cursor: string;
};
