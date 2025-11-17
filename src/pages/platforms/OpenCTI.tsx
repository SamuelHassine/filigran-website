import { useEffect } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { InteractiveDemoPreview } from "@/components/platforms/InteractiveDemoPreview";
import { LIVE_DEMO_PATH } from "@/lib/routes";

// Assets
import openctiLogo from "@/assets/opencti-logo.svg";
import openctiHeroDashboard from "@/assets/illustrations/opencti-hero-dashboard.svg";
import g2EuropeLeader from "@/assets/badges/g2-europe-leader.svg";
import g2EmeaLeader from "@/assets/badges/g2-emea-leader.svg";
import g2Logo from "@/assets/badges/g2-logo.svg";
import knowledgeManagementIcon from "@/assets/icons/opencti/knowledge-management.svg";
import alertRhombusIcon from "@/assets/icons/opencti/alert-rhombus.svg";
import realTimeInsightsIcon from "@/assets/icons/opencti/real-time-insights.svg";
import incidentResponseIcon from "@/assets/icons/opencti/incident-response.svg";
import automationPlaybook from "@/assets/illustrations/automation-playbook.svg";
import rbacIllustration from "@/assets/illustrations/rbac.svg";
import caseManagement from "@/assets/illustrations/case-management.svg";
import githubIcon from "@/assets/icons/github-white.svg";
import connectorsIcon from "@/assets/icons/connectors-white.svg";
import documentationIcon from "@/assets/icons/documentation-white.svg";
import slackIcon from "@/assets/icons/slack-white.svg";
import openaevLogo from "@/assets/openaev-color-logo.svg";
import xtmHubLogo from "@/assets/xtm-hub-logo.svg";
import competitiveBrief from "@/assets/resources/competitive-brief-elevating-threat-intel.svg";
import useCaseImage from "@/assets/resources/use-case-intelligence-driven-soc.webp";
import rivianStoryImage from "@/assets/resources/customer-story-rivian.svg";
import whitePaperImage from "@/assets/resources/wp-threat-intel-gap.svg";

import { capabilityHighlights, deploymentOptions, communityLinks, highlightContent } from "./data/openctiContent";

const stats = [
  { value: "70%", label: "faster threat detection and response" },
  { value: "25%", label: "reduction in false positives" },
  { value: "300+", label: "integrations" },
  { value: "6K", label: "deployments by Threat Intelligence practitioners" },
];

const features = [
  {
    icon: knowledgeManagementIcon,
    title: "Unify Threat Intelligence",
    description: "Consolidate your disparate threat feeds into a centralized platform with 300+ integrations, using a consistent STIX 2.1 data model, powerful visualizations and custom dashboards."
  },
  {
    icon: alertRhombusIcon,
    title: "Reduce Alert Fatigue",
    description: "Benefit from automation and XTM Agentic AI for faster processing of the entire threat management cycle plus generate finished TI reports in minutes NOT Hours OR Days."
  },
  {
    icon: realTimeInsightsIcon,
    title: "Make Threat Intelligence Actionable",
    description: "Role based sharing and dissemination across teams and tools for timely action."
  },
  {
    icon: incidentResponseIcon,
    title: "Streamline Incident Response",
    description: "Utilize case management capabilities for incident-related data and accelerate your investigations."
  }
];

const testimonials = [
  {
    quote:
      "As a Threat Intelligence Platform, OpenCTI offers valuable capabilities for managing cyber threat intelligence, particularly across tactical, technical, and strategic intelligence layers.",
    highlightSegments: ["across tactical, technical, and strategic intelligence layers"],
    author: "Kevin G.",
    position: "Mid-Market (51-1000 employees), Head of CTI",
    link: "https://www.g2.com/products/opencti-by-filigran/reviews/opencti-by-filigran-review-11026903"
  },
  {
    quote:
      "Filigran handles threat intelligence better than many of market's biggest players. Having opted for an Enterprise account, we have very regular discussions with their highly qualified CSM team. The support team is very responsive and assists us on many issues.",
    highlightSegments: ["Filigran handles threat intelligence better than many of market's biggest players."],
    author: "Verified user in Information Technology and Services",
    position: "Enterprise (>1000 employees)",
    link: "https://www.g2.com/products/opencti-by-filigran/reviews/opencti-by-filigran-review-10983404"
  },
  {
    quote:
      "OpenCTI is one of the few, if not the only, open-source solutions that fully leverages STIX 2.1 almost in its entirety. Beyond the data format, its integrations and architecture are state-of-the-art (microservices, scalability, security, etc.).",
    highlightSegments: ["fully leverages STIX 2.1", "its integrations and architecture are state-of-the-art"],
    author: "Verified user in Telecommunications",
    position: "Enterprise (>1000 employees)",
    link: "https://www.g2.com/products/opencti-by-filigran/reviews/opencti-by-filigran-review-10987019"
  }
];

const capabilityImages = [
  { title: "GUI built for Threat Intelligence Practitioners", image: null },
  { title: "Adapt the Platform to your Requirement", image: null },
  { title: "Work Faster and Analyze Better with AI", image: null },
  { title: "Automate Scenarios and Playbooks", image: automationPlaybook },
  { title: "Role-Based Access Control (RBAC)", image: rbacIllustration },
  { title: "Centralized Case Management", image: caseManagement }
];

interface StorylanePopupConfig {
  type: "popup";
  demo_type: "image";
  width: number;
  height: number;
  scale?: string;
  demo_url: string;
  padding_bottom?: string;
}

declare global {
  interface Window {
    Storylane?: {
      Play?: (config: StorylanePopupConfig) => void;
    };
  }
}

const storylaneDemos = [
  {
    demoUrl: "https://app.storylane.io/demo/slht8bzceakk?embed=popup",
    previewImage: "https://storylane-prod-uploads.s3.us-east-2.amazonaws.com/company/company_f720051a-a1a1-4154-8857-aaf65f34b400/project/project_95404696-ff95-4966-bdb9-a2100f99524d/page/page_06780cdd-4616-4873-8e11-20eb03869851/crop/ulj9MDrO0vRCf8yD_7qob/1756900409079.png"
  },
  {
    demoUrl: "https://app.storylane.io/demo/oos6saq2pg37?embed=popup",
    previewImage: "https://storylane-prod-uploads.s3.us-east-2.amazonaws.com/company/company_f720051a-a1a1-4154-8857-aaf65f34b400/project/project_2c2f85e9-cfa8-44c9-899a-b09d7568f801/page/1757018941192.png"
  },
  {
    demoUrl: "https://app.storylane.io/demo/8ovzjebsbw2p?embed=popup",
    previewImage: "https://storylane-prod-uploads.s3.us-east-2.amazonaws.com/company/company_f720051a-a1a1-4154-8857-aaf65f34b400/project/project_eb76c0f5-e23f-4479-bd4b-eb3ec6309ed7/page/1756894680090.png"
  }
];

const STORYLANE_SCRIPT_ID = "storylane-sdk";

const getHighlightedQuoteParts = (quote: string, highlights?: string[]) => {
  if (!highlights?.length) {
    return quote;
  }

  const parts: ReactNode[] = [];
  let cursor = 0;

  highlights.forEach((highlight, index) => {
    if (!highlight) {
      return;
    }

    const startIndex = quote.indexOf(highlight, cursor);

    if (startIndex === -1) {
      return;
    }

    if (startIndex > cursor) {
      parts.push(quote.slice(cursor, startIndex));
    }

    parts.push(
      <span className="text-gradient-quote font-semibold" key={`${highlight}-${index}`}>
        {highlight}
      </span>
    );

    cursor = startIndex + highlight.length;
  });

  if (cursor < quote.length) {
    parts.push(quote.slice(cursor));
  }

  return parts;
};

export default function OpenCTI() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (document.getElementById(STORYLANE_SCRIPT_ID)) {
      return;
    }

    const script = document.createElement("script");
    script.id = STORYLANE_SCRIPT_ID;
    script.async = true;
    script.src = "https://js.storylane.io/js/v2/storylane.js";
    document.body.appendChild(script);
  }, []);

  const handleStorylaneLaunch = (demoUrl: string) => {
    if (typeof window === "undefined") {
      return;
    }

    const popupConfig: StorylanePopupConfig = {
      type: "popup",
      demo_type: "image",
      width: 2560,
      height: 1323,
      scale: "0.8",
      demo_url: demoUrl,
      padding_bottom: "calc(51.68% + 25px)"
    };

    if (window.Storylane?.Play) {
      window.Storylane.Play(popupConfig);
      return;
    }

    window.open(demoUrl.replace("?embed=popup", ""), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Centered */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
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
            <div className="absolute -top-32 -left-16 h-[420px] w-[420px] rounded-full bg-cyan/20 blur-[160px]" />
            <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[200px]" />
            <div className="absolute top-1/2 left-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-[220px] animate-glow" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <div className="inline-block mb-8">
              <img src={openctiLogo} alt="OpenCTI" className="h-16 lg:h-20 mx-auto" />
            </div>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Understand Your Threat Landscape and Act Decisively
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/70 mb-8 leading-relaxed max-w-4xl mx-auto">
              Organize your cyber threat intelligence to enhance and disseminate actionable insights with our open-source threat intelligence platform.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to={LIVE_DEMO_PATH}>
                  Try OpenCTI
                </Link>
              </Button>
              <Button asChild variant="cta" size="lg" className="text-lg px-8">
                <Link to="/book-demo">
                  Book a demo
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Image - Large */}
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan/10 via-transparent to-transparent" />
              <img 
                src={openctiHeroDashboard} 
                alt="OpenCTI dashboard monitoring Finance Sector" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 border-y border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-6xl font-bold text-cyan mb-3">{stat.value}</div>
                <div className="text-sm lg:text-base text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collect, correlate and leverage */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Collect, correlate and leverage
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Operationalize threat intelligence like never before. Share it timely across your security teams and build threat-informed defense.
            </p>
          </div>

          {/* G2 Badges */}
          <div className="flex justify-center gap-8 mb-16">
            <a href="https://www.g2.com/products/opencti-by-filigran/reviews" target="_blank" rel="noopener noreferrer">
              <img src={g2EuropeLeader} alt="G2 High Performer Europe" className="h-32 lg:h-40" />
            </a>
            <a href="https://www.g2.com/products/opencti-by-filigran/reviews" target="_blank" rel="noopener noreferrer">
              <img src={g2EmeaLeader} alt="G2 High Performer EMEA" className="h-32 lg:h-40" />
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 card-glass hover-lift">
                <img src={feature.icon} alt="" className="h-16 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - 3 Columns */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-cyan/5 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 lg:p-8 card-glass hover-lift flex flex-col">
                <blockquote className="text-base lg:text-lg mb-6 leading-relaxed flex-grow text-foreground/90">
                  <span aria-hidden="true" className="mr-1 text-foreground/50 text-3xl leading-none align-top">
                    &ldquo;
                  </span>
                  {getHighlightedQuoteParts(testimonial.quote, testimonial.highlightSegments)}
                  <span aria-hidden="true" className="ml-1 text-foreground/50 text-3xl leading-none align-bottom">
                    &rdquo;
                  </span>
                </blockquote>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-foreground/60">{testimonial.position}</div>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <img src={g2Logo} alt="G2" className="h-6" />
                    <a 
                      href={testimonial.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan hover:text-cyan/80 transition-colors text-sm font-semibold"
                    >
                      View review
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cyber Threat Intelligence Platform - Capabilities */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Cyber Threat Intelligence Platform
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Manage and operationalize your cyber threat intelligence efficiently and effectively.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-24">
            {capabilityHighlights.map((capability, index) => {
              const Icon = capability.icon;
              const capImage = capabilityImages.find(c => c.title === capability.title);
              
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan/10">
                      <Icon className="w-8 h-8 text-cyan" />
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold">{capability.title}</h3>
                    <p className="text-lg text-foreground/70 leading-relaxed">{capability.description}</p>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    {index < storylaneDemos.length ? (
                      <InteractiveDemoPreview
                        imageSrc={storylaneDemos[index].previewImage}
                        alt={`${capability.title} interactive demo preview`}
                        onLaunch={() => { handleStorylaneLaunch(storylaneDemos[index].demoUrl); }}
                      />
                    ) : capImage?.image ? (
                      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-card/50 p-4">
                        <img src={capImage.image} alt={capability.title} className="w-full h-auto" />
                      </div>
                    ) : (
                      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-cyan/10 to-blue-500/10 aspect-video flex items-center justify-center">
                        <div className="text-center p-8">
                          <Icon className="w-16 h-16 text-cyan/30 mx-auto" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join the OpenCTI community */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-cyan/5 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Join the OpenCTI community
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed mb-8">
              Connect with the Filigran fellow community members, focused on threat intelligence analysis and adversary simulations.
            </p>
            <Button asChild variant="outlineGlow" size="lg">
              <a href="https://www.g2.com/products/opencti-by-filigran/reviews/start" target="_blank" rel="noopener noreferrer">
                Write a G2 review
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {communityLinks.map((link, index) => {
              const iconMap: Record<string, string> = {
                "GitHub": githubIcon,
                "Product Integrations": connectorsIcon,
                "Documentation": documentationIcon,
                "Slack Community": slackIcon
              };
              const iconSrc = iconMap[link.title];

              return (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full p-6 card-glass hover-lift transition-all duration-300">
                    <img src={iconSrc} alt="" className="h-12 mb-4" />
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan transition-colors">{link.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4">{link.description}</p>
                    <div className="flex items-center gap-2 text-cyan text-sm font-semibold">
                      Learn more
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Choose the deployment that works for you */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Choose the deployment that works for you
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Unsure which deployment method suits you best? Explore our options below:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {deploymentOptions.map((option, index) => (
              <Card key={index} className="p-8 card-glass hover-lift flex flex-col">
                <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-6 flex-grow">{option.description}</p>
                <ul className="space-y-3 mb-8">
                  {option.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan mt-2 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outlineGlow" className="w-full group">
                  <a href={option.action.href} target="_blank" rel="noopener noreferrer">
                    {option.action.label}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Discover the ecosystem */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-cyan/5 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Discover the ecosystem
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Discover our eXtended Threat Management (XTM) suite tailored to help organizations understand threat environments, anticipate and detect incidents, and conduct attack simulations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 card-glass hover-lift">
              <img src={openaevLogo} alt="OpenAEV" className="h-12 mb-6" />
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                Plan and conduct crisis management exercises by simulating real-life attack scenarios and optimizing cyber defense.
              </p>
              <Button asChild variant="outlineGlow" className="group">
                <Link to="/platforms/openaev">
                  Discover
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Card>

            <Card className="p-8 card-glass hover-lift">
              <img src={xtmHubLogo} alt="XTM Hub" className="h-12 mb-6" />
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                The central, collaborative platform for users to access valuable resources and tradecraft for XTM products.
              </p>
              <Button asChild variant="outlineGlow" className="group">
                <Link to="/platforms/xtm-hub">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Explore OpenCTI possibilities */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Explore OpenCTI possibilities
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Discover how OpenCTI can revolutionize your threat intelligence strategy.
            </p>
          </div>

          <div className="grid gap-8 max-w-6xl mx-auto">
            {/* Rivian Story - Featured */}
            <a 
              href={highlightContent[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="group md:col-span-2"
            >
              <Card className="overflow-hidden card-glass hover-lift">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={rivianStoryImage}
                      alt="Rivian customer story"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="text-xs uppercase tracking-wider text-cyan mb-3 font-semibold">
                      {highlightContent[0].eyebrow}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-cyan transition-colors">
                      {highlightContent[0].title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {highlightContent[0].description}
                    </p>
                  </div>
                </div>
              </Card>
            </a>

            <div className="grid md:grid-cols-3 gap-8">
              {highlightContent.slice(1).map((content, index) => (
                <a 
                  key={index + 1}
                  href={content.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full overflow-hidden card-glass hover-lift">
                    <div className="relative h-48 bg-gradient-to-br from-cyan/20 to-blue-500/20 overflow-hidden">
                      {index === 0 && (
                        <img src={competitiveBrief} alt={content.title} className="w-full h-full object-cover" />
                      )}
                      {index === 1 && (
                        <img src={useCaseImage} alt={content.title} className="w-full h-full object-cover" />
                      )}
                      {index === 2 && (
                        <img src={whitePaperImage} alt={content.title} className="w-full h-full object-cover" />
                      )}
                    </div>
                    <div className="p-6">
                      <div className="text-xs uppercase tracking-wider text-cyan mb-3 font-semibold">
                        {content.eyebrow}
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-cyan transition-colors">
                        {content.title}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {content.description}
                      </p>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ready to see OpenCTI in action section */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Animated gradient background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#030c21",
            backgroundImage:
              "radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)",
          }}
        />
        
        {/* Floating orbs with glow effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-glow/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan/20 rounded-full blur-[150px] animate-glow" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle, rgba(15,188,255,0.2) 1px, transparent 1px),
                linear-gradient(60deg, rgba(15,188,255,0.12) 1px, transparent 1px),
                linear-gradient(120deg, rgba(15,188,255,0.12) 1px, transparent 1px)
              `,
              backgroundSize: '70px 70px, 70px 70px, 70px 70px',
            }}
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Ready to see OpenCTI{' '}
              <span className="text-gradient-cyan">in action?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-foreground/80 mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Try the live demo for free or book a personalized demo to discover how OpenCTI can streamline your threat intelligence operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button
                asChild
                size="lg"
                className="group text-lg"
              >
                <Link to={LIVE_DEMO_PATH}>
                  Try live demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="cta" className="group text-lg px-8 py-6">
                <Link to="/book-demo">
                  Book a demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
