import { ListItemButton, ListItemText } from "@mui/material";
import Link from "./Link";
import type { Repo } from "../types";

interface RepoListItemProps {
  repo: Repo;
}

export default function RepoListItem({ repo }: RepoListItemProps) {
  return (
    <Link to={`/repository/${repo.owner}/${repo.name}`}>
      <ListItemButton>
        <ListItemText primary={repo.name} />
      </ListItemButton>
    </Link>
  );
}
