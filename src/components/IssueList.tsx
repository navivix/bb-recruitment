import { List } from "@mui/material";
import IssueListItem from "./IssueListItem";
import React from "react";
import type { IssueEdge } from "../types";

const getIssues = (arr: IssueEdge[]) => arr.map((el) => el.node);

interface IssueListProps {
  edges: IssueEdge[];
}

export default function IssueList({ edges }: IssueListProps) {
  const issues = getIssues(edges);

  React.useEffect(() => console.log(edges, issues));

  return (
    <List>
      {issues.map((issue) => (
        <IssueListItem key={issue.title} issue={issue} />
      ))}
    </List>
  );
}
