import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import ErrorPage from "./view/ErrorPage.tsx";

import HiringForm from "@/view/HiringForm.tsx";
import MenuView from "@/view/MenuView.tsx";
import HomeView from "@/view/HomeView.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />}>
          <Route path={"/"} element={<HomeView />} />
          <Route path={"/menu"} element={<MenuView />} />
          <Route path={"/hiring"} element={<HiringForm />} />
        </Route>
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
