import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TypePage from "./pages/typePage/TypePage";
import Landing from "./pages/landing/Landing";
import DrinkPage from "./pages/drinkPage/DrinkPage";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Landing />} />
          <Route path="/:type" element={<TypePage />} />
          <Route path="/:type/:id" element={<DrinkPage />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
