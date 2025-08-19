import { Route, Routes } from "react-router-dom";
import LayoutPadrao from "./components/layout/layoutPadrao";
import Home from "./components/layout/Home";
import AboutUs from "./components/layout/AboutUS";
import FinanceSimulation from "./components/layout/FinanceSimulation";
import AdvertiseProperty from "./components/layout/AdvertiseProperty";
import PropertiesPage from "./components/layout/PropertiesPage";
import PropertieDetails from "./components/layout/PropertyDetails";
import NotFoundPage from "./components/layout/NotFoundPage";
import ScrollToTop from "./components/Utils/scrollToTop";

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<LayoutPadrao />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<AboutUs />} />
          <Route path="/simular" element={<FinanceSimulation />} />
          <Route path="/anunciar" element={<AdvertiseProperty />} />
          <Route path="/buscar" element={<PropertiesPage />} />
          <Route path="/imovel/:id" element={<PropertieDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
