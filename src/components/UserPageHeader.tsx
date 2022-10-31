import { Typography, Paper } from "@mui/material";

interface UserPageHeaderProps {
  username: string | undefined;
}

export default function UserPageHeader({ username }: UserPageHeaderProps) {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6">{username}'s repositories</Typography>
    </Paper>
  );
}
