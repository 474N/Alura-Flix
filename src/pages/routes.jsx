import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasePage from "./BasePage"
import Home from "./Home";
import Create from "./Create";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;