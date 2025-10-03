
const RoleEdit = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch role data
  useEffect(() => {
    const fetchRole = async () => {
      try {
        const role = await getRoleById(id);
        setFormData({ name: role.name, description: role.description });
      } catch (err) {
        console.error("Error fetching role:", err);
        setError("Failed to load role data.");
      } finally {
        setLoading(false);
      }
    };
    fetchRole();
  }, [id]);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      await updateRole(id, formData);
      navigate("/dashboard/roles");
    } catch (err) {
      console.error("Error updating role:", err);
      setError("Failed to update role. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-center mt-5">Loading role...</p>;

  return (
    <div className="container-fluid mt-5">
      <h2 className="mb-4 fw-bold">Edit Role</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter role name"
          className="form-control mb-3"
          required
        />

        <InputField
          label="Description"
          name="description"
          type="text"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter role description"
          className="form-control mb-3"
        />

        <button type="submit" className="btn btn-primary" disabled={saving}>
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default RoleEdit;