// src/modules/users/pages/UserCreatePage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../../shared/components/InputField";
import Button from "../../../shared/components/Button";
// import { createUser } from "../services/userService";

const UserCreatePage = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("User created:", formData);
      navigate("/dashboard/users"); 
    } catch (error) {
      console.error("Error creating user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5" >
      <h2 className="mb-4 fw-bold">Create User</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
          className="form-control mb-3"
        />

        <InputField
          label="User Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter user email"
          className="form-control mb-3"
        />

        <Button
          type="submit"
          disabled={loading}
          className="btn btn-success w-100"
        >
          {loading ? "Creating..." : "Create"}
        </Button>
      </form>
    </div>
  );
};

export default UserCreatePage;
