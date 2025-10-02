import Navbar from "@/components/Navbar.tsx";
import { Outlet } from "react-router";

function App() {
  return (
    <div className={"bg-slateGray h-screen w-screen flex flex-col"}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
