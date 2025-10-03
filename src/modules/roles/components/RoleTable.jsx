import React from "react";
import DataTable from "react-data-table-component";

const RoleTable = ({ roles, meta, loading, query, setQuery, deleteRole }) => {
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
      name: "Actions",
      cell: (row) => (
        <button
          onClick={() => deleteRole(row.id)}
          className="px-2 py-1 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      ),
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
    />
  );
};

export default RoleTable;
