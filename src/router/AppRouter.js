import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import authRoutes from "../modules/auth/routes";
import dashboardRoutes from "../modules/dashboard/components/routes";
import landingRoutes from "../modules/landing/routes"

const renderRoutes = (routes) =>
  routes.map((route, index) => {
    if (route.index) {
      return <Route key={index} index element={route.element} />;
    }

    return (
      <Route key={index} path={route.path} element={route.element}>
        {route.children && renderRoutes(route.children)}
      </Route>
    );
  });

const AppRouter = () => {
  const allRoutes = [
    ...landingRoutes,
    ...authRoutes,
    ...dashboardRoutes,
  ];

  return (
    <Router>
      <Routes>{renderRoutes(allRoutes)}</Routes>
    </Router>
  );
};

export default AppRouter;
