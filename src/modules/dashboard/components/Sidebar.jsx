import React from "react";
import { NavLink } from "react-router-dom";

const dashboardBase = "/dashboard";

const menuItems = [
  { name: "Dashboard", path: "" }, // root of /dashboard
  { name: "Users", path: "users" },
  { name: "Roles", path: "roles" },
  { name: "Permissions", path: "permissions" },
];

const Sidebar = () => {
  return (
    <aside className="bg-white border-end vh-100 p-3" style={{ width: "250px" }}>
      <h2 className="fs-4 fw-bold mb-4 text-danger">CRM</h2>
      <ul className="nav flex-column">
        {menuItems.map((item, index) => (
          <li className="nav-item mb-2" key={index}>
            <NavLink
              to={`${dashboardBase}/${item.path}`}
              end={item.path === ""}
              className={({ isActive }) =>
                `nav-link ${
                  isActive
                    ? "active fw-semibold text-primary"
                    : "text-dark"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
