import { ListItemText } from "@mui/material";
import type { Release } from "../types";

interface IssueListItemProps {
  release: Release;
}

export default function IssueListItem({ release }: IssueListItemProps) {
  return <ListItemText>{release.tagName}</ListItemText>;
}
