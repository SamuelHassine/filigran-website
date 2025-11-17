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
import openaevLogo from "@/assets/openaev-logo.svg";
// Import use case images - using existing illustrations
import incidentResponseImg from "@/assets/illustrations/case-management.svg";
import threatHuntingImg from "@/assets/illustrations/rbac.svg";
import intelligenceSocImg from "@/assets/illustrations/opencti-dashboard.svg";
// Import feature images
import scenariosImg from "@/assets/illustrations/openaev-dashboard.svg";
import executionImg from "@/assets/illustrations/automation-playbook.svg";
import metricsImg from "@/assets/illustrations/openaev/security-validation.png";

const breachSimulationPainPoints = [
  "Uninformed testing due to lacking relevant threat intelligence",
  "Rapidly evolving attack mechanisms and malware render simulations outdated or irrelevant quickly",
  "Manual scenario preparation is time-consuming",
  "Unable to assess security posture on a regular basis",
];

const breachSimulationSections = [
  {
    title: "Attack scenarios based on latest and greatest CTI",
    paragraphs: [
      "Threat intelligence on the growing number of cyber attack methods comes from a wide variety of sources such as OSINT feeds, commercial vendors and user generated data. OpenCTI automatically collects all of it and filters it to ensure that you have an up to date and relevant knowledge base to rely on.",
      "OpenAEV can directly benefit from OpenCTI's curated intelligence thanks to a seamless and automated integration between the two platforms. Leveraging this synergy ensures that your security operations teams is building breach and attack simulations that reflect the reality of your organisation's threat landscape.",
    ],
    image: {
      src: scenariosImg,
      alt: "OpenAEV attack scenarios based on CTI",
    },
  },
  {
    title: "Frequent and repeatable scenario execution",
    paragraphs: [
      "Frequent and highly relevant assessments are crucial for validating and maintaining an organization's security posture. However executing simulations is often considered an expensive activity due to the many hours of preparation required.",
      "This pain and cost can be resolved thanks to the <strong>automated integration between OpenCTI and OpenAEV</strong>. In a matter of seconds, SecOps teams can transform the latest threat report into a full blown breach and attack scenario that replicates the latest methods used by threat actors and malware.",
      "The injects and their timeline are all configured in a few clicks and their execution can be repeated as many times as necessary to assess your security controls appropriately.",
    ],
    image: {
      src: executionImg,
      alt: "OpenAEV repeatable scenario execution",
    },
  },
  {
    title: "Confirm prevention and detection with tangible metrics",
    paragraphs: [
      "One of SecOps main goals is to address the gaps in their security posture and this process is known as <strong>Continuous Threat Exposure Management</strong>. Every decision made is meant to reduce the impact of potential attacks, but to accurately assess the outcome of your actions, you need to measure your progress with relevant metrics.",
      "OpenAEV provides these numbers to its users via its <strong>Prevention, Detection and Human Response widgets</strong>. These are automatically generated after every breach and attack simulation and are necessary to make informed adjustments to your security solutions and processes so that the scores of your future tests improve as expected.",
    ],
    image: {
      src: metricsImg,
      alt: "OpenAEV tangible metrics",
    },
  },
];

const breachSimulationRelatedUseCases = [
  {
    to: "/use-cases/incident-response-and-investigation",
    title: "Incident response and investigation",
    description:
      "OpenCTI's case management is designed to streamline threat investigations. By seamlessly centralizing incident-related information, organizations improve their overall incident response efficiency...",
    image: {
      src: incidentResponseImg,
      alt: "OpenCTI use case - Incident response and investigation",
    },
  },
  {
    to: "/use-cases/threat-monitoring-hunting",
    title: "Threat monitoring and hunting",
    description:
      "OpenCTI enables organizations to analyze threat intelligence in real time and across systems to detect and respond to potential threats promptly. This approach helps prevent security breaches and minimizes damage...",
    image: {
      src: threatHuntingImg,
      alt: "Filigran use case - threat monitoring and hunting with OpenCTI",
    },
    imagePosition: "right" as const,
  },
  {
    to: "/use-cases/intelligence-driven-soc",
    title: "Intelligence-driven SOC",
    description:
      "OpenCTI empowers SOC teams to conduct security operations driven by intelligence from internal and external sources, enabling them to save valuable time. By streamlining automation and offering proactive threat detection...",
    image: {
      src: intelligenceSocImg,
      alt: "OpenCTI Use case - intelligence driven SOC",
    },
  },
];

const IntelligenceBreachSimulation = () => {
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
                Intelligence-led breach & attack simulation
              </h1>
              <p className="text-xl lg:text-2xl text-foreground/70 mb-8 leading-relaxed">
                With one click, OpenAEV empowers cybersecurity teams to operationalize threat intelligence 
                from OpenCTI, automatically generating relevant simulation scenarios. This enables a 
                comprehensive assessment of the readiness and effectiveness of all teams and stakeholders 
                in responding to cyber incidents.
              </p>
              <Button asChild variant="cta" size="lg" className="px-8">
                <Link to="/platforms/openaev">Learn more about OpenAEV</Link>
              </Button>
            </div>

            {/* Key Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
              <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3">Fact-based cases</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Leverage your own threat intelligence directly from OpenCTI to create the most 
                  relevant simulations.
                </p>
              </Card>
              <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3">Automatically generated scenarios</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Save time by generating atomic testing in few click and delivering immediate results.
                </p>
              </Card>
              <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3">Repeatable cost-effective simulations</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Rerun the simulations as often as you want! to track your progress over time 
                  (every month, week, day!).
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
                  logo={openaevLogo}
                  logoAlt="OpenAEV"
                  category="Use case"
                  team="SecOps teams"
                  benefits={[
                    "Fact-based cases",
                    "Automatically generated scenarios",
                    "Repeatable cost-effective simulations",
                  ]}
                  pdfUrl="/resources/pdfs/filigran_use-case_intelligence-led-breach-attack-simulation.pdf"
                />
              </div>

              {/* Main Content */}
              <div className="space-y-12">
                {/* Pain Points */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Recurring pain points</h2>
                  <PainPointsList items={breachSimulationPainPoints} />
                </div>

                {/* Solutions */}
                <div className="space-y-12">
                  {breachSimulationSections.map((section) => (
                    <UseCaseSectionBlock key={section.title} {...section} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Use Cases */}
        <RelatedUseCasesSection
          items={breachSimulationRelatedUseCases}
          description="Discover our diverse range of use cases to see how OpenCTI can revolutionize your approach to threat intelligence."
        />

        <GetStartedSection />
      </main>
      <Footer />
    </div>
  );
};

export default IntelligenceBreachSimulation;