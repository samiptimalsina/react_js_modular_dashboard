import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import useRolesStore from "../store/useRoleStore";
import RoleTable from "../components/RoleTable";
const RolePage = () => {
  const { roles, meta, loading, query, setQuery, loadRoles, deleteRole } = useRolesStore();
  const navigate = useNavigate(); 

  useEffect(() => {
    loadRoles();
  }, [query.page, query.limit]); 

  console.log("Roles:", roles);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Role Management</h1>
        <button
          onClick={() => navigate("/dashboard/roles/create")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          + Add Role
        </button>
      </div>
      <RoleTable
        roles={roles}
        meta={meta}
        loading={loading}
        query={query}
        setQuery={setQuery}
        deleteRole={deleteRole}
      />
    </div>
  );
};

export default RolePage;
