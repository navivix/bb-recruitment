import { gql, useQuery } from "@apollo/client";
import PaginationHandler from "./PaginationHandler";
import IssueList from "./IssueList";
import { Navigate } from "react-router-dom";

const GET_ISSUES = gql`
  query GetCommits(
    $owner: String!
    $name: String!
    $first: Int!
    $after: String
    $before: String
  ) {
    repository(owner: $owner, name: $name) {
      issues(first: $first, after: $after, before: $before) {
        totalCount
        edges {
          node {
            title
          }
          cursor
        }
      }
    }
  }
`;

interface IssueLoaderProps {
  owner: string;
  name: string;
}

export default function IssueLoader({ owner, name }: IssueLoaderProps) {
  const { data, loading, error, refetch } = useQuery(GET_ISSUES, {
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

  return (
    <PaginationHandler
      Component={IssueList}
      total={data?.repository.issues.totalCount}
      edges={data?.repository.issues.edges}
      refetch={refetch}
      loading={loading}
    />
  );
}
