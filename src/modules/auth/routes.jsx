
import { lazy } from "react";


const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));


const authRoutes = [
  
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

export default authRoutes;
