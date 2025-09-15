import DashboardOverview from "./DashboardOverview";
import DashboardLayout from "../../../layouts/DashboardLayout";
import Reports from "./Reports";
import ProtectedRoute from "../../auth/ProtectedRoute"; // import the protected route

const dashboardRoutes = [
  {
    path: "/dashboard",
    element: <ProtectedRoute />, // Parent layout
    children: [

      {
        element: <DashboardLayout />, // Dashboard layout
        children: [

          {
            index: true, // default route => /dashboard
            element: <DashboardOverview />,
          },
          {
            path: "reports",
            element: <Reports />,
          },
        ]

      },

    ],
  },
];

export default dashboardRoutes;
