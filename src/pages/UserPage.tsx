import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { UserPageHeader, RepoList } from "../components";

export default function UserPage() {
  const { username } = useParams();

  const handleChangePage = () => null;

  const handleChangeRows = () => null;

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <UserPageHeader username={username} />
      </Grid>
      <Grid item>
        <RepoList
          names={[]}
          onChangePage={handleChangePage}
          onChangeRows={handleChangeRows}
        />
      </Grid>
    </Grid>
  );
}
