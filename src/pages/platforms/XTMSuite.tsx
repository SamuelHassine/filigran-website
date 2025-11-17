import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { LIVE_DEMO_PATH } from "@/lib/routes";

import heroDiagram from "@/assets/illustrations/xtm-suite/hero-diagram.svg";
import openctiCardIllustration from "@/assets/illustrations/xtm-suite/opencti-card.svg";
import openaevCardIllustration from "@/assets/illustrations/xtm-suite/openaev-card.svg";

import dataTransformationIcon from "@/assets/icons/xtm/data-transformation.svg";
import auditLoggingIcon from "@/assets/icons/xtm/audit-logging-user-behavior-analytics.svg";
import xtmCheckIcon from "@/assets/icons/xtm/check.svg";

import githubIcon from "@/assets/icons/github-white.svg";
import slackIcon from "@/assets/icons/slack-white.svg";

const differentiators = [
  {
    icon: dataTransformationIcon,
    title: "Unified Threat Landscape View",
    description:
      "Use a Cyber Threat Intelligence-driven approach to operationalize tactical and strategic insights, elevating readiness for the next attack."
  },
  {
    icon: auditLoggingIcon,
    title: "De-siloed Security Operations and Risk Management",
    description:
      "Integrate easily with your cybersecurity ecosystem, including endpoint agents and CTI feeds, so intel, validation, and risk stay in sync."
  },
  {
    icon: xtmCheckIcon,
    title: "Continuously Updated Risk Levels",
    description:
      "Synergize OpenCTI, OpenAEV, and the upcoming OpenGRC to keep threat intel, exposure validation, and governance metrics always up to date."
  }
];

type SolutionCTA = { label: string; to: string } | { label: string; href: string };

interface Solution {
  title: string;
  description: string;
  image?: string;
  comingSoon?: boolean;
  cta?: SolutionCTA;
}

const solutions: Solution[] = [
  {
    title: "OpenCTI",
    description:
      "Understand the threats that have targeted, are targeting, or could target your organization with a unified knowledge graph and dissemination workflows.",
    image: openctiCardIllustration,
    cta: { label: "Learn more", to: "/platforms/opencti" }
  },
  {
    title: "OpenAEV",
    description:
      "Evaluate whether your organization can defend against real threats. Design scenarios from atomic tests to strategic exercises and capture data-driven feedback.",
    image: openaevCardIllustration,
    cta: { label: "Learn more", to: "/platforms/openaev" }
  },
  {
    title: "OpenGRC (Coming soon)",
    description:
      "Transform static governance and compliance assessments into dynamic metrics and actionable alerts. Align risk quantification with your evolving threat profile.",
    comingSoon: true,
    cta: { label: "Request info", to: "/company/contact" }
  }
];

const keepUpLinks = [
  {
    title: "OpenCTI Roadmap",
    description: "Find the detailed, regularly updated feature roadmap on GitHub.",
    icon: githubIcon,
    href: "https://github.com/OpenCTI-Platform/opencti/milestones"
  },
  {
    title: "OpenAEV Roadmap",
    description: "Track the evolution of exposure validation with the OpenAEV roadmap on GitHub.",
    icon: githubIcon,
    href: "https://github.com/OpenBAS-Platform/openbas/milestones"
  },
  {
    title: "Slack Community",
    description: "Stay informed about platform developments across the suite and engage with the broader Filigran community.",
    icon: slackIcon,
    href: "https://community.filigran.io"
  }
];

export default function XTMSuite() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
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
            <div className="absolute -top-24 -left-12 h-[420px] w-[420px] rounded-full bg-cyan/20 blur-[160px]" />
            <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[200px]" />
            <div className="absolute top-1/2 left-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-[220px] animate-glow" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              eXtended Threat Management Suite
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/70 mb-8 leading-relaxed max-w-3xl mx-auto">
              Tailored to elevate cybersecurity through comprehensive threat intelligence, advanced adversary simulation,
              and strategic cyber risk management solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to={LIVE_DEMO_PATH}>
                  Live demo
                </Link>
              </Button>
              <Button asChild variant="cta" size="lg" className="text-lg px-8">
                <Link to="/book-demo">Book a demo</Link>
              </Button>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-card/40">
              <img src={heroDiagram} alt="XTM suite diagram" className="w-full h-auto" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our differentiators</h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Threat-driven approach in anticipating future attacks and identifying the right priorities and remediation paths.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {differentiators.map((item, index) => (
              <Card key={index} className="p-6 card-glass hover-lift h-full flex flex-col items-start text-left">
                <div className="h-14 w-14 rounded-2xl bg-cyan/10 flex items-center justify-center mb-5">
                  <img src={item.icon} alt="" className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-cyan/5 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our solutions</h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              XTM is a suite of threat intelligence-driven open-source platforms that reduces risk exposure across technical and human dimensions.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-20">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <p className="text-xs uppercase tracking-[0.4em] text-cyan/80">
                    {solution.comingSoon ? "Coming soon" : solution.title}
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold">{solution.title}</h3>
                  <p className="text-lg text-foreground/70 leading-relaxed">{solution.description}</p>
                  {solution.cta && (
                    <div>
                      <Button asChild variant="outlineGlow" className="group">
                        {"to" in solution.cta ? (
                          <Link to={solution.cta.to}>
                            {solution.cta.label}
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                          </Link>
                        ) : (
                          <a href={solution.cta.href} target="_blank" rel="noopener noreferrer">
                            {solution.cta.label}
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                          </a>
                        )}
                      </Button>
                    </div>
                  )}
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  {solution.image ? (
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-card/50 p-4">
                      <img src={solution.image} alt={solution.title} className="w-full h-auto" loading="lazy" />
                    </div>
                  ) : (
                    <Card className="p-8 card-glass h-full flex flex-col items-center justify-center text-center">
                      <p className="text-lg text-foreground/70">
                        Tell us that you want early access to OpenGRC and we’ll notify you as soon as it’s available.
                      </p>
                    </Card>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keep up with Filigran */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-cyan/5 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Keep up with Filigran</h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Follow the latest developments for each solution via GitHub roadmaps and our Slack community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {keepUpLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full p-6 card-glass hover-lift transition-all duration-300 flex flex-col">
                  <img src={link.icon} alt="" className="h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan transition-colors">{link.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed flex-grow">{link.description}</p>
                  <div className="flex items-center gap-2 text-cyan text-sm font-semibold mt-4">
                    {link.title === "Slack Community" ? "Join us" : "Learn more"}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
              Get started today
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Try the live demo for free or book a personalized walkthrough to see how XTM Suite streamlines your cybersecurity operations.
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
