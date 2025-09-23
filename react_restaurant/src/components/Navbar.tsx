import { Link } from "react-router";
import tacoBackgroundImage from "@/assets/icons/taco-background-icon.png";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={"bg-red-400 text-white p-4 shadow-md"}>
      <div className={"flex items-center justify-between"}>
        <Link to={"/"}>
          <img
            src={tacoBackgroundImage}
            alt="A delicious taco"
            className={"w-15 h-15"}
          />
        </Link>

        <Link to={"/"}>
          <h1 className={"text-xl font-bold"}>Tacos && Tacos</h1>
        </Link>

        <button
          className={"md:hidden text-white text-3xl"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "x" : "☰"}
        </button>
      </div>

      <nav
        className={`flex-col gap-4 mt-2 md:flex md:flex-row md:mt-0 transition-all ${
          isOpen ? "flex" : "hidden"
        }`}
      >
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
