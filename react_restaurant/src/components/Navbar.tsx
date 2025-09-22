import { Link } from "react-router";
import tacoBackgroundImage from "@/assets/images/taco-background-icon.png";

export default function Navbar() {
  return (
    <div className={"bg-red-400 text-white p-4 shadow-md"}>
      <div className={"flex items-center justify-between"}>
        <img
          src={tacoBackgroundImage}
          alt="A delicious taco"
          className={"w-15 h-15"}
        />
        <h1 className={"text-xl font-bold"}>Tacos && Tacos</h1>
      </div>

      <nav className={"flex gap-4"}>
        <Link to={"/"} className={"hover:underline"}>
          Home
        </Link>
        <Link to={"/menu"} className={"hover:underline"}>
          Menu
        </Link>
        <Link to={"/hiring"} className={"hover:underline"}>
          Apply
        </Link>
      </nav>
    </div>
  );
}
