import { Box } from "@chakra-ui/react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoBar } from "@/components/LogoBar";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { UseCases } from "@/components/UseCases";
import { DemoSection } from "@/components/DemoSection";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Box as="main">
        <Hero />
        <LogoBar />
        <Features />
        <HowItWorks />
        <UseCases />
        <DemoSection />
        <FAQ />
        <CTASection />
      </Box>
      <Footer />
    </Box>
  );
}
