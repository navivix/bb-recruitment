import { gql, useQuery } from "@apollo/client";
import PaginationHandler from "./PaginationHandler";
import ReleaseList from "./ReleaseList";
import { Navigate } from "react-router-dom";

const GET_RELEASES = gql`
  query GetReleases(
    $owner: String!
    $name: String!
    $first: Int!
    $after: String
    $before: String
  ) {
    repository(owner: $owner, name: $name) {
      releases(first: $first, after: $after, before: $before) {
        totalCount
        edges {
          node {
            tagName
          }
          cursor
        }
      }
    }
  }
`;

interface ReleaseLoaderProps {
  owner: string;
  name: string;
}

export default function ReleaseLoader({ owner, name }: ReleaseLoaderProps) {
  const { data, loading, error, refetch } = useQuery(GET_RELEASES, {
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
      Component={ReleaseList}
      total={data?.repository.releases.totalCount}
      edges={data?.repository.releases.edges}
      refetch={refetch}
      loading={loading}
    />
  );
}
