import Navbar from "@/components/Navbar.tsx";
import { Outlet } from "react-router";
import Footer from "@/components/Footer.tsx";

function App() {
  return (
    <div
      className={"bg-slateGray h-screen w-screen min-w-[400px] flex flex-col"}
    >
      <Navbar />
      <main className={"flex-1"}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
