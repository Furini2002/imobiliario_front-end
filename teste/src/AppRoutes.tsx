import { Route, Routes } from "react-router-dom";
import LayoutPadrao from "./components/layout/layoutPadrao";
import Home from "./components/layout/Home";
import AboutUs from "./components/layout/AboutUS";
import FinanceSimulation from "./components/layout/FinanceSimulation";
import AdvertiseProperty from "./components/layout/AdvertiseProperty";
import PropertiesPage from "./components/layout/PropertiesPage";
import PropertieDetails from "./components/layout/PropertyDetails";
import NotFoundPage from "./components/layout/NotFoundPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<LayoutPadrao />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<AboutUs />} />
        <Route path="/simular" element={<FinanceSimulation />} />
        <Route path="/anunciar" element={<AdvertiseProperty />} />
        <Route path="/busca" element={<PropertiesPage />} />
        <Route path="/details" element={<PropertieDetails />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
