import ProtectedRoute from "../auth/ProtectedRoute";
import DashboardLayout from "../../layouts/DashboardLayout";
import UsersPage from "./pages/ UsersPage";
import UserCreatePage from "./pages/UserCreatePage";
import UserEditPage from "./pages/UserEditPage";

const users = [
    {
        path: "/dashboard",
        element: <ProtectedRoute />, // protect all dashboard routes
        children: [
            {
                path: "users", // /dashboard/users
                element: <DashboardLayout />, // wrap inside dashboard
                children: [
                    { index: true, element: <UsersPage /> },       // /dashboard/users
                    { path: "create", element: <UserCreatePage /> }, // /dashboard/users/create
                    { path: ":id/edit", element: <UserEditPage /> } // /dashboard/users/:id/edit
                ],
            },
        ],
    },
];

export default users;
