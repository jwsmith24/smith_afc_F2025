import Navbar from "@/components/Navbar.tsx";
import { Outlet } from "react-router";
import Footer from "@/components/Footer.tsx";

function App() {
  return (
    <div className={"bg-slateGray h-screen w-screen flex flex-col"}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
