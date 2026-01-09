import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Sidebar />

      <main
        style={{
          marginTop: "64px",
          marginLeft: "240px",
          padding: "24px",
          backgroundColor: "#f8fafc",
          minHeight: "100vh",
        }}
      >
        {children}
      </main>
    </>
  );
}
