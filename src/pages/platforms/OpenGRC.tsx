import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GetStartedSection } from "@/components/GetStartedSection";
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  AlertCircle, 
  DollarSign,
  BarChart3,
  Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import opengrcLogo from "@/assets/opengrc-logo.svg";
import riskQuantificationIcon from "@/assets/icons/data-transformation.svg";
import complianceIcon from "@/assets/icons/xtm/check.svg";
import integrationIcon from "@/assets/icons/connectors-white.svg";
import aiIcon from "@/assets/icons/automation-scenarios.svg";

import githubIcon from "@/assets/icons/github-white.svg";
import documentationIcon from "@/assets/icons/documentation-white.svg";
import slackIcon from "@/assets/icons/slack-white.svg";

import openctiLogo from "@/assets/opencti-logo.svg";
import openaevLogo from "@/assets/openaev-logo.svg";
import xtmHubLogo from "@/assets/xtm-hub-logo.svg";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface IntegrationCard {
  logo: string;
  title: string;
  description: string;
  link: string;
}

const stats = [
  { value: "Real-time", label: "Risk Assessment" },
  { value: "100%", label: "Threat-Informed" },
  { value: "Dynamic", label: "Compliance Tracking" },
  { value: "AI-Powered", label: "Risk Quantification" }
];

const features: Feature[] = [
  {
    icon: riskQuantificationIcon,
    title: "Threat-Informed Risk Quantification",
    description: "Transform static risk assessments into dynamic metrics. Leverage real threat intelligence from OpenCTI and security validation from OpenAEV to quantify risks based on your actual threat landscape and security capabilities."
  },
  {
    icon: complianceIcon,
    title: "Dynamic Compliance Management",
    description: "Move beyond checkbox compliance. Track compliance controls in real-time, automatically update control effectiveness based on security testing, and generate evidence-backed compliance reports."
  },
  {
    icon: integrationIcon,
    title: "Native XTM Suite Integration",
    description: "Built-in integration with OpenCTI and OpenAEV brings technical context to risk decisions. Link business risks to technical mitigations and measure their effectiveness in real-time."
  },
  {
    icon: aiIcon,
    title: "Agentic AI for GRC",
    description: "Get AI assistance for risk assessment bootstrap, mitigation recommendations, and compliance report generation. Let AI agents help identify the most efficient risk treatments based on your threat profile."
  }
];

const pillars: Pillar[] = [
  {
    icon: TrendingUp,
    title: "Real-Time Risk Monitoring",
    description: "Track your risk posture continuously with automated threat landscape updates and live security control validation"
  },
  {
    icon: DollarSign,
    title: "Risk Monetization",
    description: "Translate cyber threats into financial impact. Quantify risk in monetary terms to support business decisions and justify security investments"
  },
  {
    icon: Shield,
    title: "Mitigation Performance",
    description: "Measure the actual effectiveness and ROI of your security controls with continuous validation and threat-informed metrics"
  },
  {
    icon: AlertCircle,
    title: "Third-Party Risk",
    description: "Assess and monitor third-party cyber risks in real-time with continuous threat intelligence and security posture updates"
  }
];

const communityLinks = [
  {
    icon: githubIcon,
    title: "GitHub",
    description: "Explore the open-source code, contribute, and shape the future of risk management",
    href: "https://github.com/OpenGRC-Platform",
    cta: "Star on GitHub"
  },
  {
    icon: documentationIcon,
    title: "Documentation",
    description: "Get started with OpenGRC, explore features, and learn best practices",
    href: "https://docs.opengrc.io",
    cta: "Read the docs"
  },
  {
    icon: slackIcon,
    title: "Community",
    description: "Join the conversation with risk managers and security professionals worldwide",
    href: "https://community.filigran.io",
    cta: "Join Slack"
  }
];

const integrations: IntegrationCard[] = [
  {
    logo: openctiLogo,
    title: "OpenCTI Integration",
    description: "Leverage threat intelligence to assess your risk profile in real-time and prioritize mitigations based on actual threats",
    link: "/platforms/opencti"
  },
  {
    logo: openaevLogo,
    title: "OpenAEV Integration",
    description: "Validate control effectiveness through continuous security testing and measure actual risk reduction",
    link: "/platforms/openaev"
  },
  {
    logo: xtmHubLogo,
    title: "XTM Hub",
    description: "Access all your risk metrics, compliance dashboards, and reports in one unified platform",
    link: "/platforms/xtm-hub"
  }
];

const OpenGRCPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                "radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)",
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
              <img src={opengrcLogo} alt="OpenGRC" className="h-16 lg:h-20 mx-auto" />
            </div>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Threat-Informed and Dynamic
              <br />
              Risk Management & Compliance
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/70 mb-8 leading-relaxed max-w-4xl mx-auto">
              Transform static risk assessments into dynamic metrics and actionable alerts. 
              OpenGRC brings real-time threat intelligence and security validation to GRC, 
              making risk quantification precise and compliance continuous.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <a href="https://github.com/OpenGRC-Platform" target="_blank" rel="noopener noreferrer">
                  Coming Soon
                </a>
              </Button>
              <Button asChild variant="cta" size="lg" className="text-lg px-8">
                <Link to="/book-demo">Learn more</Link>
              </Button>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-card/40 p-8">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan/10 via-transparent to-transparent pointer-events-none" />
              <div className="relative text-center">
                <h3 className="text-2xl font-bold mb-4 text-cyan">Translate Threats into Money Risk</h3>
                <p className="text-lg text-foreground/70 mb-6">
                  As a XTM Suite user, OpenGRC enables you to quantify cyber risks in financial terms, 
                  linking technical threats directly to business impact and investment decisions.
                </p>
                <div className="grid grid-cols-4 gap-4 text-center">
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-2xl lg:text-3xl font-bold text-cyan mb-2">{stat.value}</div>
                      <div className="text-sm text-foreground/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Dynamic Risk Management Powered by Intelligence
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Unlike traditional GRC tools, OpenGRC makes your risk assessment living and breathing - 
              continuously updated with real threat data and validated security controls.
            </p>
          </div>

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

      {/* Value Pillars */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-cyan/5 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Transform Risk Management
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Move from periodic assessments to continuous risk monitoring with 
              OpenGRC's threat-informed approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pillars.map((pillar, index) => (
              <Card key={index} className="p-6 card-glass hover-lift text-center">
                <div className="h-14 w-14 rounded-2xl bg-cyan/10 flex items-center justify-center mx-auto mb-4">
                  <pillar.icon className="h-8 w-8 text-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{pillar.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* XTM Suite Integration */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Seamless XTM Suite Integration
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              OpenGRC is built to work natively with the XTM Suite, bringing business 
              context to technical teams and technical insights to risk managers.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {integrations.map((integration, index) => (
              <Link key={index} to={integration.link} className="group">
                <Card className="p-8 card-glass hover-lift h-full">
                  <img src={integration.logo} alt={integration.title} className="h-12 mb-6" />
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan transition-colors">
                    {integration.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    {integration.description}
                  </p>
                  <div className="flex items-center gap-2 text-cyan text-sm font-semibold">
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-cyan/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why OpenGRC?
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              OpenGRC brings a fresh approach to risk management with modern architecture, 
              open-source transparency, and AI-powered capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 card-glass">
              <Zap className="h-10 w-10 text-cyan mb-4" />
              <h3 className="text-xl font-bold mb-2">Open Source</h3>
              <p className="text-foreground/70 text-sm">
                Community-driven development with full transparency and no vendor lock-in
              </p>
            </Card>
            <Card className="p-6 card-glass">
              <BarChart3 className="h-10 w-10 text-cyan mb-4" />
              <h3 className="text-xl font-bold mb-2">Modern UI/UX</h3>
              <p className="text-foreground/70 text-sm">
                Intuitive interface designed for both technical and business users
              </p>
            </Card>
            <Card className="p-6 card-glass">
              <Shield className="h-10 w-10 text-cyan mb-4" />
              <h3 className="text-xl font-bold mb-2">CTI & AEV Driven</h3>
              <p className="text-foreground/70 text-sm">
                Risk quantification based on real threats and validated security controls
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Join the OpenGRC Community
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Be part of the future of risk management. OpenGRC is coming soon, 
              and we're building it with the community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {communityLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <Card className="p-6 card-glass hover-lift h-full flex flex-col gap-4">
                  <img src={link.icon} alt="" className="h-10 w-auto" loading="lazy" />
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-semibold group-hover:text-cyan transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-cyan text-sm font-semibold">
                    {link.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="relative overflow-hidden bg-gradient-to-br from-cyan/20 via-transparent to-blue-500/20 p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-blue-500/10 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                OpenGRC - Coming Q4 2026
              </h2>
              <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
                We're working hard to bring you the future of risk management. 
                Join our early adopter program and help shape OpenGRC.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="px-8">
                  <a href="https://community.filigran.io" target="_blank" rel="noopener noreferrer">
                    Join the Community
                  </a>
                </Button>
                <Button asChild size="lg" variant="cta" className="px-8">
                  <Link to="/company/contact">
                    Become an Early Adopter
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <GetStartedSection />
      <Footer />
    </div>
  );
};

export default OpenGRCPage;
