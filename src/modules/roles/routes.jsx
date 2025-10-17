import React from "react";
import ProtectedRoute from "../auth/ProtectedRoute";
import DashboardLayout from "../../layouts/DashboardLayout";
import RolePage from "./pages/RolePage";
import RoleCreate from "./pages/RoleCreate";
import RoleEdit from "./pages/RoleEdit";


const roleRoutes = [
    {
        path: "/dashboard",
        element: <ProtectedRoute />,
        children: [
            {
                path: "roles",
                element: <DashboardLayout />,
                children: [
                    { index: true, element: <RolePage /> },
                    // Add create/edit pages if needed
                    { path: "create", element: <RoleCreate /> },
                    { path: "edit/:id", element: <RoleEdit /> },
                ],
            },
        ],
    },
];

export default roleRoutes;
