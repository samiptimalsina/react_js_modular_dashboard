// src/modules/users/pages/UserEditPage.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById, updateUser } from "../service/userService";
import InputField from "../../../shared/components/InputField";
import Button from "../../../shared/components/Button";

const UserEditPage = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserById(id);
      setFormData({ name: user.name, email: user.email });
    };
    fetchUser();
  }, [id]);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(id, formData);
    navigate("/users");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit User</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <InputField
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <InputField
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <Button
          type="submit"
          className="btn btn-success w-100"
        >
          Update
        </Button>
      </form>
    </div>
  );
};

export default UserEditPage;
