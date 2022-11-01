import React, { useState } from "react";
import type { RepoEdge } from "../types";
import { Typography } from "@mui/material";

interface PaginationHandler {
  Component: React.ComponentType<any>;
  total: number;
  edges: RepoEdge[];
  refetch: (arg: any) => void;
  loading: boolean;
}

export default function PaginationHandler({
  Component,
  refetch,
  ...other
}: PaginationHandler) {
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(10);
  const { edges, loading } = other;

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
    <Component
      onChangePage={handleChangePage}
      onChangeRows={handleChangeRows}
      page={page}
      rows={rows}
      {...other}
    />
  );
}
