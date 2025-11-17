export type EventCategory = "Community Event" | "Conference" | "Tradeshow" | "Webinar";

export interface EventItem {
  title: string;
  category: EventCategory;
  location: string;
  date: string;
  ctaLabel: string;
  ctaLink: string;
  image?: string;
  statusLabel?: string;
  onDemand?: boolean;
  featured?: boolean;
}

export const eventsCatalog: EventItem[] = [
  {
    title: "How Rivian Achieved 88% Faster Threat Detection While Reducing Operational Costs",
    category: "Webinar",
    location: "Online",
    date: "Now on-demand",
    ctaLabel: "Watch now",
    ctaLink: "https://filigran.io/resources/opencti-at-rivian-88-faster-detection/",
    image: "/images/events/events-hero-rivian.webp",
    statusLabel: "Now on-demand",
    onDemand: true,
    featured: true,
  },
  {
    title: "European Cyber Week",
    category: "Tradeshow",
    location: "Rennes, FR",
    date: "November 17th – November 20th",
    ctaLabel: "Register",
    ctaLink: "https://www.european-cyber-week.eu/",
    image: "/images/events/events-european-cyber-week.webp",
  },
  {
    title: "Operationalizing IR: Compliance-Ready Tabletop Exercises with an AEV Platform",
    category: "Webinar",
    location: "Europe",
    date: "November 20th",
    ctaLabel: "Register Today",
    ctaLink: "https://filigran.registration.goldcast.io/webinar/2ef5d8e7-d215-49e4-95fb-412f11ddd299",
    image: "/images/events/events-aev-emea.webp",
  },
  {
    title: "Operationalizing IR: Compliance-Ready Tabletop Exercises with an AEV Platform (NA)",
    category: "Webinar",
    location: "North America",
    date: "November 20th",
    ctaLabel: "Register Today",
    ctaLink: "https://filigran.registration.goldcast.io/webinar/b9623da3-3f7f-401e-8ba1-29c9935405f8",
    image: "/images/events/events-aev-na.webp",
  },
  {
    title: "Black Hat MEA",
    category: "Tradeshow",
    location: "Riyadh, SA",
    date: "December 2nd – December 4th",
    ctaLabel: "Register",
    ctaLink: "https://blackhatmea.com/tickets/attendees",
    image: "/images/events/events-black-hat.webp",
  },
  {
    title: "Shifting to Threat-Informed Defense: Strategies for the Technology Sector",
    category: "Webinar",
    location: "Online",
    date: "Watch on-demand",
    ctaLabel: "Watch now",
    ctaLink: "https://filigran.registration.goldcast.io/webinar/5857ee62-d4d2-456d-8024-4b529ee5b10f",
    image: "/images/events/events-threat-informed-defense.webp",
    onDemand: true,
    statusLabel: "On-demand webinar",
  },
  {
    title: "Meetup in London",
    category: "Community Event",
    location: "London",
    date: "Catch up",
    ctaLabel: "Catch up",
    ctaLink: "/opencti-community-meetup-in-london-0206/",
    onDemand: true,
  },
  {
    title: "OpenBAS: what’s new?",
    category: "Community Event",
    location: "Online",
    date: "Watch the replay",
    ctaLabel: "Watch the replay",
    ctaLink: "https://youtu.be/ZxPFvDH9CGg",
    onDemand: true,
  },
  {
    title: "Meetup in Paris",
    category: "Community Event",
    location: "Paris, FR",
    date: "Catch up",
    ctaLabel: "Catch up",
    ctaLink: "/opencti-community-meetup-in-paris-march-2025/",
    onDemand: true,
  },
  {
    title: "Webinar Series: OpenCTI Unleashed",
    category: "Webinar",
    location: "Online",
    date: "Watch the replay",
    ctaLabel: "Watch the replay",
    ctaLink: "/octi-ee-webinar-series/",
    onDemand: true,
  },
  {
    title: "OpenCTI Integrations",
    category: "Community Event",
    location: "Online",
    date: "Watch the replay",
    ctaLabel: "Watch the replay",
    ctaLink: "https://youtu.be/U_dlexb7qr4",
    onDemand: true,
  },
  {
    title: "Meetup in Lyon",
    category: "Community Event",
    location: "Lyon, FR",
    date: "Catch up",
    ctaLabel: "Catch up",
    ctaLink: "/opencti-community-meetup-lyon-dec2024/",
    onDemand: true,
  },
  {
    title: "Navigating OpenBAS",
    category: "Community Event",
    location: "Online",
    date: "Watch the replay",
    ctaLabel: "Watch the replay",
    ctaLink: "https://www.youtube.com/watch?v=c5_yG2Chlpk&t=750s",
    onDemand: true,
  },
  {
    title: "Features and Corporate Updates",
    category: "Community Event",
    location: "Online",
    date: "Watch the replay",
    ctaLabel: "Watch the replay",
    ctaLink: "https://www.youtube.com/watch?v=JbtVsFw-2dg&t=1265s",
    onDemand: true,
  },
  {
    title: "Advanced Threat Analysis with OpenCTI",
    category: "Webinar",
    location: "Online",
    date: "Watch the replay",
    ctaLabel: "Watch the replay",
    ctaLink: "https://www.youtube.com/watch?v=z5MKZhQzLMI&t=91s",
    onDemand: true,
  },
  {
    title: "Incident Response & Investigations with OpenCTI",
    category: "Webinar",
    location: "Online",
    date: "Watch the replay",
    ctaLabel: "Watch the replay",
    ctaLink: "https://www.youtube.com/watch?v=46jvcs0ARDI&t=6s",
    onDemand: true,
  },
  {
    title: "AI in OpenCTI",
    category: "Community Event",
    location: "Online",
    date: "Watch the replay",
    ctaLabel: "Watch the replay",
    ctaLink: "https://youtu.be/BOgFKNOKGm8?si=xY51aQB1vdeB5z3S",
    onDemand: true,
  },
];

export const eventsFilters = ["View all", "Community Event", "Conference", "Tradeshow", "Webinar", "On demand"] as const;
export type EventsFilter = (typeof eventsFilters)[number];

