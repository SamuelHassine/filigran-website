import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, Target, Cpu, Workflow, Activity, Repeat, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { InteractiveDemoPreview } from "@/components/platforms/InteractiveDemoPreview";
import { LIVE_DEMO_PATH } from "@/lib/routes";

import openaevLogo from "@/assets/openaev-color-logo.svg";
import openaevHeroIllustration from "@/assets/illustrations/openaev/hero-ecosystem.svg";

import automationIcon from "@/assets/icons/openaev/automation-scenarios-playbooks.svg";
import improvementIcon from "@/assets/icons/openaev/continuous-improvement.svg";
import responseIcon from "@/assets/icons/openaev/optimal-response-time.svg";
import postureIcon from "@/assets/icons/openaev/check.svg";

import storylaneSimulation from "@/assets/illustrations/openaev/storylane-simulation.png";
import storylaneEdr from "@/assets/illustrations/openaev/storylane-edr.png";

import flexibleScenarios from "@/assets/illustrations/openaev/flexible-scenarios.png";
import aiPoweredRemediation from "@/assets/illustrations/openaev/ai-powered-remediation.png";
import timeSeriesReporting from "@/assets/illustrations/openaev/time-series-reporting.png";
import securityValidation from "@/assets/illustrations/openaev/security-validation.png";

import githubIcon from "@/assets/icons/github-white.svg";
import connectorsIcon from "@/assets/icons/connectors-white.svg";
import documentationIcon from "@/assets/icons/documentation-white.svg";
import slackIcon from "@/assets/icons/slack-white.svg";

import openctiLogo from "@/assets/opencti-logo.svg";
import xtmHubLogo from "@/assets/xtm-hub-logo.svg";

import customerStoryFdfa from "@/assets/resources/customer-story-fdfa.png";
import blogBasToAev from "@/assets/resources/blog-bas-to-aev.svg";
import blogDragonforce from "@/assets/resources/blog-dragonforce.svg";

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

const stats = [
  { value: "-80%", label: "in crisis simulation planning time" },
  { value: "100%", label: "growth in simulation programs" },
  { value: "20+", label: "integrations" }
];

const pillars = [
  {
    icon: automationIcon,
    title: "Emulate real-life attack scenarios",
    description:
      "Build simple and intricate attack paths based on the most probable adversaries, powered by prioritized intelligence and MITRE ATT&CK."
  },
  {
    icon: improvementIcon,
    title: "Assess readiness against prioritized threats",
    description: "Evaluate security posture across technical, human, and business risks to know exactly where to reinforce."
  },
  {
    icon: responseIcon,
    title: "AI-powered accelerated time-to-remediation",
    description: "Use risk-based prioritization and sequencing to detect, fix, and govern faster with standardized playbooks."
  },
  {
    icon: postureIcon,
    title: "Improve your security posture",
    description: "Capture instant feedback on team responses and establish risk-based employee profiles for targeted training."
  }
];

interface StorylaneDemo {
  title: string;
  description: string;
  demoUrl: string;
  previewImage: string;
}

interface CapabilityHighlight {
  icon: LucideIcon;
  title: string;
  description: string;
  storylaneIndex?: number;
  image?: string;
}

const storylaneDemos: StorylaneDemo[] = [
  {
    title: "Intelligence-led simulation",
    description:
      "Leverage threat intelligence from OpenCTI to develop scenarios based on the latest, most relevant threats.",
    demoUrl: "https://app.storylane.io/demo/xoduxxsp80ls?embed=popup",
    previewImage: storylaneSimulation
  },
  {
    title: "Bring your own EDR",
    description:
      "Execute simulations seamlessly without deploying new agents and cover hybrid environments with ease.",
    demoUrl: "https://app.storylane.io/demo/bxqijbtlfklz?embed=popup",
    previewImage: storylaneEdr
  }
];

const capabilityHighlights: CapabilityHighlight[] = [
  {
    icon: Target,
    title: "Intelligence-led simulation",
    description:
      "Leverage OpenCTI intelligence to craft simulations that mirror the latest adversaries and anticipated attack paths.",
    storylaneIndex: 0
  },
  {
    icon: Cpu,
    title: "Bring your own EDR",
    description:
      "Execute simulations without deploying new agents and run hybrid approaches to cover resource-constrained endpoints.",
    storylaneIndex: 1
  },
  {
    icon: Workflow,
    title: "Flexible scenarios",
    description:
      "Tap into a comprehensive MITRE ATT&CK library or customize payloads, sequencing, and automation with AI assistance.",
    image: flexibleScenarios
  },
  {
    icon: Activity,
    title: "AI-powered remediation guidance",
    description:
      "Get recommended steps ordered by risk and effort, reducing MTTR through guided remediation and prioritized sequencing.",
    image: aiPoweredRemediation
  },
  {
    icon: Repeat,
    title: "Continuous improvement – reports and findings",
    description:
      "Schedule recurring scenarios, monitor prevention and detection drift, and share time-series findings across teams.",
    image: timeSeriesReporting
  },
  {
    icon: BarChart3,
    title: "Data-driven security validation",
    description:
      "Validate multiple threat vectors—network infiltration, phishing, ransomware—and observe measurable improvements over time.",
    image: securityValidation
  }
];

const deploymentOptions = [
  {
    title: "OpenAEV Community Edition",
    description:
      "Deploy OpenAEV CE on-premise using the open-source releases and pair it with Filigran support packages when you need help.",
    action: { label: "Install now", href: "https://docs.openbas.io/latest/deployment/installation/" }
  },
  {
    title: "SaaS",
    description:
      "Run OpenAEV as a fully managed enterprise instance hosted by Filigran with self-service provisioning and support included.",
    action: { label: "Learn more", href: "/offerings/software-as-a-service" }
  }
];

const communityLinks = [
  {
    title: "GitHub",
    description: "Your gateway to exploring, contributing, and shaping the future of exposure validation.",
    href: "https://github.com/OpenAEV-Platform/openaev"
  },
  {
    title: "Injectors",
    description: "Discover every connector and resource you need to complete your OpenAEV journey.",
    href: "https://filigran.notion.site/OpenBAS-Ecosystem-30d8eb73d7d04611843e758ddef8941b"
  },
  {
    title: "Documentation",
    description: "Find everything required to get started, review release notes, and guide new analysts.",
    href: "https://docs.openbas.io/latest/"
  },
  {
    title: "Slack",
    description: "Stay informed about platform developments and engage with the broader OpenAEV community.",
    href: "https://community.filigran.io"
  }
];

const ecosystemCards = [
  {
    logo: openctiLogo,
    title: "OpenCTI",
    description:
      "Manage and operationalize cyber threat intelligence to inform exposure validation loops and downstream tooling.",
    cta: { label: "Discover", to: "/platforms/opencti" }
  },
  {
    logo: xtmHubLogo,
    title: "XTM Hub",
    description: "A collaborative platform for accessing resources, playbooks, and tradecraft across the XTM suite.",
    cta: { label: "Learn more", to: "/platforms/xtm-hub" }
  }
];

const resourceHighlights = [
  {
    tag: "Customer story",
    title: "How Switzerland’s FDFA Trains Smarter with OpenAEV",
    description:
      "See how the Swiss FDFA scaled simulations across 170+ embassies and consulates while reducing workload on small teams.",
    href: "/customer-stories/how-switzerlands-fdfa-trains-smarter-with-openaev",
    image: customerStoryFdfa
  },
  {
    tag: "Blog",
    title: "BAS to AEV and a Move Towards Unified Exposure Management",
    description:
      "Understand why adversarial exposure validation is the missing layer in exposure management and how to operationalize it.",
    href: "/blog/bas-to-aev-and-a-move-towards-unified-exposure-management",
    image: blogBasToAev
  },
  {
    tag: "Blog",
    title: "Retail’s Vulnerabilities Exposed: DragonForce Ransomware",
    description:
      "Review the May 2025 DragonForce incidents and learn how to validate both technical controls and human readiness.",
    href: "/blog/check-your-defenses-against-dragonforce-ransomware",
    image: blogDragonforce
  }
];

const STORYLANE_SCRIPT_ID = "storylane-sdk";

export default function OpenAEV() {
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

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#01091f",
              backgroundImage:
                "radial-gradient(96.21% 108.44% at 94.34% 113.69%, #16EBF9 2%, #3378FF 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-0 h-[480px] w-[480px] rounded-full bg-cyan/20 blur-[180px]" />
            <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[210px]" />
            <div className="absolute top-1/2 left-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-[240px] animate-glow" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <div className="inline-block mb-8">
              <img src={openaevLogo} alt="OpenAEV" className="h-16 lg:h-20 mx-auto" />
            </div>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Exposure Validation to Improve Security Posture
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/70 mb-8 leading-relaxed max-w-4xl mx-auto">
              OpenAEV is the industry’s first open-source, threat-informed exposure validation platform. Use prioritized
              intelligence to simulate real-life attack scenarios and optimize your defenses across tools, processes, and people.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to={LIVE_DEMO_PATH}>
                  Try OpenAEV
                </Link>
              </Button>
              <Button asChild variant="cta" size="lg" className="text-lg px-8">
                <Link to="/book-demo">
                  Book a demo
                </Link>
              </Button>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan/15 via-transparent to-transparent" />
              <img src={openaevHeroIllustration} alt="OpenAEV ecosystem" className="w-full h-auto" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 border-y border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-6xl font-bold text-cyan mb-3">{stat.value}</div>
                <div className="text-sm lg:text-base text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prioritize, Test and Fix */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Prioritize, Test and Fix</h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Continuously assess, prioritize, validate, and remediate exposures in your attack surface with Adversarial Exposure Validation (AEV).
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <Card key={index} className="p-6 card-glass hover-lift h-full">
                <div className="h-14 w-14 rounded-2xl bg-cyan/10 flex items-center justify-center mb-5">
                  <img src={pillar.icon} alt="" className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{pillar.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stop attacks before they materialize */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-cyan/5 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Stop attacks before they materialize</h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Take a proactive approach to exposure validation that anticipates and neutralizes cyber threats across every vector.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-24">
            {capabilityHighlights.map((capability, index) => {
              const Icon = capability.icon;
              const storylaneIndex =
                typeof capability.storylaneIndex === "number" ? capability.storylaneIndex : null;
              const isStorylane = storylaneIndex !== null;
              const storylane = isStorylane ? storylaneDemos[storylaneIndex] : null;

              return (
                <div
                  key={capability.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan/10">
                      <Icon className="w-8 h-8 text-cyan" />
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold">{capability.title}</h3>
                    <p className="text-lg text-foreground/70 leading-relaxed">{capability.description}</p>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    {isStorylane && storylane ? (
                      <InteractiveDemoPreview
                        imageSrc={storylane.previewImage}
                        alt={`${storylane.title} preview`}
                        onLaunch={() => { handleStorylaneLaunch(storylane.demoUrl); }}
                      />
                    ) : capability.image ? (
                      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-card/50 p-4">
                        <img src={capability.image} alt={capability.title} className="w-full h-auto" loading="lazy" />
                      </div>
                    ) : (
                      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-cyan/10 to-blue-500/10 aspect-video flex items-center justify-center">
                        <Icon className="w-16 h-16 text-cyan/30 mx-auto" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deployment */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Choose the deployment that works for you</h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Leverage the power of fully integrated OpenCTI and OpenAEV to support your journey toward continuous threat exposure management.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {deploymentOptions.map((option, index) => (
              <Card key={index} className="p-8 card-glass hover-lift flex flex-col">
                <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-6 flex-grow">{option.description}</p>
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

      {/* Community */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-cyan/5 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Join the OpenAEV community</h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Connect with fellow practitioners focused on threat intelligence analysis and adversary simulations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {communityLinks.map((link, index) => {
              const iconMap: Record<string, string> = {
                "GitHub": githubIcon,
                "Injectors": connectorsIcon,
                "Documentation": documentationIcon,
                "Slack": slackIcon
              };
              return (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="group">
                  <Card className="h-full p-6 card-glass hover-lift transition-all duration-300">
                    <img src={iconMap[link.title]} alt="" className="h-12 mb-4" />
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

      {/* Ecosystem */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Want to go further?</h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Discover our eXtended Threat Management suite tailored to understand, anticipate, and simulate your threat environment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {ecosystemCards.map((card, index) => (
              <Card key={index} className="p-8 card-glass hover-lift">
                <img src={card.logo} alt={card.title} className="h-12 mb-6" />
                <p className="text-lg text-foreground/70 leading-relaxed mb-6">{card.description}</p>
                <Button asChild variant="outlineGlow" className="group">
                  <Link to={card.cta.to}>
                    {card.cta.label}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Highlights */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-cyan/5 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Explore OpenAEV possibilities</h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Discover how OpenAEV operationalizes threat intelligence across customer stories and expert analysis.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {resourceHighlights.map((resource, index) => (
              <a key={index} href={resource.href} target="_blank" rel="noopener noreferrer" className="group">
                <Card className="h-full overflow-hidden card-glass hover-lift flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-xs uppercase tracking-wider text-cyan mb-3 font-semibold">{resource.tag}</div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan transition-colors">{resource.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed flex-grow">
                      {resource.description}
                    </p>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#030c21",
            backgroundImage:
              "radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)"
          }}
        />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-glow/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan/20 rounded-full blur-[150px] animate-glow" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle, rgba(15,188,255,0.2) 1px, transparent 1px),
                linear-gradient(60deg, rgba(15,188,255,0.12) 1px, transparent 1px),
                linear-gradient(120deg, rgba(15,188,255,0.12) 1px, transparent 1px)
              `,
              backgroundSize: "70px 70px, 70px 70px, 70px 70px"
            }}
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Ready to see OpenAEV <span className="text-gradient-cyan">in action?</span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Try the live demo for free or book a personalized session to see how OpenAEV streamlines adversarial exposure validation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="group text-lg">
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
