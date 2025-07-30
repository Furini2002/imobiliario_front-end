import Header from "../../Header";
import Footer from "../../Footer";
import { Outlet } from "react-router-dom";
import { LinksContext } from "../../Utils/LinksContext";

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
      <Header />
      <main style={{ marginTop: "75px" }}>
        <Outlet />
      </main>
      <Footer />
    </LinksContext.Provider>
  );
}
