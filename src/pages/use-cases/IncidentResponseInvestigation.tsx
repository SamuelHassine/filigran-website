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
import threatHuntingImg from "@/assets/use-cases/threat-monitoring-hunting.png";
import intelligenceSocImg from "@/assets/resources/use-case-intelligence-driven-soc.webp";
// Import feature images
import incidentOverviewImg from "@/assets/use-cases/incident-response-overview.svg";
import collaborativeWorkspaceImg from "@/assets/use-cases/incident-response-workspace.svg";
import knowledgeGraphImg from "@/assets/use-cases/knowledge-graph.svg";
import automationPlaybookImg from "@/assets/use-cases/automation-playbook.svg";

const incidentResponsePainPoints = [
  "Hard to create and share reports with security teams and across platforms",
  "Difficulties in qualifying alerts raised by detection systems",
  "Poor organization between incident responders during incident management",
  "Significant workload to gather and format the findings of the investigation/incident response",
];

const incidentResponseSections = [
  {
    title: "Incident creation and tracking",
    paragraphs: [
      "Initiate a new case to document and oversee a specific security incident or threat, all while assigning team members. <strong>This case serves as a centralized repository for all relevant incident-related information.</strong>",
      "Keep it up-to-date with new findings, developments, and actions taken, enabling clear tracking of the incident's status and response efforts.",
    ],
    image: {
      src: incidentOverviewImg,
      alt: "Incident creation and tracking",
    },
  },
  {
    title: "Collaborative workspace",
    paragraphs: [
      "Team members can collaborate <strong>in real-time</strong>, while sharing insights, observations, and analysis related to the incident fostering teamwork and knowledge sharing.",
      "Tasks can be assigned to specific users directly from the case, ensuring every aspect of the incident is addressed.",
    ],
    image: {
      src: collaborativeWorkspaceImg,
      alt: "Collaborative workspace",
    },
  },
  {
    title: "Graph and knowledge",
    paragraphs: [
      "Bring together diverse sources of information into a single, centralized location. All the knowledge contained can be visualized in comprehensive graphs so users can see relationships between entities, get a global view of the incident, and better understand context and actions that should be taken.",
      "Timelines and correlations with other cases are also available to represent the chronological sequence of events related to the incident.",
    ],
    image: {
      src: knowledgeGraphImg,
      alt: "Graph and knowledge",
    },
  },
  {
    title: "Automated workflow",
    paragraphs: [
      "<strong>Replace manual tasks with intelligent, real-time automation.</strong> Automated workflow streamlines operations, prioritizes critical threats, and reduces response times. Traditional methods often result in lengthy processes, leaving systems vulnerable for extended periods.",
      "Using automation for malware detection, incident triage, playbook execution, and documentation, significantly improves response times, alert prioritization and reduces the burden on security teams.",
    ],
    image: {
      src: automationPlaybookImg,
      alt: "Automated workflow",
    },
  },
];

const incidentResponseRelatedUseCases = [
  {
    to: "/use-cases/intelligence-driven-soc",
    title: "Intelligence-driven SOC",
    description:
      "Transform your SOC with intelligence-driven workflows and automated threat detection.",
    image: {
      src: intelligenceSocImg,
      alt: "Intelligence-driven SOC",
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

const IncidentResponseInvestigation = () => {
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
                Incident response and investigation
              </h1>
              <p className="text-xl lg:text-2xl text-foreground/70 mb-8 leading-relaxed">
                OpenCTI's case management is designed to streamline threat investigations. By seamlessly centralizing 
                incident-related information, organizations improve their overall incident response efficiency and 
                reduce the time required to contain and remediate threats.
              </p>
              <Button asChild variant="cta" size="lg" className="px-8">
                <Link to="/platforms/opencti">Learn more about OpenCTI</Link>
              </Button>
            </div>

            {/* Key Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
              <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3">Centralized case management</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Centralize all incident data in one platform for comprehensive analysis and faster resolution.
                </p>
              </Card>
              <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3">Collaborative investigation</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Enable seamless collaboration between team members with shared workspaces and real-time updates.
                </p>
              </Card>
              <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3">Automated enrichment</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Automatically enrich indicators with threat intelligence to accelerate investigation timelines.
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
                    "Centralized knowledge",
                    "Real-time collaboration",
                    "Correlation of elements",
                  ]}
                  pdfUrl="/resources/pdfs/filigran-use-case_incident-response-investigation.pdf"
                />
              </div>

              {/* Main Content */}
              <div className="space-y-12">
                {/* Pain Points */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Recurring pain points</h2>
                  <PainPointsList items={incidentResponsePainPoints} />
                </div>

                {/* Solutions */}
                <div className="space-y-12">
                  {incidentResponseSections.map((section) => (
                    <UseCaseSectionBlock key={section.title} {...section} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Use Cases */}
        <RelatedUseCasesSection
          items={incidentResponseRelatedUseCases}
          description="Explore how OpenCTI can transform other aspects of your security operations."
        />

        <GetStartedSection />
      </main>
      <Footer />
    </div>
  );
};

export default IncidentResponseInvestigation;
