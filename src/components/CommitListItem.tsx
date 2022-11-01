import { ListItem, Typography } from "@mui/material";
import type { Commit } from "../types";

interface CommitListItemProps {
  commit: Commit;
}

export default function CommitListItem({ commit }: CommitListItemProps) {
  return (
    <ListItem>
      <Typography variant="body1">
        {commit.oid}{" "}
        <span style={{ fontWeight: "bold" }}>{commit.message}</span>
      </Typography>
    </ListItem>
  );
}
