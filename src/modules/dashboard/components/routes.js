import DashboardOverview from "./DashboardOverview";
import DashboardLayout from "../../../layouts/DashboardLayout";
import Reports from "./Reports";

const dashboardRoutes = [
  {
    path: "/dashboard",
    element: <DashboardLayout />, // Parent layout
    children: [
      {
        index: true, // default route => /dashboard
        element: <DashboardOverview />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },
];

export default dashboardRoutes;
