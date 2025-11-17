import type { LucideIcon } from "lucide-react";
import {
  Award,
  Bot,
  Cloud,
  HeadsetIcon,
  GraduationCap,
  Building,
  Users,
  Briefcase,
  TrendingUp,
  FileText,
  Palette,
  BookOpen,
  MessageSquare,
  Handshake,
  Building2,
  Network,
  Layers3,
  Video,
  Library,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import openctiLogo from "@/assets/opencti-logo.svg";
import openaevLogo from "@/assets/openaev-logo.svg";
import openGrcLogo from "@/assets/opengrc-logo.svg";
import xtmOneLogo from "@/assets/xtm-one-logo.png";
import { useCases as useCaseContent } from "@/data/useCases";

export const productOfferings = [
  {
    name: "OpenCTI Enterprise Edition",
    description: "Advanced governance controls, RBAC and automation for CTI teams.",
    icon: Award,
    link: "/offerings/opencti-enterprise-edition",
  },
  {
    name: "OpenAEV Enterprise Edition",
    description: "Enterprise-grade AEV workflows with AI and orchestration.",
    icon: Award,
    link: "/offerings/openaev-enterprise-edition",
  },
  {
    name: "OpenGRC Enterprise Edition",
    description: "Risk quantification, board reporting and collaborative compliance.",
    icon: Award,
    link: "/offerings/opengrc-enterprise-edition",
  },
  {
    name: "Agentic AI Platform",
    description: "Deploy customizable agent workflows inside XTM One.",
    icon: Bot,
    link: "/offerings/dedicated-agentic-platform",
  },
];

export const serviceOfferings = [
  {
    name: "Software as a Service",
    description: "Private cloud instances of every platform, operated by Filigran.",
    icon: Cloud,
    link: "/offerings/software-as-a-service",
  },
  {
    name: "Support and Services",
    description: "Enterprise support plans, advisory and integration workshops.",
    icon: HeadsetIcon,
    link: "/offerings/professional-support-packages",
  },
  {
    name: "Filigran Academy",
    description: "Instructor-led programs and on-demand training paths.",
    icon: GraduationCap,
    link: "/offerings/filigran-academy",
  },
];

export const companyLinks = [
  {
    name: "Our Story",
    description: "See how we built the leading XTM community.",
    icon: Building,
    link: "/company/our-story",
  },
  {
    name: "Leadership",
    description: "Get to know the Filigran executive team.",
    icon: Users,
    link: "/company/leadership",
  },
  {
    name: "Careers",
    description: "We are hiring across product, go-to-market and G&A.",
    icon: Briefcase,
    link: "https://www.welcometothejungle.com/en/companies/filigran/jobs",
    external: true,
  },
  {
    name: "Our Investors",
    description: "Accel, Insight Partners, Eurazeo Growth and more.",
    icon: TrendingUp,
    link: "/company/investors",
  },
  {
    name: "Newsroom",
    description: "Press releases, media kit and story ideas.",
    icon: FileText,
    link: "/company/newsroom",
  },
  {
    name: "Our Brand",
    description: "Download logo files, colors and typography.",
    icon: Palette,
    link: "https://zeroheight.com/020822383/p/08b3df-filigran-identity",
    external: true,
  },
];

export const customerUseCaseLinks = useCaseContent.map((useCase) => ({
  title: useCase.title,
  link: `/use-cases/${useCase.slug}`,
}));

export const customerExperienceItems = [
  {
    title: "Success stories",
    description: "See how teams operationalize XTM outcomes.",
    icon: BookOpen,
    link: "/customers",
  },
  {
    title: "Testimonials",
    description: "G2 and PeerInsight reviews from practitioners.",
    icon: MessageSquare,
    external: true,
    link: "https://www.g2.com/products/opencti/reviews",
  },
];

export const ecosystemCommunityHighlight = {
  eyebrow: "Community",
  title: "Community",
  description:
    "A single community hub for Slack discussions, live programming and curated guidance across every XTM platform.",
  link: "/community",
  ctaLabel: "Explore community",
};

interface EcosystemPartnerCategory {
  name: string;
  description: string;
  icon: LucideIcon;
  search: string;
  path?: string;
}

export const ecosystemPartnershipCategories: EcosystemPartnerCategory[] = [
  {
    name: "MSSP Partners",
    description: "Managed services teams that deliver XTM value at scale.",
    icon: Handshake,
    search: "mssp",
    path: "/partners/mssp-partners",
  },
  {
    name: "Technology Alliances",
    description: "Technology and data partners who extend the ecosystem.",
    icon: Network,
    search: "technology",
    path: "/partners/technology-alliances",
  },
  {
    name: "Solutions Providers",
    description: "Consultancies and resellers who operationalize XTM.",
    icon: Building2,
    search: "solutions",
    path: "/partners/solutions-providers",
  },
];

export const ecosystemProgramLinks = [
  {
    label: "Join our Slack channels",
    href: "https://community.filigran.io/",
  },
  {
    label: "Marketplaces",
    to: "/partners/marketplaces",
  },
  {
    label: "Certifications",
    to: "/ecosystem/certifications",
  },
];

export const resourcesProductsColumn = [
  {
    name: "XTM Hub",
    description: "Community HQ with playbooks, connectors and scenarios.",
    href: "https://hub.filigran.io/",
    icon: Layers3,
  },
  {
    name: "Filigran Academy",
    description: "Curated learning paths for analysts and admins.",
    href: "https://academy.filigran.io/",
    icon: GraduationCap,
  },
  {
    name: "GitHub",
    description: "Source code, roadmaps and release notes.",
    icon: GithubIcon,
    href: "https://github.com/FiligranHQ",
  },
  {
    name: "OpenCTI Integrations",
    description: "Browse 300+ connectors in minutes.",
    icon: Library,
    href: "https://filigran.notion.site/OpenCTI-Ecosystem-868329e9fb734fca89692b2ed6087e76",
  },
  {
    name: "OpenAEV Integrations",
    description: "Validated simulations ready for deployment.",
    icon: Library,
    href: "https://filigran.notion.site/OpenBAS-Ecosystem-30d8eb73d7d04611843e758ddef8941b",
  },
];

export const resourcesDiscoverColumn = [
  {
    name: "What is XTM Hub?",
    description: "See how the hub unifies resources for customers.",
    link: "/platforms/xtm-hub",
    icon: BookOpen,
  },
  {
    name: "Filigran Blog",
    description: "Briefings, customer stories and product launches.",
    icon: FileText,
    link: "/blog",
  },
  {
    name: "Events & Webinars",
    description: "Live and on-demand programming for CTI teams.",
    icon: Video,
    link: "/events-webinars",
  },
  {
    name: "Content Library",
    description: "Whitepapers, buyer guides and ROI stories.",
    icon: Library,
    link: "/content-library",
  },
];

export const corePlatforms = [
  {
    name: "OpenCTI",
    logo: openctiLogo,
    description: "Threat intelligence platform",
    link: "/platforms/opencti",
  },
  {
    name: "OpenAEV",
    logo: openaevLogo,
    description: "Adversarial exposure validation",
    link: "/platforms/openaev",
  },
  {
    name: "OpenGRC",
    logo: openGrcLogo,
    description: "Cyber risk governance",
    link: "/platforms/opengrc",
  },
];

export const xtmSuiteHighlight = {
  eyebrow: "XTM Suite",
  title: "Connect intelligence, validation & risk",
  description: "Blend OpenCTI, OpenAEV and OpenGRC workflows with shared context, governance and agentic automation.",
  link: "/platforms/xtm-suite",
  ctaLabel: "Explore the suite",
};

export const xtmOneCard = {
  name: "XTM One",
  logo: xtmOneLogo,
  description:
    "Our AI-native cockpit irrigates OpenCTI, OpenAEV and OpenGRC with context, automation and executive-ready insights.",
  link: "/platforms/xtm-one",
  ctaLabel: "Discover agentic threat management",
};

