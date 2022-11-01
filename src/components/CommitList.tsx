import { List } from "@mui/material";
import CommitListItem from "./CommitListItem";
import type { CommitEdge } from "../types";

const getCommits = (arr: CommitEdge[]) => arr.map((el) => el.node);

interface CommitListProps {
  edges: CommitEdge[];
}

export default function CommitList({ edges }: CommitListProps) {
  const commits = getCommits(edges);

  return (
    <List>
      {commits.map((commit) => (
        <CommitListItem key={commit.oid} commit={commit} />
      ))}
    </List>
  );
}
