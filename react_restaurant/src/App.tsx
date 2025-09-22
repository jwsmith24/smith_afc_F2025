import { Outlet } from "react-router";
import Navbar from "@/components/Navbar.tsx";

export default function App() {
  return (
    <div className={"flex flex-col h-screen"}>
      <header>
        <Navbar />
      </header>

      <main className={"flex-grow overflow-y-auto"}>
        <Outlet />
      </main>

      <footer
        className={"bg-blue-400 text-center p-4 m-0 text-sm text-gray-600"}
      >
        <p>Footer content</p>
      </footer>
    </div>
  );
}
