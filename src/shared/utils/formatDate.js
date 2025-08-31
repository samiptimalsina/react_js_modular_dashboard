export const formatDate = (iso) => {
  if (!iso) return "-";
  const d = new Date(iso);
  return d.toLocaleDateString() + " " + d.toLocaleTimeString();
};
