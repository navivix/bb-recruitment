import { ListItemButton, ListItemText } from "@mui/material";
import Link from "./Link";

interface RepoListItemProps {
  name: string;
}

export default function RepoListItem({ name }: RepoListItemProps) {
  return (
    <Link to={`/repository/${name}`}>
      <ListItemButton>
        <ListItemText primary={name} />
      </ListItemButton>
    </Link>
  );
}
