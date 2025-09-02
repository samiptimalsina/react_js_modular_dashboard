// src/router/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import authRoutes from '../modules/auth/routes';
import dashboardRoutes from '../modules/dashboard/components/routes';


const AppRouter = () => {
  const allRoutes = [
    ...authRoutes,
    ...dashboardRoutes
  ];

  return (
    <Router>
      <Routes>
        {allRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRouter;
