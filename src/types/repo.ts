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

export type Commit = {
  oid: string;
  message: string;
};

export type CommitEdge = {
  cursor: string;
  node: Commit;
};

export type Issue = {
  title: string;
};

export type IssueEdge = {
  node: Issue;
  cursor: string;
};

export type Release = {
  tagName: string;
};

export type ReleaseEdge = {
  node: Release;
  cursor: string;
};
