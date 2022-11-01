import { TablePagination, List } from "@mui/material";
import RepoListItem from "./RepoListItem";
import type { RepoEdge } from "../types";

const getRepos = (arr: RepoEdge[]) => arr.map((el) => el.node);

interface RepoListProps {
  edges: RepoEdge[];
  total: number;
  page: number;
  rows: number;
  onChangePage: (page: number) => void;
  onChangeRows: (rows: number) => void;
}

export default function RepoList({
  edges,
  total,
  page,
  rows,
  onChangePage,
  onChangeRows,
}: RepoListProps) {
  const repos = getRepos(edges);

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
        {repos.map(({ nameWithOwner }) => (
          <RepoListItem key={nameWithOwner} name={nameWithOwner} />
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
