import { useState } from "react";
import type { RepoEdge } from "../types";
import RepoList from "./RepoList";
import { Typography } from "@mui/material";

const getRepos = (arr: RepoEdge[]) => arr.map((el) => el.node);

interface RepoPaginationProps {
  total: number;
  edges: RepoEdge[];
  refetch: (arg: any) => void;
  loading: boolean;
}

export default function RepoPagination({
  total,
  edges,
  refetch,
  loading,
}: RepoPaginationProps) {
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(10);

  const handleChangePage = (newPage: number) => {
    if (newPage > page) {
      refetch({
        first: rows,
        after: edges.at(-1)?.cursor,
        before: null,
      });
    } else {
      refetch({
        first: rows,
        after: null,
        before: edges.at(0)?.cursor,
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

  if (loading || !edges)
    return <Typography variant="body1">Loading...</Typography>;

  return (
    <RepoList
      repos={getRepos(edges)}
      total={total}
      rows={rows}
      page={page}
      onChangePage={handleChangePage}
      onChangeRows={handleChangeRows}
    />
  );
}
