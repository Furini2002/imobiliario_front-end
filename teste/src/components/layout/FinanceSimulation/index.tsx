import BenefitsSection from "../../FinanceSimulation/BenefitsSection";
import FormFinanceSimulation from "../../FinanceSimulation/FormFinanceSomulation";
import HelpSection from "../../FinanceSimulation/HelpSection.tsx";
import HeroFinanceSimulation from "../../FinanceSimulation/HeroSectionFinace/index.tsx";

export default function FinanceSimulation() {
    return (
      <>
        <HeroFinanceSimulation />
        <FormFinanceSimulation />
        <BenefitsSection />
        <HelpSection />
      </>
    );
  }