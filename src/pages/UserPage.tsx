import { useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography, Paper } from "@mui/material";
import { UserPageHeader, RepoList } from "../components";
import { gql, useQuery } from "@apollo/client";

const getNames = (arr: { node: { name: string } }[]) =>
  arr.map((el) => el.node.name);

const GET_USER_REPOS = gql`
  query GetUserRepos($login: String!, $first: Int!, $after: String) {
    user(login: $login) {
      repositories(first: $first, after: $after) {
        totalCount
        edges {
          node {
            name
          }
          cursor
        }
      }
    }
  }
`;

export default function UserPage() {
  const { username } = useParams();
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(10);
  const [cursors, setCursors] = useState<(null | string)[]>([null]);
  const { loading, error, data } = useQuery(GET_USER_REPOS, {
    variables: {
      login: username,
      first: rows,
      after: cursors[page],
    },
  });

  const handleChangePage = (newPage: number) => {
    const { edges } = data.user.repositories;
    if (newPage > page && newPage >= cursors.length) {
      setCursors([...cursors, edges.at(-1).cursor]);
    }
    setPage(newPage);
  };

  const handleChangeRows = (rows: number) => {
    setRows(rows);
    setPage(0);
    setCursors([null]);
  };

  if (error) return null;

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <UserPageHeader username={username} />
      </Grid>
      <Grid item>
        <Paper sx={{ p: 3 }}>
          {loading ? (
            <Typography variant="body2">Loading...</Typography>
          ) : (
            <RepoList
              names={getNames(data.user.repositories.edges)}
              total={data.user.repositories.totalCount}
              rows={rows}
              page={page}
              onChangePage={handleChangePage}
              onChangeRows={handleChangeRows}
            />
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}
