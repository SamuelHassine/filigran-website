import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PartnerCard } from "@/components/partners/PartnerCard";
import { solutionPartners } from "@/data/partnerEcosystem";
import { ArrowRight, Building2, Globe2, Users } from "lucide-react";

const heroBackground = {
  backgroundColor: "#01091f",
  backgroundImage:
    "radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const impactHighlights = [
  {
    title: "Global reach",
    description: "Consultancies and MSSPs span EMEA, the Americas, and APAC to deliver intelligence outcomes wherever customers are.",
    icon: Globe2,
  },
  {
    title: "Operational expertise",
    description: "Partners combine managed services, advisory programs, and integration practices to operationalize XTM playbooks.",
    icon: Users,
  },
  {
    title: "Industry specializations",
    description: "Sector-focused teams tailor OpenCTI, OpenAEV, and OpenGRC deployments for government, finance, critical infrastructure, and more.",
    icon: Building2,
  },
];

const SolutionsProviders = () => {
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
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">Solutions providers</p>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Partners who operationalize <span className="text-gradient-cyan">XTM</span>
              </h1>
              <p className="text-lg text-white/80 md:text-xl">
                Filigran works closely with managed services teams, VARs, and consultancies that help customers maximize the value of
                the eXtended Threat Management suite.
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
          <div className="container mx-auto px-4 lg:px-8 space-y-10">
            <div className="grid gap-6 md:grid-cols-3">
              {impactHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="border-border/60 bg-card/80 p-6 backdrop-blur">
                    <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-cyan/10 p-3 text-cyan">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm text-foreground/70">{item.description}</p>
                  </Card>
                );
              })}
            </div>

            <div className="max-w-3xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/60">Partner directory</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Discover the community of business partners we collaborate with
              </h2>
              <p className="text-base text-foreground/70">
                From government-grade MSSPs to boutique consultancies, these teams bring Filigran products closer to the missions of
                customers everywhere.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 bg-[#040c1d]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              {solutionPartners.map((partner) => (
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
            <div className="absolute inset-0 opacity-20">
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
            <div className="mx-auto max-w-4xl space-y-6 text-center text-white">
              <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                Do you have questions or want to initiate a partnership?
              </h2>
              <p className="text-lg text-white/80 md:text-2xl">
                Tell us how you enable customers today and we will help you embed the XTM suite into your offerings and go-to-market
                motions.
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
                  <Link to="/partners/technology-alliances">
                    View technology alliances
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

export default SolutionsProviders;

