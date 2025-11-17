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
import intelligenceSocImg from "@/assets/use-cases/use-case-intelligence-driven-soc.png";
// Import feature images
import dashboardsImg from "@/assets/use-cases/threat-monitoring-dashboard.svg";
import integrationsImg from "@/assets/use-cases/threat-monitoring-integration.svg";
import caseManagementImg from "@/assets/use-cases/threat-monitoring-case-templates.svg";
import sharingImg from "@/assets/use-cases/threat-monitoring-sharing.png";

const threatMonitoringPainPoints = [
  "Unable to streamline information exchange across teams during a cyber incident response",
  "Threat is intensified due to lack of correlation, identification, and understanding across internal events and external threat intelligence",
  "Unable to measure the performance of the cyber threat intelligence team",
  "Unable to operationalize strategic information (e.g. threat actor profiles, malware behavior, attack patterns…) in legacy solutions (SIEM, EDR, XDR…)",
  "Unable to share information with internal and external stakeholders, which leads to siloed teams, clients and knowledge bases",
  "Unacceptable delay between the internal production of threat intelligence and its use for hunting and remediation purposes",
];

const threatMonitoringSections = [
  {
    title: "User-defined custom dashboards",
    paragraphs: [
      "Dashboards provide a clear and concise representation of your work that can be appreciated by security analysts, managers and executives alike.",
      "<strong>With OpenCTI, users can create as many custom dashboards with as many widgets as they want and display any data type from the platform</strong> in their preferred manner. This flexibility enables users to effectively illustrate both high-level assessments of the threat landscape as well as specific Priority Intelligence Requirement-led (PIR) threat hunting dashboards.",
      "Beyond operational flexibility, users can easily make these dashboards publicly available or specific to a community and even control whether sensitive information is included or not.",
    ],
    image: {
      src: dashboardsImg,
      alt: "OpenCTI custom dashboards",
    },
  },
  {
    title: "Bi-directional integrations",
    paragraphs: [
      "Establish a connection between OpenCTI and other existing detection solutions by transmitting data from OpenCTI to third-party solutions, as well as drawing alerts from these third-party solutions into OpenCTI.",
      "This <strong>bi-directional integration</strong> is essential to enhance visibility on possible threats, synergize existing security solutions and maintain the integrity of strategic information during threat hunting and monitoring processes.",
    ],
    image: {
      src: integrationsImg,
      alt: "OpenCTI bi-directional integrations",
    },
  },
  {
    title: "Case management with templates",
    paragraphs: [
      "OpenCTI supports case management with templates that include pre-defined tasks and severity matrices based on the origin of the case. These templates <strong>save a significant amount of time</strong> for cybersecurity teams, <strong>streamlining the process of tracking and managing potential threats</strong>.",
      "This consistency across various types of information and solutions enhances the overall efficiency and reliability of threat management efforts.",
    ],
    image: {
      src: caseManagementImg,
      alt: "OpenCTI case management",
    },
  },
  {
    title: "Ease of sharing intelligence",
    paragraphs: [
      "Share threat intelligence, dashboards, and KPIs (e.g., incidents, detected attacks, reports, etc.) with subsidiaries and within the client group by publishing feeds on the internet, within the community, and sharing via email or a permanent link.",
      "The OpenCTI platform not only allows users to share information and intelligence with others but also to receive and consume information from partners, external sources, and customers via manual or automated mechanisms (e.g. direct input, file imports, streams…)",
      "<strong>It is easy for OpenCTI users to create and manage new accounts, users, and access</strong>, ensuring full control over the complexity of information sharing. This facilitates collaboration, enhances visibility in threat hunting and threat monitoring, ensures seamless knowledge sharing, and improves threat management efficiency.",
    ],
    image: {
      src: sharingImg,
      alt: "OpenCTI intelligence sharing",
    },
  },
];

const threatMonitoringRelatedUseCases = [
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
    to: "/use-cases/intelligence-driven-soc",
    title: "Intelligence-driven SOC",
    description:
      "OpenCTI empowers SOC teams to conduct security operations driven by intelligence from internal and external sources, enabling them to save valuable time. By streamlining automation and offering...",
    image: {
      src: intelligenceSocImg,
      alt: "OpenCTI Use case - intelligence driven SOC",
    },
    imagePosition: "right" as const,
  },
];

const ThreatMonitoringHunting = () => {
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
                Threat monitoring and hunting
              </h1>
              <p className="text-xl lg:text-2xl text-foreground/70 mb-8 leading-relaxed">
                OpenCTI enables organizations to analyze threat intelligence in real time and across 
                systems to detect and respond to potential threats promptly. This approach helps 
                prevent security breaches and reduce the impact of cyberattacks.
              </p>
              <Button asChild variant="cta" size="lg" className="px-8">
                <Link to="/platforms/opencti">Learn more about OpenCTI</Link>
              </Button>
            </div>

            {/* Key Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
              <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3">Bi-directional integration</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Integrate OpenCTI with 3rd party detection solutions to deliver threat data and 
                  ingest security alerts.
                </p>
              </Card>
              <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3">Optimal case management</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Centralize use cases and support case templating with pre-defined tasks and workflows.
                </p>
              </Card>
              <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3">Shared knowledge</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  External stakeholders can both consume and contribute via public dashboards, TAXII/CSV 
                  feeds and many other mechanisms.
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
                  team="Internal and external security stakeholders"
                  benefits={[
                    "Bi-directional integration",
                    "Optimal case management",
                    "Shared knowledge",
                  ]}
                  pdfUrl="/resources/pdfs/filigran_use-case_threat-monitoring-hunting.pdf"
                />
              </div>

              {/* Main Content */}
              <div className="space-y-12">
                {/* Pain Points */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Recurring pain points</h2>
                  <PainPointsList items={threatMonitoringPainPoints} />
                </div>

                {/* Solutions */}
                <div className="space-y-12">
                  {threatMonitoringSections.map((section) => (
                    <UseCaseSectionBlock key={section.title} {...section} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Use Cases */}
        <RelatedUseCasesSection
          items={threatMonitoringRelatedUseCases}
          description="Discover our diverse range of use cases to see how OpenCTI can revolutionize your approach to threat intelligence."
        />

        <GetStartedSection />
      </main>
      <Footer />
    </div>
  );
};

export default ThreatMonitoringHunting;