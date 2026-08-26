import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/config/business";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { AboutSection } from "@/components/landing/AboutSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { PainPointsSection } from "@/components/landing/PainPointsSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { LocationSection } from "@/components/landing/LocationSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";
import { MobileCTA } from "@/components/landing/MobileCTA";

const title =
  "Clínica Shoyufisio";
const description =
  "Fisioterapia, massoterapia, drenagem linfática, tratamento para lipedema e cuidados pós-operatórios em Londrina. Atendimento individualizado no Clínica Shoyufisio.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: business.name,
  description,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.postalCode,
    addressCountry: "BR",
  },
  areaServed: "Londrina, PR",
  telephone: `+${business.whatsapp.number}`,
  sameAs: [business.social.instagram],
  hasMap: business.maps.reviewsUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <AboutSection />
        <ServicesSection />
        <PainPointsSection />
        <BenefitsSection />
        <ProcessSection />
        <TestimonialsSection />
        <LocationSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileCTA />
    </div>
  );
}
