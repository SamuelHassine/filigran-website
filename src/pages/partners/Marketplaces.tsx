import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { LIVE_DEMO_PATH } from "@/lib/routes";

import awsMarketplaceLogo from "@/assets/partners/marketplaces/aws-marketplace-logo.png.webp";
import microsoftAzureLogo from "@/assets/partners/marketplaces/microsoft-azure-logo.png";
import dataTransformationIcon from "@/assets/partners/marketplaces/data-transformation.svg";
import knowledgeManagementIcon from "@/assets/partners/marketplaces/knowledge-management.svg";
import procurementIcon from "@/assets/partners/marketplaces/group-168.svg";
import automationIcon from "@/assets/partners/marketplaces/automation-scenarios-playbooks.svg";

interface MarketplaceListing {
  name: string;
  description: string;
  logo: string;
  logoAlt: string;
  href: string;
}

interface Benefit {
  title: string;
  description: string;
  icon?: string;
  iconAlt?: string;
  ctaLabel?: string;
  ctaLink?: string;
}

interface DeploymentOption {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
}

const heroBackground = {
  backgroundColor: "#01091f",
  backgroundImage:
    "radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const ctaBackground = {
  backgroundColor: "#030c21",
  backgroundImage:
    "radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)",
};

const marketplaceListings: MarketplaceListing[] = [
  {
    name: "AWS",
    description: "OpenCTI is available in the AWS Marketplace.",
    logo: awsMarketplaceLogo,
    logoAlt: "AWS Marketplace logo",
    href: "https://aws.amazon.com/marketplace/pp/prodview-6wny7sonamtsk",
  },
  {
    name: "Microsoft Azure",
    description: "OpenCTI is available in the Microsoft Azure Marketplace.",
    logo: microsoftAzureLogo,
    logoAlt: "Microsoft Azure logo",
    href: "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/filigran.opencti_ee_saas_azure",
  },
];

const benefits: Benefit[] = [
  {
    title: "Seamless Deployment",
    description:
      "The entire deployment process is managed for seamless integration into existing infrastructure, ensuring effective use.",
    icon: dataTransformationIcon,
    iconAlt: "Custom icon - data transformation in blue",
  },
  {
    title: "Global Availability",
    description:
      "Deploy products in various regions worldwide, leveraging the global infrastructure of marketplaces to ensure optimal performance.",
    icon: knowledgeManagementIcon,
    iconAlt: "Custom icon - knowledge management in blue",
  },
  {
    title: "Streamlined Subscription and Procurement",
    description:
      "Subscribing through an existing marketplace account simplifies the procurement process, reducing time and effort, and accelerating access and implementation.",
    icon: procurementIcon,
    iconAlt: "Custom icon - no hidden cost in blue",
  },
  {
    title: "Unified Management",
    description:
      "Manage all subscriptions from a single portal, making it easier to handle multiple products in one place while simplifying billing and administrative processes.",
    icon: automationIcon,
    iconAlt: "Custom icon - automation scenarios and playbooks in blue",
  },
  {
    title: "Want to know more?",
    description: "Talk to the Filigran team to learn more about the availability of our products on Marketplaces.",
    ctaLabel: "Contact us",
    ctaLink: "/company/contact",
  },
];

const deploymentOptions: DeploymentOption[] = [
  {
    title: "Open Source",
    description:
      "Deploy OpenCTI Community Edition on-premise using the open source releases and get help by subscribing to a Filigran support packages.",
    href: "https://docs.opencti.io/latest/deployment/installation",
    ctaLabel: "Install now",
  },
  {
    title: "Cloud Hosting",
    description:
      "Enjoy a fully managed OpenCTI Enterprise Edition hosted by Filigran with self service provisionning and support included.",
    href: "/offerings/software-as-a-service",
    ctaLabel: "Learn more",
  },
  {
    title: "Enterprise Edition",
    description:
      "Deploy OpenCTI on-promise and subscribe to the Enterprise Edition to get advanced automation and AI features with support included.",
    href: "/offerings/opencti-enterprise-edition",
    ctaLabel: "Learn more",
  },
];

const Marketplaces = () => {
  const benefitCards = benefits.filter((benefit) => !benefit.ctaLabel);
  const benefitCta = benefits.find((benefit) => benefit.ctaLabel);

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
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">Marketplaces</p>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">Marketplaces</h1>
              <p className="text-lg text-white/80 md:text-xl">
                Discover the list of marketplaces where our cybersecurity products and offers are available.
              </p>
              <div className="flex justify-center">
                <Button asChild size="lg" variant="cta" className="px-10">
                  <Link to="/company/contact">Contact</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8 space-y-10">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Purchase and deploy XTM solutions from marketplaces
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {marketplaceListings.map((listing) => (
                <a
                  key={listing.name}
                  href={listing.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-[28px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Card className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-0 text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-[0_35px_110px_rgba(2,12,35,0.55)]">
                    <div className="flex items-center justify-center border-b border-white/10 bg-white px-8 py-10">
                      <img
                        src={listing.logo}
                        alt={listing.logoAlt}
                        loading="lazy"
                        className="h-16 w-full max-w-[220px] object-contain drop-shadow-sm"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
                      <div>
                        <h3 className="text-2xl font-semibold tracking-tight text-white">{listing.name}</h3>
                        <p className="mt-2 text-sm text-white/80">{listing.description}</p>
                      </div>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan">
                        Visit marketplace
                        <ArrowUpRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8 space-y-16">
            <div className="mx-auto max-w-4xl text-center space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/60">Marketplace advantages</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Benefits of using XTM solutions on major marketplaces
              </h2>
              <p className="text-base text-foreground/70">
                Replicate the same frictionless rollout your teams enjoy on AWS and Azure while keeping procurement and subscription
                management centralized.
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {benefitCards.map((benefit) => (
                <Card
                  key={benefit.title}
                  className="h-full space-y-4 border-white/10 bg-card/80 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan/50"
                >
                  {benefit.icon && (
                    <div className="h-12 w-12 rounded-2xl bg-cyan/10 p-2.5">
                      <img src={benefit.icon} alt={benefit.iconAlt} className="h-full w-full object-contain" loading="lazy" />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/70">{benefit.description}</p>
                </Card>
              ))}

              {benefitCta?.ctaLink && (
                <Card className="flex h-full flex-col gap-4 border-white/10 bg-gradient-to-br from-cyan/10 to-blue-500/10 p-6 text-foreground backdrop-blur-xl">
                  <h3 className="text-xl font-semibold">{benefitCta.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/80">{benefitCta.description}</p>
                  <Button asChild variant="secondary" className="w-full sm:w-auto">
                    <Link to={benefitCta.ctaLink}>{benefitCta.ctaLabel}</Link>
                  </Button>
                </Card>
              )}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8 space-y-10">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Explore additional deployment options</h2>
              <p className="text-base text-foreground/70">
                Beyond marketplaces, discover deployment methods tailored to your needs.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {deploymentOptions.map((option) => (
                <a
                  key={option.title}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-[28px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Card className="flex h-full flex-col border border-border/60 bg-card/80 p-6 transition-all duration-300 hover:border-cyan/40 hover:shadow-[0_20px_70px_rgba(2,11,29,0.35)]">
                    <h3 className="text-xl font-semibold text-foreground">{option.title}</h3>
                    <p className="mt-3 text-sm text-foreground/70">{option.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan">
                      {option.ctaLabel}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-32 px-4">
          <div className="absolute inset-0" style={ctaBackground} />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-cyan/30 blur-[120px] animate-pulse" />
            <div
              className="absolute bottom-1/4 right-1/4 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[140px] animate-pulse"
              style={{ animationDelay: "1.2s" }}
            />
            <div className="absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/20 blur-[150px] animate-glow" />
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

          <div className="container relative z-10 mx-auto">
            <div className="mx-auto max-w-4xl text-center text-white space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Get started today</p>
              <h2 className="text-4xl font-bold md:text-5xl">Get started today</h2>
              <p className="text-lg text-white/80 md:text-2xl">
                Try the live demo for free or book a personalized demo to discover how our solutions can streamline your cybersecurity
                operations.
              </p>
              <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="group text-lg">
                  <Link to={LIVE_DEMO_PATH}>
                    Try live demo
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="cta" className="group text-lg px-8 py-6">
                  <Link to="/book-demo">
                    Book a demo
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
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

export default Marketplaces;


