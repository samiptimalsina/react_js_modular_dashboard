import DashboardOverview from "./DashboardOverview";
import DashboardLayout from "../../../layouts/DashboardLayout";
const dashboardRoutes = [
  {
    path: "/dashboard",
    element: <DashboardLayout />,   // Parent layout
    children: [
      {
        index: true,                // default route => /dashboard
        element: <DashboardOverview />, // ✅ will render in <Outlet />
      },
      // example extra child route
      // {
      //   path: "reports",
      //   element: <Reports />,
      // }
    ],
  },
];

export default dashboardRoutes;
