import api from "./api";

export const withBaseURL = (url?: string) => {
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;
  const base = api.defaults.baseURL?.replace(/\/api\/v1$/, "") ?? "";
  // garante a barra entre base e caminho relativo
  return `${base}${url.startsWith("/") ? "" : "/"}${url}`;
};