import React, { useEffect } from "react";
import useRolesStore from "../store/useRoleStore";
import RoleTable from "../components/RoleTable";

const RolePage = () => {
  const {
    roles,
    meta,
    loading,
    error,
    query,
    loadRoles,
    setQuery,
    deleteRole,
  } = useRolesStore();

  // Load roles when query changes
  useEffect(() => {
    loadRoles();
  }, [query.page, query.limit, query.search]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Role Management</h1>

      {error && <p className="text-red-500">{error}</p>}

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
