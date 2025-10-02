export default function Home() {
  return (
    <div className={"flex flex-col items-center "}>
      <img src="/logo-only.png" alt="brightforge logo" className={"w-1/2"} />
      <div className={"flex flex-col gap-4 items-center"}>
        <h1 className={"text-brightSilver"}>Welcome to Brightforge</h1>
        <button
          className={
            "bg-forgeOrange px-2 py-1 rounded-lg " +
            "hover:cursor-pointer active:opacity-70 hover:scale-105 " +
            "animate ease-in-out transition-all font-semibold"
          }
        >
          Behold Innovation
        </button>
      </div>
    </div>
  );
}
