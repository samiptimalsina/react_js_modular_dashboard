// src/modules/users/components/UserForm.jsx
import React, { useEffect, useState } from "react";

const UserForm = ({ initial = null, onCancel = () => {}, onSave }) => {
  const [form, setForm] = useState({ name: "", email: "", status: "active", password: "" });
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initial) {
      setForm((f) => ({ ...f, name: initial.name || "", email: initial.email || "", status: initial.status || "active" }));
    } else {
      setForm({ name: "", email: "", status: "active", password: "" });
    }
  }, [initial]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name required";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email required";
    if (!initial && form.password.length < 6) e.password = "Password min 6 chars";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSaving(true);
    try {
      await onSave(form); // parent handles create/update via store
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-2">
      <h3 className="text-lg font-semibold">{initial ? "Edit User" : "Create User"}</h3>

      <div>
        <input name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" className="w-full border p-2 rounded"/>
        {errors.name && <div className="text-sm text-red-600">{errors.name}</div>}
      </div>

      <div>
        <input name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="w-full border p-2 rounded"/>
        {errors.email && <div className="text-sm text-red-600">{errors.email}</div>}
      </div>

      {!initial && (
        <div>
          <input name="password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Password (min 6)" className="w-full border p-2 rounded"/>
          {errors.password && <div className="text-sm text-red-600">{errors.password}</div>}
        </div>
      )}

      <div>
        <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="border p-2 rounded w-full">
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div className="flex gap-2">
        <button type="submit" disabled={saving} className="bg-green-600 text-white px-4 py-2 rounded">
          {saving ? "Saving..." : (initial ? "Update" : "Create")}
        </button>
        <button type="button" onClick={onCancel} className="px-4 py-2 border rounded">Cancel</button>
      </div>
    </form>
  );
};

export default UserForm;
