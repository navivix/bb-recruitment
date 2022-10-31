import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Grid, Typography, Paper } from "@mui/material";
import { UserPageHeader, RepoList } from "../components";
import { gql, useQuery } from "@apollo/client";

const getNames = (arr: { node: { name: string } }[]) =>
  arr.map((el) => el.node.name);

const GET_USER_REPOS = gql`
  query GetUserRepos(
    $login: String!
    $first: Int!
    $after: String
    $before: String
  ) {
    user(login: $login) {
      repositories(first: $first, after: $after, before: $before) {
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
  const { loading, error, data, refetch } = useQuery(GET_USER_REPOS, {
    variables: {
      login: username,
      first: 10,
      after: null,
      before: null,
    },
  });

  const handleChangePage = (newPage: number) => {
    const { edges } = data.user.repositories;
    if (newPage > page) {
      refetch({
        first: rows,
        after: edges.at(-1).cursor,
        before: null,
      });
    } else {
      refetch({
        first: rows,
        after: null,
        before: edges.at(0).cursor,
      });
    }
    setPage(newPage);
  };

  const handleChangeRows = (newRows: number) => {
    setRows(newRows);
    setPage(0);
    refetch({
      first: newRows,
      after: null,
      before: null,
    });
  };

  if (error) return <Navigate to="/oops" />;

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
