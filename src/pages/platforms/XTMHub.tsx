import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GetStartedSection } from "@/components/GetStartedSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LIVE_DEMO_PATH } from "@/lib/routes";

import xtmHubLogoWhite from "@/assets/xtm-hub-logo-white-light-blue.svg";
import xtmHubHero from "@/assets/illustrations/xtm-hub/hero-xtm-hub.svg";
import openctiLogo from "@/assets/opencti-logo.svg";
import openaevLogo from "@/assets/openaev-logo.svg";
import filigranLogo from "@/assets/filigran-logo.svg";
import githubIcon from "@/assets/icons/github-white.svg";
import slackIcon from "@/assets/icons/slack-white.svg";
import openaevScenariosImg from "@/assets/illustrations/xtm-hub/openaev-scenarios.webp";
import openctiIntegrationFeedsImg from "@/assets/illustrations/xtm-hub/opencti-integration-feeds.webp";
import openctiDashboardImg from "@/assets/illustrations/xtm-hub/opencti-dashboard.svg";
import filigranAcademyGif from "@/assets/illustrations/xtm-hub/filigran-academy.gif";

interface TextBlock {
  title: string;
  description: string;
}

interface ExperienceLibrary {
  title: string;
  description: ReactNode;
  badge?: string;
  logo: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

const discoverHighlights: TextBlock[] = [
  {
    title: "Instant access to live demo platforms",
    description:
      "Enjoy a streamlined experience to explore OpenCTI and OpenAEV in action. In the near future, users can also access dedicated trial for Enterprise Edition."
  },
  {
    title: "Your trusted Go-To for resources",
    description:
      "Partners can access essential documentation in the partner vault, while the community members can find resources to customize their platforms and official training materials."
  },
  {
    title: "Key insights into platform user behavior",
    description:
      "Dive into the dynamics of your OpenCTI or OpenAEV platforms, uncovering key user behaviors to enhance performance and drive better results."
  }
];

const experienceLibraries: ExperienceLibrary[] = [
  {
    title: "OpenAEV Scenarios Library",
    description: "Simulate threats with pre-configured scenarios to test your defenses against various tactics, techniques and procedures.",
    logo: openaevLogo,
    image: openaevScenariosImg,
    imageAlt: "Screens and dashboards from the OpenAEV Scenarios Library"
  },
  {
    title: "OpenCTI Integration Feeds Library",
    description: (
      <p>
        Access a curated collection of CTI feeds on XTM Hub and integrate them into OpenCTI in seconds thanks to the new import/export feature.
        Share them easily with your team and the community.
      </p>
    ),
    badge: "One-click deployment is now available!",
    logo: openctiLogo,
    image: openctiIntegrationFeedsImg,
    imageAlt: "OpenCTI Integration Feeds Library interface",
    reverse: true
  },
  {
    title: "OpenCTI Custom Dashboard Library",
    description: (
      <p>
        Access a growing <strong>library of pre-built dashboards</strong> tailored to specific use cases. These dashboards help you make the most of
        OpenCTI’s structured data, reducing setup time and enhancing your threat intelligence workflows.
      </p>
    ),
    badge: "One-click deployment is now available!",
    logo: openctiLogo,
    image: openctiDashboardImg,
    imageAlt: "OpenCTI dashboard templates showcased inside XTM Hub"
  },
  {
    title: "Direct access to Filigran Academy",
    description:
      "Gain direct access to training materials to enhance your skills with our solutions. Whether you are a beginner or an advanced user, Filigran Academy provides valuable insights to maximize your impact.",
    logo: filigranLogo,
    image: filigranAcademyGif,
    imageAlt: "Filigran Academy portal walkthrough",
    reverse: true
  },
];

const comingSoonItems: TextBlock[] = [
  {
    title: "Instant free trial",
    description:
      "Launch a dedicated trial of OpenCTI and OpenAEV Enterprise Edition to explore its full capabilities in a hands-on environment."
  },
  {
    title: "Add JSON feeds to our Integration Feeds Library",
    description:
      "Access ready-to-use templates to map and import data into OpenCTI, saving time and effort."
  },
  {
    title: "Deploy compatible connectors",
    description:
      "Plug. Configure. Deploy. — Connectors Made Simple for managing integrations effortlessly."
  },
  {
    title: "NewsFeeds",
    description:
      "Stay updated with tailored newsfeeds on OpenCTI and OpenAEV to discover new features, resources, and Filigran Community events."
  }
];

const communityLinks = [
  {
    title: "OpenCTI Roadmap",
    description: "Find the detailed and regularly updated OpenCTI feature roadmap on GitHub.",
    href: "https://github.com/OpenCTI-Platform/opencti/milestones",
    cta: "Learn more",
    icon: githubIcon,
  },
  {
    title: "OpenAEV Roadmap",
    description: "Find the detailed and regularly updated OpenAEV feature roadmap on GitHub.",
    href: "https://github.com/OpenBAS-Platform/openbas/milestones",
    cta: "Learn more",
    icon: githubIcon,
  },
  {
    title: "Filigran Community",
    description: "Stay informed about platform developments and engage in broader discussions.",
    href: "https://community.filigran.io",
    cta: "Join us",
    icon: slackIcon,
  },
];

const XTMHubPage = () => (
  <div className="min-h-screen bg-background">
    <Navigation />

    <main className="pt-24 lg:pt-32 space-y-24 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#01091f",
            backgroundImage:
              "radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-12 h-[420px] w-[420px] rounded-full bg-cyan/20 blur-[160px]" />
          <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[200px]" />
          <div className="absolute top-1/2 left-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-[220px] animate-glow" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-3 text-white/80">
              <img src={xtmHubLogoWhite} alt="XTM Hub logo" className="h-20 w-auto" loading="lazy" />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">Explore, learn and grow</h1>
              <p className="text-lg lg:text-xl text-white/80">
                The focal point to consume every Services and Products, a unified Filigran Experience.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="text-base px-8 shadow-glow hover:shadow-[0_0_35px_rgba(22,235,249,0.35)]"
              >
                <a href="https://hub.filigran.io/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  Go to XTM Hub
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="cta" className="text-base px-8">
                <Link to={LIVE_DEMO_PATH} className="inline-flex items-center">
                  Create an account
                </Link>
              </Button>
            </div>
            <div className="pt-10">
              <div className="relative">
                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-b from-cyan/10 via-transparent to-transparent blur-3xl" />
                <div className="relative rounded-[36px] border border-white/10 overflow-hidden shadow-[0_25px_90px_rgba(15,23,42,0.45)] bg-card/60 backdrop-blur-xl">
                  <img
                    src={xtmHubHero}
                    alt="XTM Hub unified Filigran experience"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover resources */}
      <section className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-6">
          <h2 className="text-3xl lg:text-5xl font-bold">Discover resources and expertise</h2>
          <p className="text-lg lg:text-xl text-foreground/70">
            XTM Hub is a central forum to access resources, share tradecraft, and optimize the use of Filigran’s products, fostering collaboration and empowering the community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {discoverHighlights.map((item) => (
            <Card key={item.title} className="p-8 card-glass hover-lift h-full flex flex-col gap-4 text-left">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Unified experience */}
      <section className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <h2 className="text-3xl lg:text-5xl font-bold">An unified, empowering Filigran experience</h2>
          <p className="text-lg text-foreground/70">
            Access libraries, feeds, dashboards, and training without leaving XTM Hub. Everything you need to operationalize OpenCTI and OpenAEV lives in one place.
          </p>
        </div>

        <div className="space-y-16">
          {experienceLibraries.map((library) => {
            const descriptionContent =
              typeof library.description === "string" ? <p>{library.description}</p> : library.description;

            return (
              <div
                key={library.title}
                className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <div className={library.reverse ? "lg:order-2" : ""}>
                  <div className="relative rounded-[36px]">
                    <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-cyan/10 via-transparent to-blue-500/20 opacity-60 blur-3xl" />
                    <Card className="relative p-6 md:p-8 lg:p-10 space-y-5 bg-[#050b17]/80 border border-white/10 backdrop-blur-xl shadow-[0_25px_80px_rgba(5,9,20,0.55)]">
                      <div className="inline-flex items-center gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-cyan/10 flex items-center justify-center">
                          <img src={library.logo} alt="" className="h-8 w-auto" loading="lazy" />
                        </div>
                        <span className="text-xs uppercase tracking-[0.35em] text-foreground/60">Library</span>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold">{library.title}</h3>

                      {library.badge && (
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="inline-flex px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] rounded-full text-white bg-gradient-to-r from-[#001BDA] to-cyan">
                            NEW
                          </span>
                          <span className="text-base font-semibold text-foreground">{library.badge}</span>
                        </div>
                      )}

                      <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
                        {descriptionContent}
                      </div>

                      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </Card>
                  </div>
                </div>

                <div className={library.reverse ? "lg:order-1" : ""}>
                  <div className="relative group">
                    <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-cyan/15 via-transparent to-blue-500/20 blur-3xl" />
                    <div className="relative rounded-[28px] border border-white/10 overflow-hidden bg-card/80 backdrop-blur-xl shadow-[0_25px_80px_rgba(15,23,42,0.35)]">
                      <div className="absolute inset-4 rounded-[22px] border border-dashed border-white/15 pointer-events-none" />
                      <img
                        src={library.image}
                        alt={library.imageAlt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Coming soon */}
      <section className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl text-center mx-auto mb-12 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold">Coming soon…</h2>
          <p className="text-lg text-foreground/70">
            XTM Hub is evolving and many exciting services will be released in the near future.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {comingSoonItems.map((item, index) => (
            <div key={item.title} className={index === 0 ? "lg:col-span-3" : ""}>
              <Card className="p-6 card-glass hover-lift h-full flex flex-col gap-3 text-left">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Keep up */}
      <section className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold">Keep up with Filigran</h2>
          <p className="text-lg text-foreground/70">
            Follow the latest developments for each solution on our Slack community and GitHub.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
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
                  <h3 className="text-xl font-semibold group-hover:text-cyan transition-colors">{link.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{link.description}</p>
                </div>
                <div className="flex items-center gap-2 text-cyan text-sm font-semibold">
                  {link.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            </a>
          ))}
        </div>
      </section>

      <GetStartedSection />
    </main>

    <Footer />
  </div>
);

export default XTMHubPage;

