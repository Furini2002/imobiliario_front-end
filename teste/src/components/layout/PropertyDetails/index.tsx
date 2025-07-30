import HighlightFormSection from "../../AdvertiseProperty/HighlightFormSection";
import InterestProperty from "../../property/InterestProperty";
import PhotoGallery from "../../property/PhotoGallery";
import PropertyDetailsSection from "../../property/PropertyDetailsSection";
import { getWhatsLink } from "../../Utils/getWhatsapp";

const images = [
  "/src/assets/casa1.jpg",
  "/src/assets/casa1.jpg",
  "/src/assets/casa1.jpg",
  "/src/assets/casa1.jpg",
  "/src/assets/casa1.jpg",
  "/src/assets/casa1.jpg",
  "/src/assets/casa1.jpg",
  "/src/assets/casa1.jpg",
];

const propertyInfo = {
  code: "9632",
  bedrooms: 4,
  bathrooms: 4,
  lotArea: "80 m²",
  builtArea: "60 m²",
  title: "Casa no Sta. Felicidade de 291 m² com 3 quartos",
  description: `Esta impressionante casa de alto padrão, situada no Condomínio Green Garden I, oferece o equilíbrio perfeito entre sofisticação, segurança e a tranquilidade de estar em uma região a poucos minutos do centro de Santa Felicidade.

A casa conta com 03 suítes, sendo uma master com closet, hidromassagem e banheiro adicional. Além disso, dispõe de um terraço exclusivo, que oferece uma vista deslumbrante do bosque nativo da região.`,
  characteristics: [
    "Sala de estar",
    "Churrasqueira",
    "Lavanderia",
    "Edícula",
    "Cozinha e sala de estar integrados",
  ],
  price: "R$ 150.000,00",
  address: "Rua Brigadeiro Faria Lima, 123, centro - Francisco Alves - PR",
  mapImage: "/assets/mapa_exemplo.png",
};

export default function PropertieDetails() {
  return (
    <>
      <PhotoGallery photos={images} />
      <PropertyDetailsSection {...propertyInfo} />
      <HighlightFormSection
        title="Não encontrou o que procurava ?"
        buttonLabel="Entre em contato, procuramos um imóvel para você"
        buttonLink={getWhatsLink(
          "Olá, preciso de ajuda para encontrar meu imóvel"
        )}
        target="_blank"
        rel="noopener noreferrer"
      />
      <InterestProperty />
    </>
  );
}
