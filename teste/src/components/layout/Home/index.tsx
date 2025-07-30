import HeroSectionHome from "../../Hero/HeroSectionHome";
import FeaturedProperties from "../../property/FeaturedProperties";
import PropertyForm from "../../property/PropertyForm";
import TestimonialsSection from "../../Testimonials/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSectionHome />
      <FeaturedProperties />
      <TestimonialsSection title="Depoimentos de quem já realizou o sonho da casa própria"/>
      <PropertyForm />
    </>
  );
}