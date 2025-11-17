import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PartnerCard } from "@/components/partners/PartnerCard";
import { technologyPartners } from "@/data/partnerEcosystem";
import { Cable, Database, Handshake } from "lucide-react";

const heroBackground = {
  backgroundColor: "#01091f",
  backgroundImage:
    "radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const highlights = [
  {
    title: "Deep platform integrations",
    description:
      "Align product roadmaps, APIs, and data models to ensure OpenCTI-driven workflows extend seamlessly into EDR, SIEM, and orchestration platforms.",
    icon: Cable,
  },
  {
    title: "Joint data ecosystems",
    description:
      "Blend premium intelligence feeds, telemetry, and detections with OpenCTI knowledge graphs to keep analysts informed with real-time context.",
    icon: Database,
  },
  {
    title: "Shared go-to-market",
    description:
      "Partner with Filigran on briefings, enablement, and co-selling motions that demonstrate the value of eXtended Threat Management.",
    icon: Handshake,
  },
];

const TechnologyAlliances = () => {
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
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">Technology alliances</p>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Extend the <span className="text-gradient-cyan">eXtended Threat Management</span> stack
              </h1>
              <p className="text-lg text-white/80 md:text-xl">
                Work closely with Filigran to align product, data, and integration strategies that unlock more value for joint
                customers.
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
          <div className="container mx-auto px-4 lg:px-8 space-y-12">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/60">Why partner</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Interoperability and openness define the Filigran ecosystem
              </h2>
              <p className="text-base text-foreground/70">
                Technology alliances ensure OpenCTI, OpenAEV, and OpenGRC plug into the telemetry, detections, and workflows that
                analysts already trust.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="h-full border-border/70 bg-card/80 p-6 backdrop-blur">
                    <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-cyan/10 p-3 text-cyan">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm text-foreground/70">{item.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#040c1d]">
          <div className="container mx-auto px-4 lg:px-8 space-y-12">
            <div className="max-w-3xl space-y-4 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">Featured alliances</p>
              <h2 className="text-3xl font-bold lg:text-4xl">Trusted technology partners</h2>
              <p className="text-base text-white/80">
                Filigran works with best-in-class data providers, detection platforms, and automation vendors to deliver open yet
                governed threat intelligence workflows.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {technologyPartners.map((partner) => (
                <PartnerCard key={partner.name} partner={partner} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8 space-y-12">
            <Card className="border-white/10 bg-white/5 p-10 text-center text-white shadow-[0_30px_80px_rgba(3,12,33,0.35)]">
              <h2 className="text-3xl font-bold lg:text-4xl">Have an integration or data partnership in mind?</h2>
              <p className="mt-4 text-base text-white/80">
                Tell us about your platform or dataset. We will align on enablement, certification, and joint communications to
                launch successful integrations.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="px-8">
                  <Link to="/book-demo">Request info</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/50 text-white px-8">
                  <Link to="/partners/mssp-partners">Meet MSSP partners</Link>
                </Button>
              </div>
            </Card>

            <Card className="flex flex-col gap-6 border-border/60 bg-card/70 p-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/60">Explore more</p>
                <h3 className="text-2xl font-semibold text-foreground">Solutions Providers</h3>
                <p className="text-sm text-foreground/70">
                  Discover the consultancies and resellers who operationalize eXtended Threat Management outcomes.
                </p>
              </div>
              <Button asChild variant="outline" className="w-full px-6 py-3 md:w-auto border-cyan/40 text-cyan">
                <Link to="/partners/solutions-providers">Learn more</Link>
              </Button>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TechnologyAlliances;

