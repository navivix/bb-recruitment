import { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { PaginationHandler, RepoList } from "../components";
import { SearchBar } from "../components";
import { gql, useLazyQuery } from "@apollo/client";
import { Navigate } from "react-router-dom";

const SEARCH_REPOS = gql`
  query SearchRepos(
    $query: String!
    $first: Int!
    $after: String
    $before: String
  ) {
    search(
      query: $query
      first: $first
      after: $after
      before: $before
      type: REPOSITORY
    ) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            nameWithOwner
          }
        }
        cursor
      }
    }
  }
`;

export default function SearchPage() {
  const [searchString, setSearchString] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [searchRepos, { data, loading, error, refetch }] = useLazyQuery(
    SEARCH_REPOS,
    {
      notifyOnNetworkStatusChange: true,
    }
  );

  const handleChange = (val: string) => setSearchString(val);

  const handleSearch = () => {
    setHasSearched(true);
    searchRepos({ variables: { query: searchString, first: 10 } });
  };

  if (error) return <Navigate to="/oops" />;

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
        <Paper sx={{ p: 3 }}>
          {hasSearched ? (
            <PaginationHandler
              edges={data?.search.edges}
              total={data?.search.repositoryCount}
              refetch={refetch}
              loading={loading}
              Component={RepoList}
            />
          ) : (
            <Typography variant="body2">
              Type your search query and press enter
            </Typography>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}
