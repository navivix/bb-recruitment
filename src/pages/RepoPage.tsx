import { useParams } from "react-router-dom";
import { Paper } from "@mui/material";
import { RepoDetails } from "../components";

export default function RepoPage() {
  const { repoName } = useParams();

  return (
    <Paper sx={{ p: 3 }}>
      <RepoDetails repo={null} />
    </Paper>
  );
}
