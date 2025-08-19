import FeaturesSectionAboustUs from "../../AboutUs/FeatureSectionAboutUs";
import HeroSectionAbout from "../../AboutUs/HeroSectionAbout";
import TeamSection from "../../AboutUs/TeamSection";
import HighlightFormSection from "../../AdvertiseProperty/HighlightFormSection";
import TestimonialsSection from "../../Testimonials/TestimonialsSection";

export default function AboutUs() {
  return (
    <>
      <HeroSectionAbout />
      <FeaturesSectionAboustUs />
      <TestimonialsSection title="Depoimentos de quem já realizou o sonho da casa própria" />
      <TeamSection />
      <HighlightFormSection
        title="Veja nossos imóveis disponíveis para a sua região"
        buttonLabel="Confira nossos imóveis disponíveis"
        buttonLink="/buscar"
      />
    </>
  );
}
