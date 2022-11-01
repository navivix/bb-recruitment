import { ListItem, ListItemText } from "@mui/material";
import type { Issue } from "../types";

interface IssueListItemProps {
  issue: Issue;
}

export default function IssueListItem({ issue }: IssueListItemProps) {
  return <ListItem>{issue.title}</ListItem>;
}
