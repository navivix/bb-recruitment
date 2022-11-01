import { useParams } from "react-router-dom";
import { Paper, Typography } from "@mui/material";
import { RepoDetails } from "../components";
import { gql, useQuery } from "@apollo/client";
import { Navigate } from "react-router-dom";

const GET_REPO = gql`
  query GetRepo($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      nameWithOwner
      description
      defaultBranchRef {
        target {
          ... on Commit {
            history {
              totalCount
            }
          }
        }
      }
      issues {
        totalCount
      }
      releases {
        totalCount
      }
    }
  }
`;

export default function RepoPage() {
  const { owner, name } = useParams();
  const { data, loading, error } = useQuery(GET_REPO, {
    variables: {
      owner,
      name,
    },
  });

  if (error) return <Navigate to="/oops" />;

  return (
    <Paper sx={{ p: 3 }}>
      {loading ? (
        <Typography variant="body2">Loading...</Typography>
      ) : (
        <RepoDetails repo={data.repository} owner={owner!} name={name!} />
      )}
    </Paper>
  );
}
