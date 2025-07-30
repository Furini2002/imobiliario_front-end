import AdvertisePropertySection from "../../AdvertiseProperty/AdvertisePropertySection/indedx";
import HighlightFormSection from "../../AdvertiseProperty/HighlightFormSection";
import TestimonialsSection from "../../Testimonials/TestimonialsSection";

export default function AdvertiseProperty() {
  return (
    <>
      <AdvertisePropertySection />
      <TestimonialsSection title="Proprietários que confiaram em nós" />
      <HighlightFormSection
        title="Preencha o formulário e anuncie já seu imóvel"
        buttonLabel="Preencher formulário"
        buttonLink="#formulario"
        onButtonClick={(e) => {
          e.preventDefault();
          const el = document.querySelector("#formulario");
          if (el) el.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            const input = el?.querySelector("input, textarea, select");
            if (input) (input as HTMLElement).focus();
          }, 500);
        }}
      />
    </>
  );
}
