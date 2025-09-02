import React from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Deposit", path: "/deposit" },
  { name: "Stake", path: "/stake" },
  { name: "Withdraw Reward", path: "/withdraw" },
  { name: "Airdrop", path: "/airdrop" },
  { name: "Team", path: "/team" },
  { name: "Reward", path: "/reward" },
  { name: "Setting", path: "/setting" },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-6 text-red-500">Ruby Stake Wallet</h2>
      <ul className="space-y-3">
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
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
