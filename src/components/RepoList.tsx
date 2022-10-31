import { useState } from "react";
import { TablePagination, Paper, List } from "@mui/material";
import RepoListItem from "./RepoListItem";

interface RepoListProps {
  names: string[];
  onChangePage: () => void;
  onChangeRows: () => void;
}

export default function RepoList({
  names,
  onChangePage,
  onChangeRows,
}: RepoListProps) {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
    onChangePage();
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    onChangeRows();
  };

  return (
    <Paper sx={{ p: 3 }}>
      <List>
        {names.map((name) => (
          <RepoListItem name={name} />
        ))}
      </List>
      <TablePagination
        count={names.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
