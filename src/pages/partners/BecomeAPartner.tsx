import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HubspotForm } from "@/components/HubspotForm";
import { solutionPartners, technologyPartners } from "@/data/partnerEcosystem";

const heroBackground = {
  backgroundColor: "#01091f",
  backgroundImage:
    "radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

interface PartnerHighlight {
  title: string;
  description: string;
  to: string;
  logos: { src: string; alt: string }[];
}

const buildLogoPreview = (partners: { logo: string; logoAlt: string }[], count = 4) =>
  partners.slice(0, count).map((partner) => ({
    src: partner.logo,
    alt: partner.logoAlt,
  }));

const partnerHighlights: PartnerHighlight[] = [
  {
    title: "Solutions Providers",
    description: "Discover the community of resellers and MSSPs with whom Filigran collaborates.",
    to: "/partners/solutions-providers",
    logos: buildLogoPreview(solutionPartners, 4),
  },
  {
    title: "Technology Alliances",
    description: "We are working closely with technology partners to provide more value with our products.",
    to: "/partners/technology-alliances",
    logos: buildLogoPreview(technologyPartners, 4),
  },
];

const BecomeAPartner = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navigation />

      <main className="flex-1">
        <section className="relative flex min-h-screen overflow-hidden pt-40 pb-24 text-white">
          <div className="absolute inset-0" style={heroBackground} />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 -left-16 h-[420px] w-[420px] rounded-full bg-cyan/20 blur-[160px]" />
            <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[200px]" />
            <div className="absolute top-1/2 left-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-[220px] animate-glow" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-t from-background via-background/50 to-transparent" />

          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">Partner ecosystem</p>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Become a <span className="text-gradient-cyan">Filigran partner</span>
              </h1>
              <p className="text-lg text-white/80 md:text-xl">
                Interested in our partnership tiers or have questions about the channel? Let us know how we can help.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-10">
                <div className="space-y-4 text-base text-white/80">
                  <p>
                    Take the next step to becoming a <span className="font-semibold text-white">Filigran Partner.</span> Complete
                    the form to get connected with the appropriate regional <span className="font-semibold text-white">Filigran channel manager</span>{" "}
                    who will guide you through the process.
                  </p>
                  <p>
                    From enablement to integration workshops and go-to-market alignment, our team ensures every partner tier can
                    deliver the full value of the Filigran platform portfolio.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Solutions",
                      description: "XTM Suite • OpenCTI • OpenAEV • Agentic AI",
                    },
                    {
                      title: "Offerings",
                      description: "SaaS • Support & Services • Enterprise Editions",
                    },
                    {
                      title: "Resources",
                      description: "XTM Hub • Filigran Academy • Content Library",
                    },
                    {
                      title: "Company",
                      description: "Leadership • Investors • Marketplaces",
                    },
                  ].map((item) => (
                    <Card key={item.title} className="border-white/10 bg-white/5 p-4 text-left text-white backdrop-blur">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">{item.title}</p>
                      <p className="mt-2 text-sm text-white/80">{item.description}</p>
                    </Card>
                  ))}
                </div>

                <div className="grid gap-4">
                  {partnerHighlights.map((highlight) => (
                    <Card
                      key={highlight.title}
                      className="flex flex-col gap-5 border-white/10 bg-white/5 p-5 text-left text-white backdrop-blur"
                    >
                      <div className="flex flex-wrap gap-3">
                        {highlight.logos.map((logo) => (
                          <div
                            key={`${highlight.title}-${logo.alt}`}
                            className="flex h-14 flex-1 min-w-[96px] items-center justify-center rounded-2xl border border-white/40 bg-white px-4 py-2 shadow-lg/20"
                          >
                            <img
                              src={logo.src}
                              alt={logo.alt}
                              loading="lazy"
                              className="h-8 w-full max-w-[120px] object-contain"
                            />
                          </div>
                        ))}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{highlight.title}</h3>
                        <p className="mt-2 text-sm text-white/75">{highlight.description}</p>
                      </div>
                      <Button asChild size="lg" variant="cta" className="group w-fit px-6">
                        <Link to={highlight.to} className="inline-flex items-center gap-2">
                          Learn more
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>

              <Card
                id="partner-form"
                className="border-white/10 bg-white/5 p-8 text-white shadow-2xl backdrop-blur-lg"
              >
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan/80">Partner request form</p>
                  <h3 className="text-2xl font-bold">Connect with a regional channel manager</h3>
                  <p className="text-sm text-white/70">
                    Share your details and we will introduce you to the Filigran channel manager supporting your region.
                  </p>
                </div>
                <div className="mt-8">
                  <HubspotForm portalId="26791207" formId="33867c63-9718-4162-abca-f77a5f068221" region="eu1" />
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BecomeAPartner;


