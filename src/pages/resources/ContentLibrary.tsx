import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  contentLibraryCategories,
  contentLibraryResources,
  type ContentLibraryCategory,
} from "@/data/contentLibrary";
import { cn } from "@/lib/utils";
import { LIVE_DEMO_PATH } from "@/lib/routes";

import slackLogo from "@/assets/community/slack-logo.svg";
import slack7 from "@/assets/community/slack-7.jpg";
import slack8 from "@/assets/community/slack-8.jpg";
import slack9 from "@/assets/community/slack-9.jpg";
import slack10 from "@/assets/community/slack-10.jpg";
import slack11 from "@/assets/community/slack-11.jpg";
import slack12 from "@/assets/community/slack-12.jpg";
import slack14 from "@/assets/community/slack-14.jpg";
import slack15 from "@/assets/community/slack-15.jpg";

type CategoryFilter = ContentLibraryCategory | "all";

const collageImages = [slack7, slack8, slack9, slack10, slack11, slack12, slack14, slack15];

const ContentLibraryPage = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const filteredResources = useMemo(() => {
    if (activeCategory === "all") {
      return contentLibraryResources;
    }
    return contentLibraryResources.filter((resource) => resource.category === activeCategory);
  }, [activeCategory]);

  const categoryTotals = useMemo(() => {
    const totals: Record<ContentLibraryCategory, number> = {
      "Competitive Brief": 0,
      "On-demand Webinar": 0,
      Report: 0,
      "Tutorial Video": 0,
      "White Paper": 0,
    };
    for (const resource of contentLibraryResources) {
      totals[resource.category] += 1;
    }
    return totals;
  }, []);

  const stats = [
    { label: "White papers", value: categoryTotals["White Paper"] },
    { label: "Reports", value: categoryTotals.Report },
    { label: "On-demand webinars", value: categoryTotals["On-demand Webinar"] },
    { label: "Tutorial videos", value: categoryTotals["Tutorial Video"] },
    { label: "Competitive briefs", value: categoryTotals["Competitive Brief"] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-28 pb-24">
        <section className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan mb-4">Resources</p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">Content Library</h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-10">
              Access every Filigran resource in one place—competitive briefs, reports, on-demand
              webinars, and tutorial videos that accelerate how your team delivers threat-informed
              outcomes.
            </p>
          </div>

          <div className="flex flex-col gap-6 rounded-3xl border border-border/60 bg-card/60 p-6 lg:p-8 backdrop-blur-md">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-foreground/60">Browse by format</p>
                <h2 className="text-2xl font-semibold mt-1">Filters</h2>
              </div>
              <p className="text-sm text-foreground/70">
                {filteredResources.length} resource{filteredResources.length === 1 ? "" : "s"} available
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {contentLibraryCategories.map((category) => (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => { setActiveCategory(category.value as CategoryFilter); }}
                  className={cn(
                    "rounded-full border px-5 py-2 text-sm font-medium transition-all",
                    activeCategory === category.value
                      ? "bg-cyan text-background border-cyan shadow-cyan/30 shadow-lg"
                      : "bg-background/40 border-border/60 text-foreground/70 hover:text-foreground hover:border-cyan/60",
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-5">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border/60 bg-background/40 p-4">
                  <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
                  <p className="text-xs uppercase tracking-widest text-foreground/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="resources-grid" className="container mx-auto px-4 lg:px-8 mt-16">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-8 mt-24">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/70 p-8 lg:p-12">
            <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <img src={slackLogo} alt="Slack logo" className="h-12 w-12" loading="lazy" />
                  <span className="text-sm font-semibold tracking-[0.45em] uppercase text-foreground/60">
                    5,700+ members
                  </span>
                </div>
                <h3 className="text-3xl font-semibold mb-4">Join the Filigran Threat Intelligence Community</h3>
                <p className="text-foreground/70 text-lg mb-8">
                  Connect with practitioners, share your experiences, and get support from peers who are
                  building threat-informed programs with OpenCTI, OpenAEV, and OpenGRC.
                </p>
                <Button
                  asChild
                  className="bg-cyan text-background hover:bg-cyan-glow"
                >
                  <a href="https://community.filigran.io" target="_blank" rel="noopener noreferrer">
                    Join Slack
                  </a>
                </Button>
              </div>

              <div className="rounded-3xl border border-border/40 bg-background/30 p-4">
                <div className="grid grid-cols-2 gap-4">
                  {collageImages.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-2xl">
                      <img
                        src={image}
                        alt="Community highlight"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-transparent to-purple-500/10" />
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-8 mt-24">
          <div className="rounded-3xl border border-border/60 bg-card/70 p-10 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan mb-3">Get started today</p>
            <h3 className="text-3xl md:text-4xl font-semibold mb-4">See Filigran in action</h3>
            <p className="text-foreground/70 text-lg max-w-3xl mx-auto mb-8">
              Try our live sandbox or book a dedicated session with the product team to explore how XTM
              platforms can accelerate your security operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="secondary"
                className="bg-background text-foreground border border-border/60 hover:border-cyan/60"
              >
                <Link to={LIVE_DEMO_PATH}>
                  Live demo
                </Link>
              </Button>
              <Button asChild className="bg-cyan text-background hover:bg-cyan-glow">
                <a href="/book-demo">Book a demo</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const ResourceCard = ({ resource }: { resource: (typeof contentLibraryResources)[number] }) => (
  <a
    href={resource.externalUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card/70 backdrop-blur-sm transition-shadow hover:shadow-2xl hover:shadow-cyan/10"
  >
    <div className="relative overflow-hidden">
      <div className="aspect-[16/9] w-full">
        <img
          src={resource.image}
          alt={resource.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <Badge
        variant="secondary"
        className="absolute left-4 top-4 border border-border/60 bg-background/90 text-foreground/80 backdrop-blur"
      >
        {resource.category}
      </Badge>
    </div>
    <div className="flex flex-1 flex-col gap-4 p-6">
      <div>
        <h3 className="text-2xl font-semibold leading-snug">{resource.title}</h3>
        <p className="mt-3 text-foreground/70 leading-relaxed">{resource.description}</p>
      </div>
      <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-cyan group-hover:text-cyan-glow">
        {resource.cta}
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </div>
  </a>
);

export default ContentLibraryPage;

