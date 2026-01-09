import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

function App() {
  return (
    <>
      <Header />

      <div
        style={{
          display: "flex",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <Sidebar />

        <main
          style={{
            flex: 1,
            padding: "24px",
            backgroundColor: "#fafafa",
          }}
        >
          <h2>Dashboard</h2>
          <p>Conteúdo vindo do backend vai aparecer aqui.</p>
        </main>
      </div>
    </>
  );
}

export default App;
