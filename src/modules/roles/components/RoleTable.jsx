import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { FaEdit, FaTrash } from "react-icons/fa";

const RoleTable = ({ roles, meta, loading, query, setQuery, deleteRole, onEdit, loadRoles }) => {
  const [filterText, setFilterText] = useState("");

  // Call loadRoles when search text changes (server-side)
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setQuery({ search: filterText, page: 1 }); // Reset to page 1 on search
      loadRoles(); // Reload data from server
    }, 500); // Delay to avoid too many requests while typing

    return () => clearTimeout(delayDebounce);
  }, [filterText]); // eslint-disable-line react-hooks/exhaustive-deps

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: "80px",
    },
    {
      name: "Role Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row) => new Date(row.created_at).toLocaleString(),
      sortable: true,
    },
    {
      name: "Updated At",
      selector: (row) => new Date(row.updated_at).toLocaleString(),
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(row.id)}
            className="flex items-center gap-1 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            <FaEdit size={14} />
          </button>
          <button
            onClick={() => deleteRole(row.id)}
            className="flex items-center gap-1 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            <FaTrash size={14} />
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={roles}
      progressPending={loading}
      pagination
      paginationServer
      paginationTotalRows={meta?.total || 0}
      paginationPerPage={query.limit}
      paginationDefaultPage={query.page}
      onChangePage={(page) => setQuery({ page })}
      onChangeRowsPerPage={(newLimit) =>
        setQuery({ limit: newLimit, page: 1 })
      }
      highlightOnHover
      striped
      subHeader
      subHeaderComponent={
        <input
          type="text"
          placeholder="Search Role"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="border p-2 rounded w-full md:w-1/6 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      }
      subHeaderAlign="right"
    />
  );
};

export default RoleTable;
