import { TablePagination, List } from "@mui/material";
import RepoListItem from "./RepoListItem";
import type { RepoEdge } from "../types";

const getRepos = (arr: RepoEdge[]) => arr.map((el) => el.node);

interface RepoListProps {
  edges: RepoEdge[];
}

export default function RepoList({ edges }: RepoListProps) {
  const repos = getRepos(edges);

  return (
    <List>
      {repos.map(({ nameWithOwner }) => (
        <RepoListItem key={nameWithOwner} name={nameWithOwner} />
      ))}
    </List>
  );
}
