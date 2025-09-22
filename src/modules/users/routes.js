import ProtectedRoute from "../auth/ProtectedRoute";
import DashboardLayout from "../../layouts/DashboardLayout";
import UsersPage from "./pages/ UsersPage";
import UserCreatePage from "./pages/UserCreatePage";
import UserEditPage from "./pages/UserEditPage";

const users = [
    {
        path: "/dashboard",
        element: <ProtectedRoute />,
        children: [
            {
                path: "users",
                element: <DashboardLayout />,
                children: [
                    { index: true, element: <UsersPage /> },
                    { path: "create", element: <UserCreatePage /> },
                    { path: "edit/:id", element: <UserEditPage /> }, 
                ],
            },
        ],
    },

];

export default users;
