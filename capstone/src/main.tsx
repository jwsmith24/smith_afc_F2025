import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Inventory from "@/pages/Inventory.tsx";
import Home from "@/pages/Home.tsx";
import About from "@/pages/About.tsx";
import CreateWidgetForm from "@/components/widgets/CreateWidgetForm.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/inventory"} element={<Inventory />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/test-form"} element={<CreateWidgetForm />} />
        </Route>
      </Routes>
      <Toaster richColors position={"bottom-right"} />
    </BrowserRouter>
  </StrictMode>,
);
