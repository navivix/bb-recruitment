import { gql, useQuery } from "@apollo/client";

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
                  author {
                    name
                  }
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
  const { data, loading, error } = useQuery(GET_COMMITS, {
    variables: {
      owner,
      name,
      first: 10,
      after: null,
      before: null,
    },
  });

  console.log(data);

  return null;
}
