import { useNavigate } from "react-router";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div
      className={
        "flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-700"
      }
    >
      <div className={"text-red-400 text-3xl"}>
        <span className={"font-extrabold"}>404</span>: Route not found/supported
        🙁
      </div>
      <button
        className={
          "bg-red-400 px-2 py-1 rounded hover:opacity-85 hover:cursor-pointer hover:bg-blue-400"
        }
        onClick={() => navigate("/")}
      >
        Back To Safety
      </button>
    </div>
  );
}
