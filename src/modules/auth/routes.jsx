import { lazy } from "react";
import PublicRoute from "./PublicRoute";

const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));

const authRoutes = [
  {
    path: "/",
    element: <PublicRoute />,   // wrapper
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];

export default authRoutes;
