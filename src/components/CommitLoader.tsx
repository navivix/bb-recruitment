import { gql, useQuery } from "@apollo/client";
import PaginationHandler from "./PaginationHandler";
import CommitList from "./CommitList";
import { Navigate } from "react-router-dom";

const GET_COMMITS = gql`
  query GetCommits(
    $owner: String!
    $name: String!
    $first: Int!
    $after: String
    $before: String
  ) {
    repository(owner: $owner, name: $name) {
      defaultBranchRef {
        target {
          ... on Commit {
            history(first: $first, after: $after, before: $before) {
              totalCount
              edges {
                cursor
                node {
                  oid
                  message
                }
              }
            }
          }
        }
      }
    }
  }
`;

interface CommitLoaderProps {
  owner: string;
  name: string;
}

export default function CommitLoader({ owner, name }: CommitLoaderProps) {
  const { data, loading, error, refetch } = useQuery(GET_COMMITS, {
    variables: {
      owner,
      name,
      first: 10,
      after: null,
      before: null,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <Navigate to="/oops" />;

  console.log(data);

  return (
    <PaginationHandler
      Component={CommitList}
      total={data?.repository.defaultBranchRef.target.history.totalCount}
      edges={data?.repository.defaultBranchRef.target.history.edges}
      refetch={refetch}
      loading={loading}
    />
  );
}
