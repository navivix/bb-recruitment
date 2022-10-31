import { useState } from "react";
import { TablePagination, Paper, List } from "@mui/material";
import RepoListItem from "./RepoListItem";

interface RepoListProps {
  names: string[];
  total: number;
  page: number;
  rows: number;
  onChangePage: (page: number) => void;
  onChangeRows: (rows: number) => void;
}

export default function RepoList({
  names,
  total,
  page,
  rows,
  onChangePage,
  onChangeRows,
}: RepoListProps) {
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    onChangePage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const rows = parseInt(event.target.value, 10);
    onChangeRows(rows);
  };

  return (
    <>
      <List>
        {names.map((name) => (
          <RepoListItem name={name} />
        ))}
      </List>
      <TablePagination
        count={total}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rows}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
