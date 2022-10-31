import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./components/layout";
import { UserPage, SearchPage, RepoPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <SearchPage />,
      },
      {
        path: "user/:username",
        element: <UserPage />,
      },
      {
        path: "repository/:repoName",
        element: <RepoPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <CssBaseline />
    <RouterProvider router={router} />
  </>
);
