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
// Import use case images - using existing illustrations
import incidentResponseImg from "@/assets/illustrations/case-management.svg";
import threatHuntingImg from "@/assets/illustrations/rbac.svg";
import intelligenceSocImg from "@/assets/resources/use-case-intelligence-driven-soc.webp";
// Use existing dashboard images as placeholders for now
import dataIngestionImg from "@/assets/illustrations/opencti-dashboard.svg";
import dataConsolidationImg from "@/assets/illustrations/opencti-hero-dashboard.svg";
import dataAnalysisImg from "@/assets/illustrations/case-management.svg";
import collaborationImg from "@/assets/illustrations/automation-playbook.svg";

const disinformationPainPoints = [
  "Scattered data sources hinder effective modeling of disinformation threats and incidents.",
  "The large volume of data obscures trends and relationships among actors, targets, and campaigns.",
  "Sharing insights and experiences is difficult when stakeholders use varied research approaches and methodologies.",
  "Disinformation responses are often isolated and uncoordinated, weakening collective efforts against disinformation.",
];

const disinformationSections = [
  {
    title: "Effortless data ingestion",
    paragraphs: [
      "The existing process of importing disinformation data from scattered sources is often manual and time-consuming, resulting in wasted time, analyst fatigue, reduced coverage, and delayed response to emerging threats.",
      "OpenCTI streamlines this process by leveraging established CTI techniques. Features like <strong>CSV mapper</strong> and <strong>bulk creation</strong> allow defender teams to efficiently import diverse datasets from spreadsheets or databases. <strong>Modeling on OpenCTI</strong> transforms unstructured information into structured data thanks to various entities. Analysts can extract more valuable insights semi-automatically from reports while saving time from repetitive tasks.",
    ],
    image: {
      src: dataIngestionImg,
      alt: "OpenCTI data ingestion for disinformation defense",
    },
  },
  {
    title: "Unified data consolidation",
    paragraphs: [
      "Disinformation data often suffers from duplication and inconsistencies caused by overlapping reports and repeated imports.",
      "OpenCTI resolves these issues with <strong>automatic de-duplication</strong> and offers <strong>manual merge capabilities</strong>, ensuring clean and unified datasets. By adhering to standards like <strong>DISARM and STIX</strong>, OpenCTI guarantees the consistency across datasets, reducing friction in analysis and sharing while fostering better collaboration.",
    ],
    image: {
      src: dataConsolidationImg,
      alt: "OpenCTI unified data consolidation",
    },
  },
  {
    title: "Enhanced data analysis",
    paragraphs: [
      "It is struggle for defenders to interpret vast amounts of data. OpenCTI addresses this with <strong>graph visualizations</strong>, allowing users to map entities, observables, and relationships in disinformation campaigns.",
      "<strong>Customizable dashboards</strong> and the <strong>investigation module</strong> further allow users to pivot on any knowledge, enabling comprehensive exploration and analysis of connections between entities and relationships. By making critical insights both accessible and actionable, OpenCTI significantly accelerates decision-making.",
    ],
    image: {
      src: dataAnalysisImg,
      alt: "OpenCTI enhanced data analysis",
    },
  },
  {
    title: "Seamless collaboration and sharing",
    paragraphs: [
      "Collaboration is essential in combating disinformation, yet sharing actionable intelligence efficiently across teams and organizations remains a challenge.",
      "OpenCTI supports various sharing mechanisms including TAXII, Live stream, CSV Feed, connectors… It automatically structures and categorizes all information, ensuring clarity and consistency.",
      "In addition, <strong>the dashboards on OpenCTI are sharable across teams and organizations</strong>, even with external collaborators who do not have an account. This gives researchers and analysts the flexibility to present investigation results, enabling effortless cooperation and wide-scale intelligence sharing.",
    ],
    image: {
      src: collaborationImg,
      alt: "OpenCTI seamless collaboration and sharing",
    },
  },
];

const disinformationRelatedUseCases = [
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
      alt: "OpenCTI use case - intelligence driven SOC",
    },
  },
];

const IntelligenceDefenseDisinformation = () => {
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
                Intelligence-driven defense against disinformation
              </h1>
              <p className="text-xl lg:text-2xl text-foreground/70 mb-8 leading-relaxed">
                For the Threat Intelligence community, defending against disinformation and Foreign Information 
                Manipulation & Interference (FIMI) requires efficient knowledge sharing. The OpenCTI platform is one of{" "}
                <Link
                  to="/blog/how-opencti-helps-to-fight-disinformation-and-foreign-interferences"
                  className="text-cyan hover:underline"
                >
                  the most advanced and performant solutions
                </Link>{" "}
                to support this critical effort.
              </p>
              <Button asChild variant="cta" size="lg" className="px-8">
                <Link to="/platforms/opencti">Learn more about OpenCTI</Link>
              </Button>
            </div>

            {/* Key Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
              <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3">Clear vision of FIMI trends</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  OpenCTI ensures quality datasets and knowledge subsystems as well as the ability to 
                  produce accurate key indicators over time.
                </p>
              </Card>
              <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3">Concise categorization of FIMI data and analysis</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Frameworks like <strong>STIX 2.1</strong> and <strong>DISARM</strong> ensure structured 
                  data format which facilitates the sharing of threat intelligence.
                </p>
              </Card>
              <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3">Knowledge graph and relationships</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Easily visualize activity clusters and common characteristics.
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
                  team="The defender community"
                  benefits={[
                    "Clear vision of FIMI trends",
                    "Concise categorization of FIMI data and analysis",
                    "Knowledge graph and relationships",
                  ]}
                  pdfUrl="/resources/pdfs/filigran_use-case_intel-driven-defense-against-disinformation.pdf"
                />
              </div>

              {/* Main Content */}
              <div className="space-y-12">
                {/* Pain Points */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Recurring pain points</h2>
                  <PainPointsList items={disinformationPainPoints} />
                </div>

                {/* Solutions */}
                <div className="space-y-12">
                  {disinformationSections.map((section) => (
                    <UseCaseSectionBlock key={section.title} {...section} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Use Cases */}
        <RelatedUseCasesSection
          items={disinformationRelatedUseCases}
          description="Discover our diverse range of use cases to see how OpenCTI can revolutionize your approach to threat intelligence."
        />

        <GetStartedSection />
      </main>
      <Footer />
    </div>
  );
};

export default IntelligenceDefenseDisinformation;