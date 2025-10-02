import { Button } from "@/components/ui/button.tsx";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={"flex flex-col items-center "}>
      <img src="/logo-only.png" alt="brightforge logo" className={"w-1/2"} />
      <div
        className={
          "flex flex-col gap-4 items-center border border-transparent p-4 " +
          "rounded-xl bg-midnightSteel shadow-xl"
        }
      >
        <h1 className={"text-brightSilver"}>Welcome to Brightforge</h1>
        <Button
          className={
            "x-2 py-1 rounded-lg " +
            "hover:cursor-pointer active:opacity-70 hover:scale-105 " +
            "animate ease-in-out transition-all font-semibold" +
            "shadow-lg"
          }
          onClick={() => navigate("/inventory")}
        >
          Behold Innovation
        </Button>
      </div>
    </div>
  );
}
