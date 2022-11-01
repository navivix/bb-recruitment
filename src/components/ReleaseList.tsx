import { List } from "@mui/material";
import ReleaseListItem from "./ReleaseListItem";
import React from "react";
import type { ReleaseEdge } from "../types";

const getReleases = (arr: ReleaseEdge[]) => arr.map((el) => el.node);

interface ReleaseListProps {
  edges: ReleaseEdge[];
}

export default function ReleaseList({ edges }: ReleaseListProps) {
  const releases = getReleases(edges);

  React.useEffect(() => console.log(edges, releases));

  return (
    <List>
      {releases.map((release) => (
        <ReleaseListItem key={release.tagName} release={release} />
      ))}
    </List>
  );
}
