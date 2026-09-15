import Cta from "@/components/landing/Cta";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Journey from "@/components/landing/Journey";
import Proof from "@/components/landing/Proof";
import Solutions from "@/components/landing/Solutions";
import TechStack from "@/components/landing/TechStack";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Solutions />
      <HowItWorks />
      <Journey />
      <Proof />
      <TechStack />
      <Cta />
    </>
  );
}
