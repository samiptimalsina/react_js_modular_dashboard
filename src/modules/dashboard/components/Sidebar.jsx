import React from "react";
import { NavLink } from "react-router-dom";

const dashboardBase = "/dashboard";

const menuItems = [
  { name: "Dashboard", path: "" }, // root of /dashboard
  // { name: "Deposit", path: "deposit" },
  { name: "Users", path: "users" },
  { name: "Roles", path: "roles" },
  { name: "Permissions", path: "permissions" },
  // { name: "Stake", path: "stake" },
  // { name: "Withdraw Reward", path: "withdraw" },
  // { name: "Airdrop", path: "airdrop" },
  // { name: "Team", path: "team" },
  // { name: "Reward", path: "reward" },
  // { name: "Setting", path: "setting" },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-6 text-red-500">CRM</h2>
      <ul className="space-y-3">
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={`${dashboardBase}/${item.path}`}
              end={item.path === ""} // exact match only for root
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${
                  isActive
                    ? "bg-purple-100 text-purple-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
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
