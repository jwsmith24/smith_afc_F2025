import { Outlet } from "react-router";
import Navbar from "@/components/Navbar.tsx";
import Footer from "@/components/Footer.tsx";

export default function App() {
  return (
    <div className={"flex flex-col h-screen"}>
      <header>
        <Navbar />
      </header>

      <main className={"flex-grow"}>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
