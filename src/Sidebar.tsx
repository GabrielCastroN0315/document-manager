export function Sidebar() {
  return (
    <aside
      style={{
        width: "220px",
        backgroundColor: "#f4f6f8",
        height: "calc(100vh - 64px)",
        padding: "16px",
        boxSizing: "border-box",
        borderRight: "1px solid #ddd",
      }}
    >
      <p style={{ fontWeight: 600, marginBottom: "12px" }}>
        Menu
      </p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: "8px" }}>
          📄 Documentos
        </li>

        <li style={{ marginBottom: "8px" }}>
          ➕ Novo Documento
        </li>
      </ul>
    </aside>
  );
}
