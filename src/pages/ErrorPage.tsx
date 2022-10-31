import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as any;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#fafafa",
      }}
    >
      <Typography variant="h1">
        {error ? `${error.status} ${error.statusText}` : "Something went wrong"}
      </Typography>
    </Box>
  );
}
