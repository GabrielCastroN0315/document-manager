export function Header() {
  return (
    <header
      style={{
        width: "100%",
        height: "64px",
        backgroundColor: "#0a2540", // azul escuro profissional
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        boxSizing: "border-box",
      }}
    >
      <img
        src="/logo-bluecorp.png"
        alt="BlueCorp"
        style={{ height: "90px" }}
      />

      <h1
        style={{
          color: "#ffffff",
          marginLeft: "12px",
          fontSize: "20px",
          fontWeight: 600,
        }}
      >
        BlueCorp
      </h1>
      <button
  style={{
    marginLeft: "auto",
    background: "transparent",
    border: "1px solid #ffffff33",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  }}
>
  Sair
</button>
    </header>
  );
}
