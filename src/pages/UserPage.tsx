import { useParams, Navigate } from "react-router-dom";
import { Grid, Paper } from "@mui/material";
import { UserPageHeader, RepoPagination } from "../components";
import { gql, useQuery } from "@apollo/client";

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
  const { loading, error, data, refetch } = useQuery(GET_USER_REPOS, {
    variables: {
      login: username,
      first: 10,
      after: null,
      before: null,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <Navigate to="/oops" />;

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <UserPageHeader username={username} />
      </Grid>
      <Grid item>
        <Paper sx={{ p: 3 }}>
          <RepoPagination
            edges={data?.user.repositories.edges}
            total={data?.user.repositories.totalCount}
            refetch={refetch}
            loading={loading}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}
