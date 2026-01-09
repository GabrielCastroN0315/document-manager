export function Sidebar() {
  return (
    <aside
      style={{
        position: "fixed",
        top: "64px", // altura do header
        left: 0,
        width: "240px",
        height: "calc(100vh - 64px)",
        backgroundColor: "#0f172a",
        color: "#e5e7eb",
        padding: "24px 16px",
        boxSizing: "border-box",
      }}
    >
      <nav style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <SidebarItem label="Dashboard" />
        <SidebarItem label="Documentos" />
        <SidebarItem label="Usuários" />
        <SidebarItem label="Relatórios" />
        <SidebarItem label="Configurações" />
      </nav>
    </aside>
  );
}

function SidebarItem({ label }: { label: string }) {
  return (
    <div
      style={{
        padding: "10px 12px",
        borderRadius: "6px",
        cursor: "pointer",
        backgroundColor: "transparent",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "#1e293b")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "transparent")
      }
    >
      {label}
    </div>
  );
}
