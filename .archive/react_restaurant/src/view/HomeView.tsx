import tacoBanner from "@/assets/images/taco-banner.png";

export default function HomeView() {
  return (
    <div
      className={
        "h-full flex flex-col items-center justify-center bg-gray-700 taco-bg gap-4"
      }
    >
      <img
        src={tacoBanner}
        alt="Delicious taco banner"
        className={"w-1/2 border-4 rounded border-red-400 shadow-xl"}
      />
      <div className={"text-3xl font-bold text-white underline"}>
        Welcome to Tacos && Tacos
      </div>
    </div>
  );
}
