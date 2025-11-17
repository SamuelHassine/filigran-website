import { FormEvent, useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  eventsCatalog,
  eventsFilters,
  type EventItem,
  type EventsFilter,
} from "@/data/events";
import slackLogo from "@/assets/community/slack-logo.svg";

const collageImages = [
  "/images/events/events-slack-5.jpg",
  "/images/events/events-slack-6.jpg",
  "/images/events/events-slack-15.jpg",
  "/images/events/events-slack-14.jpg",
  "/images/events/events-slack-12.jpg",
  "/images/events/events-slack-11.jpg",
  "/images/events/events-slack-10.jpg",
  "/images/events/events-slack-9.jpg",
  "/images/events/events-slack-8.jpg",
];

const heroStats = [
  { label: "Live & on-demand programs", value: "17" },
  { label: "Cities on the tour", value: "6" },
  { label: "Slack community members", value: "5,700+" },
];

const EventsWebinarsPage = () => {
  const [activeFilter, setActiveFilter] = useState<EventsFilter>("View all");

  const featuredEvent = eventsCatalog.find((event) => event.featured) ?? eventsCatalog[0];

  const filteredEvents = useMemo(() => {
    if (activeFilter === "View all") {
      return eventsCatalog;
    }

    if (activeFilter === "On demand") {
      return eventsCatalog.filter((event) => event.onDemand);
    }

    return eventsCatalog.filter((event) => event.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-28 pb-24">
        <section className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan mb-4">Resources</p>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                Events &amp; Webinars
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl">
                See what events Filigran is participating in or hosting near you, and access our past
                webinars on demand.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-border/40 bg-card/70 p-5 text-center"
                  >
                    <p className="text-3xl font-semibold">{stat.value}</p>
                    <p className="text-xs uppercase tracking-[0.35em] text-foreground/60 mt-2">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild className="bg-cyan text-background hover:bg-cyan-glow">
                  <a href="#catalog">Browse the catalog</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-cyan/60 text-cyan hover:bg-cyan/10 hover:text-cyan-glow"
                >
                  <a href="#stay-connected">Stay connected</a>
                </Button>
              </div>
            </div>

            <FeaturedEventCard event={featuredEvent} />
          </div>
        </section>

        <section id="catalog" className="container mx-auto px-4 lg:px-8 mt-20">
          <div className="rounded-3xl border border-border/60 bg-card/70 p-6 lg:p-8 backdrop-blur-md">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-foreground/60">
                  Browse by format
                </p>
                <h2 className="text-3xl font-semibold mt-1">All programs</h2>
              </div>
              <p className="text-sm text-foreground/70">
                {filteredEvents.length} event{filteredEvents.length === 1 ? "" : "s"} available
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {eventsFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => {
                    setActiveFilter(filter);
                  }}
                  className={cn(
                    "rounded-full border px-5 py-2 text-sm font-medium transition-all",
                    activeFilter === filter
                      ? "bg-cyan text-background border-cyan shadow-cyan/30 shadow-lg"
                      : "bg-background/50 border-border/60 text-foreground/70 hover:text-foreground hover:border-cyan/60",
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredEvents.map((event) => (
                <EventCard key={event.title} event={event} />
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="mt-12 rounded-2xl border border-dashed border-border/60 p-10 text-center">
                <p className="text-lg font-semibold">No events in this category (yet)</p>
                <p className="text-sm text-foreground/70 mt-2">
                  Check back soon or explore another filter to find the right format for your team.
                </p>
              </div>
            )}
          </div>
        </section>

        <section id="stay-connected" className="container mx-auto px-4 lg:px-8 mt-24">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/80 p-8 lg:p-12">
            <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <img src={slackLogo} alt="Slack logo" className="h-12 w-12 rounded-xl bg-background/70 p-2" />
                  <span className="text-sm font-semibold tracking-[0.45em] uppercase text-foreground/60">
                    5,700+ Members
                  </span>
                </div>
                <h3 className="text-3xl font-semibold mb-4">Stay Connected with Filigran</h3>
                <p className="text-foreground/70 text-lg mb-8">
                  Did you know? Beyond attending our live webinars or meeting our team in person, you can
                  always connect with us on Slack. Join the vibrant Filigran community today!
                </p>
                <Button
                  asChild
                  className="bg-cyan text-background hover:bg-cyan-glow"
                >
                  <a href="https://community.filigran.io/" target="_blank" rel="noreferrer">
                    Join Slack
                  </a>
                </Button>
              </div>

              <div className="rounded-3xl border border-border/40 bg-background/40 p-4">
                <div className="grid grid-cols-3 gap-4">
                  {collageImages.map((image) => (
                    <div key={image} className="overflow-hidden rounded-2xl">
                      <img
                        src={image}
                        alt="Community highlight"
                        className="h-24 w-full object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-cyan/15 via-transparent to-purple-500/10" />
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-8 mt-24">
          <NewsletterSignup />
        </section>

        <section className="container mx-auto px-4 lg:px-8 mt-16">
          <ContentLibraryCTA />
        </section>
      </main>

      <Footer />
    </div>
  );
};

const FeaturedEventCard = ({ event }: { event: EventItem }) => (
  <Card className="relative overflow-hidden border border-border/60 bg-card/90">
    {event.image && (
      <img
        src={event.image}
        alt={event.title}
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        loading="lazy"
      />
    )}
    <div className="relative z-10 p-8">
      <Badge variant="secondary" className="border border-border/60 bg-background/70 text-foreground/80">
        Featured {event.category}
      </Badge>
      <h2 className="mt-4 text-3xl font-semibold leading-snug">{event.title}</h2>
      <p className="mt-3 text-sm uppercase tracking-[0.35em] text-foreground/60">{event.location}</p>
      {event.statusLabel && (
        <p className="mt-2 text-sm font-semibold text-cyan">{event.statusLabel}</p>
      )}
      <Button
        asChild
        className="mt-8 bg-cyan text-background hover:bg-cyan-glow"
      >
        <a href={event.ctaLink} target="_blank" rel="noreferrer">
          {event.ctaLabel}
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
  </Card>
);

const EventCard = ({ event }: { event: EventItem }) => (
  <Card className="flex h-full flex-col overflow-hidden border border-border/60 bg-card/80">
    {event.image ? (
      <div className="relative">
        <div className="aspect-[16/9] w-full overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
        </div>
        <Badge className="absolute left-4 top-4 bg-background/80 text-foreground/80 border border-border/60">
          {event.category}
        </Badge>
      </div>
    ) : (
      <div className="px-6 pt-6">
        <Badge className="bg-background/80 text-foreground/80 border border-border/60">
          {event.category}
        </Badge>
      </div>
    )}

    <div className="flex flex-1 flex-col gap-4 p-6">
      <div>
        <h3 className="text-2xl font-semibold leading-snug">{event.title}</h3>
        <p className="mt-3 text-sm uppercase tracking-[0.35em] text-foreground/60">{event.location}</p>
        <p className="text-base text-foreground/70">{event.date}</p>
      </div>
      {event.statusLabel && (
        <p className="text-sm font-semibold text-cyan">{event.statusLabel}</p>
      )}
      <Button
        asChild
        variant="secondary"
        className="mt-auto w-fit border border-cyan/40 bg-transparent text-cyan hover:bg-cyan/10"
      >
        <a href={event.ctaLink} target="_blank" rel="noreferrer">
          {event.ctaLabel}
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
  </Card>
);

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitted");
  };

  return (
    <div className="rounded-3xl border border-border/60 bg-card/70 p-10 text-center">
      <h3 className="text-3xl md:text-4xl font-semibold">
        Stay up to date with everything at Filigran
      </h3>
      <p className="text-lg text-foreground/70 max-w-3xl mx-auto mt-4">
        "Sign up for our newsletter and get bi-monthly updates of Filigran major events: product
        updates, upcoming events, latest content and more."
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-center">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder="Email *"
          className="w-full rounded-2xl border border-border/60 bg-background/60 px-5 py-3 text-base text-foreground outline-none placeholder:text-foreground/40 focus:border-cyan md:max-w-md"
        />
        <Button
          type="submit"
          className="bg-cyan text-background hover:bg-cyan-glow"
        >
          Subscribe
        </Button>
      </form>

      <p className="mt-4 text-sm text-foreground/60">
        By submitting this form you agree to our{" "}
        <a href="/privacy-policy" className="text-cyan hover:text-cyan-glow underline">
          Privacy Policy
        </a>.
      </p>

      {status === "submitted" && (
        <p className="mt-4 text-sm font-semibold text-cyan">
          Thanks! We&apos;ll keep you posted with future releases.
        </p>
      )}
    </div>
  );
};

const ContentLibraryCTA = () => (
  <div className="rounded-3xl border border-border/60 bg-card/80 p-10">
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-cyan mb-3">Content Library</p>
        <h3 className="text-3xl font-semibold mb-4">
          Need more depth? Explore every competitive brief, report &amp; white paper.
        </h3>
        <p className="text-foreground/70 text-lg">
          Follow the primary link into our content library to access competitive briefs, on-demand
          webinars, reports, and white papers—all indexed for fast discovery.
        </p>
        <ul className="mt-6 space-y-2 text-sm text-foreground/80">
          <li>• Competitive briefs</li>
          <li>• On-demand webinars</li>
          <li>• Reports &amp; ROI studies</li>
          <li>• White papers</li>
        </ul>
        <Button
          asChild
          className="mt-8 bg-cyan text-background hover:bg-cyan-glow"
        >
          <Link to="/content-library">
            Browse the content library
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="rounded-3xl border border-border/40 bg-background/40 p-6 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-foreground/60">Formats covered</p>
        <p className="mt-3 text-4xl font-semibold text-cyan">5</p>
        <p className="text-foreground/70 mt-2">Every resource is organized for first-click access.</p>
      </div>
    </div>
  </div>
);

export default EventsWebinarsPage;

