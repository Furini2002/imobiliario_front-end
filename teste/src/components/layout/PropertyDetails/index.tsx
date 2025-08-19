import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import HighlightFormSection from "../../AdvertiseProperty/HighlightFormSection";
import InterestProperty from "../../property/InterestProperty";
import PhotoGallery from "../../property/PhotoGallery";
import PropertyDetailsSection from "../../property/PropertyDetailsSection";
import { getWhatsLink } from "../../Utils/getWhatsapp";
import api from "../../Utils/api";
import axios from "axios";
import { withBaseURL } from "../../Utils/url";

type PropertyImage = {
  id: number;
  image_path: string;
  is_cover?: boolean;
};

type PropertyApi = {
  status_id: number;
  id: number;
  title: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  land_area: string | number;
  built_area: string | number;
  price: number | string;
  address_line: string | null;
  neighborhood?: string | null;
  city?: string | null;
  state?: string | null;
  images?: PropertyImage[];
  features?: string;     
  address?: string;       
};

function toBRL(v: number | string) {
  const n = typeof v === "string" ? Number(v) : v;
  return Number.isFinite(n)
    ? (n as number).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    : String(v);
}

export default function PropertieDetails() {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<PropertyApi | null>(null);
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (!id) return;

    const ctrl = new AbortController();
    let mounted = true;

    async function fetchData() {
      setLoading(true);
      setErro("");

      try {
        const resProp = await api.get(`/properties/${id}`, { signal: ctrl.signal });
        if (!mounted) return;
        const p: PropertyApi = resProp.data?.data ?? resProp.data;
        setProperty(p);

        const resImgs = await api.get(`/properties/${id}/images`, { signal: ctrl.signal });
        if (!mounted) return;

        const items: PropertyImage[] = Array.isArray(resImgs.data?.data)
          ? resImgs.data.data
          : Array.isArray(resImgs.data)
          ? resImgs.data
          : [];

        let imgs = items
          .map((img) => withBaseURL(img.image_path))
          .filter((u) => typeof u === "string" && u.trim().length > 0);

        if (imgs.length === 0) imgs = ["/placeholder.jpg"];
        setPhotos(imgs);
      } catch (err: any) {
        if (axios.isCancel?.(err) || err?.code === "ERR_CANCELED" || err?.name === "CanceledError") {
          return;
        }
        console.error(err);
        if (mounted) setErro("Não foi possível carregar os dados do imóvel.");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchData();
    return () => {
      mounted = false;
      ctrl.abort();
    };
  }, [id]);

  const propsForDetails = useMemo(() => {
    const p = property;
    const addressParts = [
      p?.address ?? p?.address_line ?? "",
      p?.neighborhood ?? "",
      p?.city && p?.state ? `${p.city} - ${p.state}` : p?.city ?? ""
    ]
      .map((s) => (s ?? "").toString().trim())
      .filter(Boolean);

    const feats =
      typeof p?.features === "string"
        ? p!.features
            .split(/[.;\n]/)        
            .map((s) => s.trim())
            .filter(Boolean)
        : [];

    return {
      loading,                                      
      status: p?.status_id ?? 2,
      code: p?.id ?? 0,
      bedrooms: p?.bedrooms ?? 0,
      bathrooms: p?.bathrooms ?? 0,
      lotArea: p?.land_area ? `${p.land_area} m²` : "-",
      builtArea: p?.built_area ? `${p.built_area} m²` : "-",
      title: p?.title ?? "",
      description: p?.description ?? "",
      characteristics: feats,
      price: p?.price !== undefined ? toBRL(p.price) : "—",
      address: addressParts.join(", "),
    };
  }, [property, loading]);

  if (erro) return <p style={{ padding: 16, color: "crimson" }}>{erro}</p>;

  return (
    <>
      <PhotoGallery photos={photos} loading={loading}/>
      
      <PropertyDetailsSection {...propsForDetails} />

      <HighlightFormSection
        title="Não encontrou o que procurava ?"
        buttonLabel="Entre em contato, procuramos um imóvel para você"
        buttonLink={getWhatsLink("Olá, preciso de ajuda para encontrar meu imóvel")}
        target="_blank"
      />

      <InterestProperty />
    </>
  );
}
