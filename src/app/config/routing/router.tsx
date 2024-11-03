import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { BASIC_PATHS, ERROR_PATHS } from "@/app/config/routing/pathes.ts";
import ErrorBoundaryLayout from "@/app/config/routing/error-boundary-layout.tsx";

const routerOptions = {
  basename: "/",
};

const routes = [
  {
    path: BASIC_PATHS.HOME,
    caseSensitive: true,
    Component: lazy(() => import("@/pages/home")),
  },
  {
    path: BASIC_PATHS.ABOUT,
    caseSensitive: true,
    Component: lazy(() => import("@/pages/about")),
  },
  {
    path: ERROR_PATHS.NOT_FOUND,
    caseSensitive: true,
    Component: lazy(() => import("@/pages/not-found")),
  },
];

const router = createBrowserRouter(
  [{ element: <ErrorBoundaryLayout />, children: routes }],
  routerOptions,
);

export default router;
