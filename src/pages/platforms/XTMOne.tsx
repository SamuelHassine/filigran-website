import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LIVE_DEMO_PATH } from "@/lib/routes";
import {
  ArrowRight,
  Bot,
  Sparkles,
  Workflow,
  ScrollText,
  Gauge,
  ShieldCheck,
  MessageSquare,
  Globe,
  Layers,
  Settings,
  Rocket
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import xtmOneLogo from "@/assets/xtm-one-logo.png";
import aiDiagram from "@/assets/illustrations/agentic-ai-diagram.svg";

const aiPrinciples = [
  "AI copilots elevate analysts instead of replacing their decisions.",
  "We focus on lowering time-to-value by automating research and preparation.",
  "Every capability lives inside a single cockpit that stays transparent and controllable."
];

const aiJourney = [
  {
    icon: Layers,
    phase: "Assist",
    title: "Guided copilots in every workflow",
    description: "Conversational helpers surface prioritized intel, exposures, and remediation steps without context switching."
  },
  {
    icon: Settings,
    phase: "Automate",
    title: "Composable agent workflows",
    description: "Reusable chains connect OpenCTI, OpenAEV, and external data so playbooks adapt to each investigation."
  },
  {
    icon: Rocket,
    phase: "Customize",
    title: "Fully agentic operations",
    description: "Dedicated datasets, vector graphs, and model choices tailor the cockpit to each organization’s security program."
  }
];

const capabilities: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Bot,
    title: "Structure knowledge from raw data",
    description: "Transform incoming feeds into STIX format using AI-based NLP extraction so intel is actionable instantly."
  },
  {
    icon: MessageSquare,
    title: "Natural-language copilots",
    description: "Ask product-aware copilots questions in plain language and receive referenced answers inside the platform."
  },
  {
    icon: Sparkles,
    title: "Insights & summaries",
    description: "Generate up-to-date threat briefings, insights on indicators, and executive-ready reports in seconds."
  },
  {
    icon: ScrollText,
    title: "Custom reports & dashboards",
    description: "Produce role-specific templates and dashboards so each stakeholder receives the most actionable view."
  },
  {
    icon: Workflow,
    title: "Scenario Builder",
    description: "Create AI-assisted simulations for training and validation by fusing intel from OpenCTI, OpenAEV, and beyond."
  },
  {
    icon: Globe,
    title: "Cross-product intelligence",
    description: "Correlate data across the entire XTM Suite to highlight the most relevant actions and remediation paths."
  }
];

const aiGuarantees = [
  "We don’t collect user data for training or validation.",
  "Only platform logs are retained (30 days, SaaS only) for debugging purposes.",
  "AI capabilities can be disabled or scoped at any time through admin controls.",
  "We rely on freely accessible, downloadable models so customers keep ownership of their data."
];

const roadmapHighlights = [
  {
    title: "Copilots in every XTM workflow",
    description: "Embed conversational experiences across investigation, validation, and reporting surfaces."
  },
  {
    title: "Configurable agent graphs",
    description: "Let teams design their own combinations of tools, data sources, and guardrails inside the cockpit."
  },
  {
    title: "Safe, private inference options",
    description: "Support managed, customer-hosted, and local models to match regulatory and sovereignty requirements."
  }
];

export default function XTMOne() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#090624",
              backgroundImage:
                "radial-gradient(96.21% 108.44% at 94.34% 113.69%, #B77BFF 2%, #7B3FF2 32%, rgba(123, 63, 242, 0.54) 63%, rgba(123, 63, 242, 0) 100%)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-16 h-[420px] w-[420px] rounded-full bg-purple-500/20 blur-[160px]" />
            <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-purple-600/20 blur-[200px]" />
            <div className="absolute top-1/2 left-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[220px] animate-glow" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <div className="inline-block mb-8">
              <img src={xtmOneLogo} alt="XTM One" className="h-16 lg:h-20 mx-auto" />
            </div>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              AI-Native Threat Informed Defense Cockpit
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/70 mb-8 leading-relaxed max-w-4xl mx-auto">
              XTM One is Filigran's AI-native platform for creating and running customizable agentic workflows across the XTM Suite—
              from ingesting intelligence to validating exposures and accelerating remediation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to={LIVE_DEMO_PATH}>
                  Try live demo
                </Link>
              </Button>
              <Button asChild variant="cta" size="lg" className="text-lg px-8">
                <Link to="/book-demo">Book a demo</Link>
              </Button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-card/40 p-4">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent pointer-events-none" />
              <img src={aiDiagram} alt="Agentic AI architecture" className="relative w-full h-auto" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* AI Philosophy */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/80 mb-3">How we consider AI at Filigran</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Assistant & Enabler first</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Our AI guidelines ensure copilots stay transparent, auditable, and focused on helping analysts. We document and review these principles internally so every team member builds AI features with the same guardrails.
            </p>
          </div>
          <Card className="p-8 card-glass max-w-5xl mx-auto">
            <blockquote className="space-y-4 text-left text-foreground/80">
              {aiPrinciples.map((principle, index) => (
                <p key={index} className="flex gap-3">
                  <ShieldCheck className="w-5 h-5 text-cyan flex-shrink-0 mt-1" />
                  <span>{principle}</span>
                </p>
              ))}
            </blockquote>
          </Card>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-cyan/5 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/80 mb-3">Vision</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">XTM One · AI-native Threat Informed Defense backbone</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              XTM One creates and runs cybersecurity AI agents, hosts the datasets they rely on, and keeps every Filigran product connected so
              teams can move from insight to validation to action without friction.
            </p>
          </div>

          <div className="grid gap-6 max-w-6xl mx-auto">
            <Card className="p-8 card-glass">
              <h3 className="text-2xl font-bold mb-4">Connected across the XTM Suite</h3>
              <p className="text-foreground/70 leading-relaxed">
                Every OpenCTI and OpenAEV deployment taps into the same intelligence, validation, and automation fabric—keeping analysts inside a single cockpit.
              </p>
            </Card>
            <Card className="p-8 card-glass">
              <h3 className="text-2xl font-bold mb-4">Designed for evolution</h3>
              <p className="text-foreground/70 leading-relaxed">
                Start with guided copilots, then unlock automated investigations and fully customizable agent graphs as your maturity grows.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/80 mb-3">Agentic AI journey</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Path toward fully customizable agentic AI</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              XTM One is built to guide teams from assisted workflows to complete control over their AI agents, datasets, and execution environments.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {aiJourney.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="p-6 card-glass hover-lift h-full flex flex-col">
                  <p className="text-xs uppercase tracking-[0.4em] text-cyan/80 mb-2">{step.phase}</p>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-cyan/10 mb-4">
                    <Icon className="w-6 h-6 text-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-foreground/70 leading-relaxed flex-grow">{step.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-cyan/5 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/80 mb-3">How teams succeed with AI</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Autonomous Threat Management workflows</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              XTM One combines AI and automation to shorten every step from intel collection to validation and reporting.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className="p-6 card-glass hover-lift h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan/10 mb-5">
                    <Icon className="w-7 h-7 text-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{capability.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{capability.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Guarantees */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/80 mb-3">Our AI guarantees</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Responsible, controllable AI</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {aiGuarantees.map((item, index) => (
              <Card key={index} className="p-6 card-glass flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-cyan flex-shrink-0 mt-1" />
                <p className="text-foreground/80 leading-relaxed">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-cyan/5 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan/80 mb-3">Continuous evolution</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">What’s next for XTM One</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {roadmapHighlights.map((item, index) => (
              <Card key={index} className="p-6 card-glass flex flex-col gap-3">
                <Gauge className="w-6 h-6 text-cyan" />
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.description}</p>
              </Card>
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to explore the AI-native cockpit?</h2>
            <p className="text-xl md:text-2xl text-foreground/80 mb-12">
              Try the live demo or book a session to see how XTM One unlocks AI-native threat management across the suite.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
