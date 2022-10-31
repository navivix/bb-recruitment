import { useState } from "react";
import { Grid } from "@mui/material";
import { RepoList } from "../components";
import { SearchBar } from "../components";

export default function SearchPage() {
  const [searchString, setSearchString] = useState("");

  const handleChange = (val: string) => setSearchString(val);

  const handleSearch = () => null;

  const handleChangePage = () => null;

  const handleChangeRows = () => null;

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <SearchBar
          value={searchString}
          onChange={handleChange}
          onSearch={handleSearch}
        />
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
