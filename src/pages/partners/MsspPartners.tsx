import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PartnerCard } from "@/components/partners/PartnerCard";
import { msspPartners } from "@/data/partnerEcosystem";
import openctiDashboard from "@/assets/partners/opencti-dashboard.svg";
import {
  Activity,
  ArrowRight,
  Bot,
  Layers,
  LineChart,
  Network,
  Presentation,
  ShieldCheck,
  Sparkles,
  Target,
  PlugZap,
} from "lucide-react";

const heroBackground = {
  backgroundColor: "#01091f",
  backgroundImage:
    "radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const valueProps = [
  {
    title: "Drive better security outcomes",
    description:
      "Boost MSSP capabilities with additional indicators from OpenCTI to identify and block threats that traditional controls miss.",
    icon: ShieldCheck,
  },
  {
    title: "Instill customer confidence",
    description:
      "Integrate threat intelligence into your managed stack to deliver contextual insights and demonstrate proactive protection.",
    icon: Sparkles,
  },
  {
    title: "Create new revenue streams",
    description:
      "Differentiate from basic monitoring services with premium managed threat intelligence offerings that command higher margins.",
    icon: LineChart,
  },
  {
    title: "Unified threat intelligence operations",
    description:
      "Break down intelligence silos by integrating seamlessly with SIEM, EDR, and collaboration workflows across security teams.",
    icon: Network,
  },
];

const featureList = [
  {
    title: "Enterprise-ready architecture",
    description:
      "Handle massive data volumes without performance degradation or added costs. Accommodate unlimited users and data sources with no extra fees.",
    icon: Layers,
  },
  {
    title: "Comprehensive integration support",
    description:
      "Connect seamlessly with SIEM and EDR solutions while aggregating premium and open-source feeds through a growing library of connectors.",
    icon: PlugZap,
  },
  {
    title: "Proactive threat hunting",
    description:
      "Identify potential compromises before they become incidents by building structured hunting programs tied to the latest tradecraft.",
    icon: Target,
  },
  {
    title: "Enhanced incident response",
    description:
      "Enable faster detection, more effective triage, and better containment with immediate insight into TTPs and likely attack patterns.",
    icon: Activity,
  },
  {
    title: "Intelligence delivery",
    description:
      "Build client-specific dashboards and provide real-time feeds that keep customers informed of relevant threats and reports.",
    icon: Presentation,
  },
  {
    title: "AI-enhanced operations",
    description:
      "Leverage AI to summarize intelligence, synthesize context faster, and accelerate analyst output across managed services.",
    icon: Bot,
  },
];

const growthStages = [
  {
    title: "Start small and scale your practice",
    description: "Begin with the community edition and upgrade to enterprise or SaaS deployments as your MSSP operation grows.",
  },
  {
    title: "Build custom feeds for every segment",
    description:
      "Create new revenue streams with industry-specific dashboards and reports while layering advanced features as your team matures.",
  },
];

const MsspPartners = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        <section className="relative overflow-hidden pt-32 pb-24 text-white">
          <div className="absolute inset-0" style={heroBackground} />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 -left-16 h-[420px] w-[420px] rounded-full bg-cyan/20 blur-[160px]" />
            <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[200px]" />
            <div className="absolute top-1/2 left-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-[220px] animate-glow" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-t from-background via-background/50 to-transparent" />

          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl text-center space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">MSSP Partners</p>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Transform your MSSP business with <span className="text-gradient-cyan">OpenCTI</span>
              </h1>
              <p className="text-lg text-white/80 md:text-xl">
                Deliver differentiated managed threat intelligence services, accelerate hunting programs, and keep every customer
                informed with unified intelligence operations.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="px-8">
                  <Link to="/become-a-partner">Become a partner</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/60">
                Threat intelligence, your edge
              </p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Turn intelligence into service value</h2>
              <p className="text-base text-foreground/70">
                OpenCTI helps MSSPs deliver premium managed services with additional context, stronger automation, and more
                credible reporting.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {valueProps.map((prop) => {
                const Icon = prop.icon;
                return (
                  <Card
                    key={prop.title}
                    className="h-full border-border/70 bg-card/80 p-6 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan/10"
                  >
                    <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-cyan/10 p-3 text-cyan">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{prop.title}</h3>
                    <p className="mt-3 text-sm text-foreground/70">{prop.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <Card className="overflow-hidden border-white/10 bg-gradient-to-br from-white/5 to-white/0 text-white">
              <div className="grid gap-10 lg:grid-cols-2">
                <div className="p-8 lg:p-12 space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">OpenCTI platform</p>
                  <h2 className="text-3xl font-bold lg:text-4xl">A complete threat intelligence platform</h2>
                  <p className="text-base text-white/80">
                    OpenCTI replaces fragmented spreadsheets and disparate repositories with a unified platform that integrates
                    intelligence from open-source feeds, commercial providers, and internally generated intel.
                  </p>
                  <p className="text-base text-white/80">
                    Seamless SIEM and EDR integrations break down intelligence silos so analysts can collaborate effectively and
                    share insights about emerging threats in real time.
                  </p>
                </div>
                <div className="relative flex items-center justify-center bg-white/5">
                  <img
                    src={openctiDashboard}
                    alt="OpenCTI dashboard preview"
                    loading="lazy"
                    className="w-full max-w-xl object-contain p-8"
                  />
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4 lg:px-8 space-y-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/60">Platform capabilities</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Built for managed service scale</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featureList.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={feature.title}
                    className="h-full border-border/70 bg-card p-6 transition hover:-translate-y-1 hover:border-cyan/40"
                  >
                    <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-cyan/10 p-3 text-cyan">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-3 text-sm text-foreground/70">{feature.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <Card className="grid gap-10 border-white/10 bg-white/5 p-8 text-white lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">Growth path</p>
                <h2 className="text-3xl font-bold">Take your MSSP business to the next level</h2>
                <p className="text-base text-white/80">
                  Transform threat intelligence into a competitive advantage and grow with OpenCTI as your managed practice evolves.
                </p>
              </div>
              <div className="space-y-6">
                {growthStages.map((stage) => (
                  <div key={stage.title} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                    <h3 className="text-lg font-semibold">{stage.title}</h3>
                    <p className="mt-2 text-sm text-white/80">{stage.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section className="py-20 bg-[#040c1d]">
          <div className="container mx-auto px-4 lg:px-8 space-y-12">
            <div className="max-w-3xl space-y-4 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">Featured partners</p>
              <h2 className="text-3xl font-bold lg:text-4xl">Trusted MSSP partners worldwide</h2>
              <p className="text-base text-white/80">
                Filigran collaborates with the most qualified MSSPs to bring eXtended Threat Management outcomes to customers across
                every industry and geography.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {msspPartners.map((partner) => (
                <PartnerCard key={partner.name} partner={partner} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-32 px-4">
          <div className="absolute inset-0" style={heroBackground} />

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-cyan/30 blur-[120px] animate-pulse" />
            <div
              className="absolute bottom-1/4 right-1/3 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[150px] animate-pulse"
              style={{ animationDelay: "1.2s" }}
            />
            <div className="absolute inset-0 w-full h-full opacity-20">
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
          </div>

          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl text-center text-white space-y-6">
              <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">Ready to co-deliver intelligence outcomes?</h2>
              <p className="text-lg text-white/80 md:text-2xl">
                Join the Filigran ecosystem to access enablement programs, co-marketing initiatives, and product roadmaps tailored for
                managed service teams.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="group text-lg px-8 py-6">
                  <Link to="/book-demo">
                    Request info
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group border-white/50 text-white px-8 py-6 hover:bg-white/10"
                >
                  <Link to="/partners">
                    Explore the ecosystem
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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

export default MsspPartners;

