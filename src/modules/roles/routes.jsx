import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import RolePage from "./pages/RolePage";
const roleRoutes = [
    {
        path: '/roles',
        element:<DashboardLayout/>,
         Children: [
            { index: true, element: <RolePage/> },
         ]
        
    }
];

export default roleRoutes;