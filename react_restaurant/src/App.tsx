import { Outlet } from "react-router";

export default function App() {
  return (
    <div className={"flex flex-col min-h-screen"}>
      <header></header>

      <main className={"flex-grow container mx-auto p-6"}>
        <Outlet />
      </main>

      <footer className={"bg-blue-400 text-center p-4 text-sm text-gray-600"}>
        <p>Footer content</p>
      </footer>
    </div>
  );
}
