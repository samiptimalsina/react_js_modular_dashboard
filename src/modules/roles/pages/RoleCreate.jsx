import React from 'react';
import { useNavigate } from "react-router-dom";
import useRolesStore from "../store/useRoleStore";
import InputField from '../../../shared/components/InputField';

const RoleCreate = () => {
  const { addRole, loadRoles } = useRolesStore();
  const [formData, setFormData] = React.useState({ name: "" });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError("Role name is required");
      return;
    }

    setLoading(true);
    setError("");
    try {
      await addRole(formData);
      await loadRoles();
      navigate("/dashboard/roles"); 
    } catch (err) {
      setError(err.message || "Failed to create role");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid mt-5">
      <h2 className="mb-4 font-bold text-2xl">Create New Role</h2>
      {error && <div className="alert alert-danger mb-3">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="col-md-6">
        <InputField
          label="Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Role name"
          className="form-control mb-3"
        />

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {loading ? "Saving..." : "Create Role"}
        </button>
         </div>

      </form>
    </div>
  );
};

export default RoleCreate;
