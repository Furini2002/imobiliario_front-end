import { createContext, useContext } from "react";

type Links = {
  home: string;
  sobrenos: string;
  anunciar: string;
  simular: string;
  facebook: string;
  instagram: string;
};

// valor inicial
export const LinksContext = createContext<Links | null>(null);

export function useLinks() {
  const context = useContext(LinksContext);
  if (!context) throw new Error("useLinks deve ser usado dentro do LinksContext.Provider");
  return context;
}
