import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GetStartedSection } from "@/components/GetStartedSection";
import {
  PainPointsList,
  RelatedUseCasesSection,
  SidebarMetaCard,
  UseCaseSectionBlock,
} from "@/components/use-cases/UseCasePageElements";
import openctiLogo from "@/assets/opencti-logo.svg";
// Import use case images
import incidentResponseImg from "@/assets/use-cases/use-case-incident-response.png";
import threatHuntingImg from "@/assets/use-cases/use-case-threat-monitoring.png";
// Import feature images
import alertCollectionImg from "@/assets/use-cases/soc-alert-collection.svg";
import threatIdentificationImg from "@/assets/use-cases/soc-threat-identification.svg";
import automationImg from "@/assets/use-cases/soc-automation-playbook.svg";
import aiDetectionImg from "@/assets/use-cases/soc-generative-ai.png";

const socPainPoints = [
  "Unable to track threats from outside of the network",
  "Lack of up-to-date threat information",
  "Lack of visibility on the threat landscape",
  "Lack of threat prioritization based on impact on the organization",
];

const socSections = [
  {
    title: "Comprehensive alert collection",
    paragraphs: [
      "OpenCTI aggregates alerts from multiple security tools and platforms, creating a unified view of all security events. This centralization eliminates blind spots and ensures no threat goes unnoticed.",
      "The platform normalizes data from different sources, making it easier to correlate events and identify patterns that might indicate sophisticated attacks.",
    ],
    image: {
      src: alertCollectionImg,
      alt: "Alert collection dashboard",
    },
  },
  {
    title: "Advanced threat identification",
    paragraphs: [
      "Leverage threat intelligence to automatically identify and classify threats based on known indicators, TTPs, and threat actor profiles. OpenCTI's knowledge graph reveals connections between seemingly unrelated events.",
      "Real-time enrichment provides context about threats, including their severity, potential impact, and recommended response actions.",
    ],
    image: {
      src: threatIdentificationImg,
      alt: "Threat identification",
    },
  },
  {
    title: "No-code automation playbook",
    paragraphs: [
      "Build and deploy automation playbooks without writing a single line of code. OpenCTI's visual workflow builder allows SOC teams to create complex response procedures that execute automatically based on specific triggers.",
      "Automate repetitive tasks like indicator enrichment, case creation, and notification sending, freeing analysts to focus on investigation and response.",
    ],
    image: {
      src: automationImg,
      alt: "Automation playbook builder",
    },
  },
  {
    title: "Faster threat detection with Generative AI",
    paragraphs: [
      "Leverage AI to analyze vast amounts of security data and identify threats that traditional rules might miss. Machine learning models continuously improve detection accuracy by learning from your environment.",
      "AI-powered summarization provides instant insights into complex incidents, helping analysts understand the full scope of threats and make informed decisions quickly.",
    ],
    image: {
      src: aiDetectionImg,
      alt: "AI-powered detection",
    },
  },
];

const socRelatedUseCases = [
  {
    to: "/use-cases/incident-response-and-investigation",
    title: "Incident response and investigation",
    description:
      "Streamline threat investigations with centralized case management and automated enrichment.",
    image: {
      src: incidentResponseImg,
      alt: "Incident response and investigation",
    },
  },
  {
    to: "/use-cases/threat-monitoring-hunting",
    title: "Threat monitoring and hunting",
    description:
      "Proactively hunt for threats with real-time intelligence and advanced analytics.",
    image: {
      src: threatHuntingImg,
      alt: "Threat monitoring and hunting",
    },
    imagePosition: "right" as const,
  },
];

const IntelligenceDrivenSOC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "#01091f",
                backgroundImage:
                  "radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 left-0 h-[480px] w-[480px] rounded-full bg-cyan/20 blur-[180px]" />
              <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[210px]" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Intelligence-driven SOC
              </h1>
              <p className="text-xl lg:text-2xl text-foreground/70 mb-8 leading-relaxed">
                OpenCTI empowers SOC teams to conduct security operations driven by intelligence from 
                internal and external sources, enabling them to save valuable time. By streamlining 
                automation and offering a user-friendly interface, OpenCTI helps organizations reduce 
                their MTTD and MTTR.
              </p>
              <Button asChild variant="cta" size="lg" className="px-8">
                <Link to="/platforms/opencti">Learn more about OpenCTI</Link>
              </Button>
            </div>

            {/* Key Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
              <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3">Single source of truth</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Consolidate all your threat intelligence and security data in one centralized platform.
                </p>
              </Card>
              <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3">Reduce MTTD and MTTR</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Accelerate threat detection and response times with automated workflows and AI assistance.
                </p>
              </Card>
              <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3">User-friendly automations</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Save time on daily operations thanks to automation playbooks built with simply a few clicks.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-[350px_1fr] gap-12 max-w-7xl mx-auto">
              {/* Sidebar */}
              <div className="lg:sticky lg:top-24 h-fit">
                <SidebarMetaCard
                  logo={openctiLogo}
                  logoAlt="OpenCTI"
                  category="Use case"
                  team="SOC/CIRT Team"
                  benefits={[
                    "Single source of truth",
                    "Reduce MTTD and MTTR",
                    "User-friendly automations",
                  ]}
                  pdfUrl="/resources/pdfs/filigran_use-case_intelligence-driven-soc.pdf"
                />
              </div>

              {/* Main Content */}
              <div className="space-y-12">
                {/* Pain Points */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Recurring pain points</h2>
                  <PainPointsList items={socPainPoints} />
                </div>

                {/* Solutions */}
                <div className="space-y-12">
                  {socSections.map((section) => (
                    <UseCaseSectionBlock key={section.title} {...section} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Use Cases */}
        <RelatedUseCasesSection
          items={socRelatedUseCases}
          description="Explore how OpenCTI can transform other aspects of your security operations."
        />

        <GetStartedSection />
      </main>
      <Footer />
    </div>
  );
};

export default IntelligenceDrivenSOC;