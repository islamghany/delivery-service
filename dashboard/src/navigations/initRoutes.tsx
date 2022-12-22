import { AuthLayout } from "@/layout/AuthLayout";
import HomeLayout from "@/layout/HomeLayout";
import Login from "@/pages/login";
import NotFound from "@/pages/NotFound";
import { Navigate, RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    element: <HomeLayout />,
    children: [],
  },
  {
    element: <AuthLayout />,

    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "404",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to="404" />,
  },
];

export default routes;
