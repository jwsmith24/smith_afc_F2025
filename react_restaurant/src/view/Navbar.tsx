import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className={"bg-blue-400 text-white p-4 shadow-md"}>
      <h1 className={"text-xl font-bold"}>Tacos && Tacos</h1>
      <nav>
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
