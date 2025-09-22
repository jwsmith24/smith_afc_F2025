import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import ErrorPage from "./view/ErrorPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />}>
          <Route path={"/menu"} element={<App />} />
          <Route path={"/hiring"} element={<App />} />
        </Route>
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
