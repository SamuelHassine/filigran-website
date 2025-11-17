import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Share2, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { useCases } from "@/data/useCases";
import { LIVE_DEMO_PATH } from "@/lib/routes";
import disinformationImg from "@/assets/use-cases/use-case-library-disinformation.png";
import breachSimulationImg from "@/assets/use-cases/use-case-library-breach-simulation.png";
import threatMonitoringImg from "@/assets/use-cases/use-case-library-threat-monitoring.png";
import incidentResponseImg from "@/assets/use-cases/use-case-library-incident-response.png";
import socImg from "@/assets/use-cases/use-case-library-soc.png";

const heroStats = [
  { value: "5", label: "Intelligence-led programs" },
  { value: "300+", label: "Bi-directional integrations" },
  { value: "No-code", label: "Automation playbooks" },
];

const differentiators = [
  {
    title: "Unified Threat Landscape View",
    description:
      "Use a Cyber Threat Intelligence-driven approach to operationalize tactical and strategic threat intelligence, enhancing readiness for the next attack.",
    icon: ShieldCheck,
  },
  {
    title: "De-siloed Security Operations & Risk",
    description: "Integrate easily with your cybersecurity ecosystem, from endpoint agents to CTI feeds, to keep workflows orchestrated.",
    icon: Share2,
  },
  {
    title: "Continuously Updated Risk Levels",
    description: "Synergize OpenCTI, OpenAEV and OpenERM intelligence so exposure data, scenarios and remediation paths stay fresh.",
    icon: Layers,
  },
];

const automationHighlights = [
  {
    title: "No-code automation playbooks",
    description: "Trigger enrichments, case creation and notifications via reusable flows that span XTM platforms and partner tooling.",
    icon: Workflow,
  },
  {
    title: "Ariane AI copilots",
    description: "Summarize narratives, build executive-ready briefings and surface remediation priorities directly where teams work.",
    icon: Sparkles,
  },
];

const useCaseMedia: Partial<
  Record<
    string,
    {
      image: string;
      alt: string;
    }
  >
> = {
  "intelligence-driven-defense-against-disinformation": {
    image: disinformationImg,
    alt: "Filigran use case: Intelligence-driven defense against disinformation",
  },
  "intelligence-led-breach-attack-simulation": {
    image: breachSimulationImg,
    alt: "Filigran use case: Intelligence-led breach & attack simulation",
  },
  "threat-monitoring-hunting": {
    image: threatMonitoringImg,
    alt: "Filigran use case: Threat monitoring and hunting",
  },
  "incident-response-and-investigation": {
    image: incidentResponseImg,
    alt: "Filigran use case: Incident response and investigation",
  },
  "intelligence-driven-soc": {
    image: socImg,
    alt: "Filigran use case: Intelligence-driven SOC",
  },
};

const UseCaseLibrary = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pb-24 space-y-24">
        <section className="relative overflow-hidden pt-32 pb-24">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "#01091f",
                backgroundImage:
                  "radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgba(22,235,249,0.5) 2%, rgba(51,120,255,0.45) 32%, rgba(51,59,255,0.3) 63%, rgba(51,96,255,0) 100%)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 left-0 h-[420px] w-[420px] rounded-full bg-cyan/25 blur-[160px]" />
              <div className="absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-blue-500/20 blur-[200px]" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[3fr_2fr] items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.4em] text-cyan/80">Use Case Library</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Intelligence-led cybersecurity use cases
                </h1>
                <p className="text-xl text-foreground/70 leading-relaxed">
                  Operationalize threat intelligence and accelerate your path to Continuous Threat Exposure Management with Filigran’s XTM Suite, leveraging no-code
                  automation playbooks, bi-directional integrations, Ariane AI and more.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button asChild variant="cta" size="lg">
                    <Link to="/book-demo">Book a demo</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/platforms/xtm-suite">Explore XTM Suite</Link>
                  </Button>
                </div>
              </div>

              <Card className="relative overflow-hidden border-white/10 bg-card/80 p-8 backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-transparent to-blue-500/20" />
                <div className="relative space-y-6">
                  <p className="text-sm font-semibold text-cyan tracking-[0.35em]">Why Filigran</p>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Threat-driven programs anticipate future attacks, identify remediation paths and keep every stakeholder aligned with intelligence-grade context.
                  </p>
                  <ul className="space-y-4">
                    {automationHighlights.map((highlight) => (
                      <li key={highlight.title} className="flex items-start gap-3">
                        <div className="rounded-xl bg-cyan/10 p-2 text-cyan">
                          <highlight.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{highlight.title}</p>
                          <p className="text-sm text-foreground/70">{highlight.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {heroStats.map((stat) => (
                <Card key={stat.label} className="p-6 text-center border-white/10 bg-card/80 backdrop-blur-xl">
                  <div className="text-4xl font-bold text-gradient-cyan mb-2">{stat.value}</div>
                  <p className="text-sm uppercase tracking-[0.3em] text-foreground/60">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className="text-sm uppercase tracking-[0.4em] text-cyan/80">Programs</p>
              <h2 className="text-4xl font-bold mb-4">Operationalize your use cases with XTM</h2>
              <p className="text-lg text-foreground/70">
                Each program blends contextual intelligence, automation and guided outcomes so teams can move from detection to response with confidence.
              </p>
            </div>

            <div className="space-y-6">
              {useCases.map((useCase) => {
                const media = useCaseMedia[useCase.slug];
                if (!media) {
                  return null;
                }

                return (
                  <Link key={useCase.slug} to={`/use-cases/${useCase.slug}`} className="group block">
                    <Card className="overflow-hidden border-white/10 bg-card/80 backdrop-blur-xl transition-colors hover:border-cyan/40">
                      <div className="grid gap-0 lg:grid-cols-[320px_minmax(0,1fr)]">
                        <div className="relative h-56 lg:h-full">
                          <img
                            src={media.image}
                            alt={media.alt}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                        </div>
                        <div className="flex flex-col gap-4 p-6 lg:p-8">
                          <div>
                            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan">Use case</span>
                            <h3 className="text-2xl lg:text-3xl font-semibold mt-3">{useCase.title}</h3>
                            <p className="text-lg text-foreground/70">{useCase.subtitle}</p>
                          </div>
                          <p className="text-foreground/80 leading-relaxed">{useCase.description}</p>

                          <div className="flex flex-wrap gap-3">
                            {useCase.stats.map((stat) => (
                              <div key={stat.label} className="rounded-full border border-white/20 px-4 py-2 text-sm text-foreground/80">
                                <span className="font-semibold text-cyan mr-2">{stat.value}</span>
                                {stat.label}
                              </div>
                            ))}
                          </div>

                          <div className="inline-flex items-center gap-2 text-cyan font-semibold group-hover:text-cyan-glow transition-colors">
                            <span>Read more</span>
                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-transparent via-cyan/5 to-transparent">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className="text-sm uppercase tracking-[0.4em] text-cyan/80">Our differentiators</p>
              <h2 className="text-4xl font-bold mb-4">Threat-driven advantages you can activate today</h2>
              <p className="text-lg text-foreground/70">
                Filigran brings CTI, breach & attack simulation and cyber risk into one program so insights, playbooks and reporting stay synchronized.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {differentiators.map((item) => (
                <Card key={item.title} className="border-white/10 bg-card/80 p-6 backdrop-blur-xl">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/10 text-cyan">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 px-4 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#030c21",
              backgroundImage:
                "radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgba(22,235,249,0.4) 2%, rgba(51,120,255,0.4) 32%, rgba(51,59,255,0.3) 63%, rgba(51,96,255,0) 100%)",
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
                backgroundSize: "70px 70px, 70px 70px, 70px 70px",
              }}
            />
          </div>

          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan mb-4">Get started today</p>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                Try the live demo{" "}
                <span className="text-gradient-cyan">
                  or book time with our team
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-white/80 mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Discover how our open-source platforms and expert services can streamline your cybersecurity operations, with actionable playbooks from day one.
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
      </main>

      <Footer />
    </div>
  );
};

export default UseCaseLibrary;

