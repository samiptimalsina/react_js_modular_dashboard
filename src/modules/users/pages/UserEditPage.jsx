// src/modules/users/pages/UserEditPage.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById, updateUser } from "../service/userService";
import InputField from "../../../shared/components/InputField";
import Button from "../../../shared/components/Button";

const UserEditPage = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUserById(id);
        console.log("Fetched user:", user); 
        setFormData({ name: user.name, email: user.email });
      } catch (err) {
        console.error("Error fetching user:", err);
        setError("Failed to load user data.");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      await updateUser(id, formData);
      navigate("/dashboard/users");
    } catch (err) {
      console.error("Error updating user:", err);
      setError("Failed to update user. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-center mt-5">Loading user...</p>;

  return (
    <div className="container-fluid mt-5">
      <h2 className="mb-4 fw-bold">Edit User</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
          className="form-control mb-3"
          required
        />

        <InputField
          label="User Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter user email"
          className="form-control mb-3"
          required
        />

        <Button
          type="submit"
          disabled={saving}
          className="btn btn-success w-100"
        >
          {saving ? "Updating..." : "Update"}
        </Button>
      </form>
    </div>
  );
};

export default UserEditPage;
