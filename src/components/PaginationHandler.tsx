import React, { useState } from "react";
import { Typography, TablePagination } from "@mui/material";

interface PaginationHandlerProps {
  Component: React.ComponentType<any>;
  total: number;
  edges: any[];
  refetch: (arg: any) => void;
  loading: boolean;
}

export default function PaginationHandler({
  Component,
  refetch,
  total,
  edges,
  loading,
}: PaginationHandlerProps) {
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
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

  const handleChangeRows = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newRows = parseInt(event.target.value, 10);
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
    <>
      <Component edges={edges} />
      <TablePagination
        count={total}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rows}
        onRowsPerPageChange={handleChangeRows}
      />
    </>
  );
}
