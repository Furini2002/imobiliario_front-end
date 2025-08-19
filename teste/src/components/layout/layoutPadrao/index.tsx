import Header from "../../Header";
import Footer from "../../Footer";
import { Outlet } from "react-router-dom";
import { LinksContext } from "../../Utils/LinksContext";
import "./LayoutPadrao.css";

export default function LayoutPadrao() {
  const links = {
    home: "/",
    sobrenos: "/sobre",
    anunciar: "/anunciar",
    simular: "/simular",
    facebook: "https://facebook.com/seuPerfil",
    instagram: "https://instagram.com/seuPerfil",
  };

  return (
    <LinksContext.Provider value={links}>
      <div className="app-container">
        <Header />
        <main className="main-content" style={{ marginTop: "75px" }}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </LinksContext.Provider>
  );
}
