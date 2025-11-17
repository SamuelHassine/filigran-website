import {
  Bot,
  Briefcase,
  GitBranch,
  Layers,
  LayoutDashboard,
  ShieldCheck,
  Workflow,
  BookOpen,
} from "lucide-react";
import { SlackIcon } from "@/components/icons/BrandIcons";

export const capabilityHighlights = [
  {
    icon: LayoutDashboard,
    title: "GUI built for Threat Intelligence Practitioners",
    description:
      "Modern, intuitive dashboards with a STIX-structured hypergraph help analysts pivot across actors, malware, TTPs and indicators using visual graphs, timelines and ATT&CK mappings.",
  },
  {
    icon: Layers,
    title: "Adapt the Platform to your Requirement",
    description:
      "Customize dashboards for use cases such as threat monitoring, hunting, incident response or disinformation campaigns and reuse Filigran + community dashboards.",
  },
  {
    icon: Bot,
    title: "Work Faster and Analyze Better with AI",
    description:
      "Agentic AI copilots help import feeds, investigate and brief leadership with the right tone, making AI a companion at every step of the threat management cycle.",
  },
  {
    icon: Workflow,
    title: "Automate Scenarios and Playbooks",
    description:
      "Integrate technical and non-technical information into a unified system, linking intel to its original source so you can take action through automation.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access Control (RBAC)",
    description:
      "Segregate access and centralize entitlements with authorized member / organization mechanisms—ideal for large enterprises and managed service providers.",
  },
  {
    icon: Briefcase,
    title: "Centralized Case Management",
    description:
      "Enhance threat detection and response by centralizing incident-related data, fostering real-time collaboration and improving efficiency through automated workflows.",
  },
];

export const deploymentOptions = [
  {
    title: "Open Source",
    description:
      "Deploy OpenCTI Community Edition on-premise using the open source releases and extend it with the connectors you need.",
    bullets: ["Self-hosted with full control", "Driven by 300+ community connectors", "Pair with Filigran support packages"],
    action: { label: "Install now", href: "https://docs.opencti.io/latest/deployment/installation" },
  },
  {
    title: "SaaS",
    description:
      "Enjoy a fully managed OpenCTI Enterprise Edition hosted by Filigran with self-service provisioning, upgrades and monitoring included.",
    bullets: ["Managed cloud footprint", "Automatic updates & backups", "Support team included"],
    action: { label: "See SaaS plans", href: "/offerings/software-as-a-service" },
  },
  {
    title: "Enterprise Edition",
    description:
      "Deploy Enterprise Edition in SaaS or on-premise to access advanced automation, AI features, RBAC and Filigran’s comprehensive support package.",
    bullets: ["Advanced governance & AI copilots", "Enterprise-grade RBAC and auditing", "Dedicated CSM & solution architects"],
    action: { label: "Explore Enterprise Edition", href: "/offerings/opencti-enterprise-edition" },
  },
];

export const communityLinks = [
  {
    title: "GitHub",
    description: "Your gateway to exploring, contributing, and shaping the future of threat intelligence.",
    href: "https://github.com/OpenCTI-Platform",
    icon: GitBranch,
  },
  {
    title: "Product Integrations",
    description: "Discover the list of resources available to complete your OpenCTI journey with 300+ connectors.",
    href: "https://filigran.notion.site/OpenCTI-Ecosystem-868329e9fb734fca89692b2ed6087e76",
    icon: Layers,
  },
  {
    title: "Documentation",
    description: "Find everything needed to get started, release notes, and presentations about the platform.",
    href: "https://docs.opencti.io/latest/",
    icon: BookOpen,
  },
  {
    title: "Slack Community",
    description: "Stay informed about platform developments and engage in broader discussions.",
    href: "https://community.filigran.io/",
    icon: SlackIcon,
  },
];

export const highlightContent = [
  {
    eyebrow: "Customer story",
    title: "How Rivian achieves a 95% reduction in response time with OpenCTI",
    description:
      "Explore how Rivian tackled data silos, improved threat detection and scaled cybersecurity operations effortlessly.",
    href: "/customer-stories/how-rivian-achieves-a-95-reduction-in-response-time-with-opencti",
  },
  {
    eyebrow: "Competitive brief",
    title: "Elevating Threat Intelligence",
    description:
      "Understand why full-featured enterprise TIPs such as OpenCTI are key for turning raw data into actionable intelligence.",
    href: "/content-library",
  },
  {
    eyebrow: "Use case",
    title: "Intelligence-driven SOC",
    description:
      "Learn how SOC teams conduct operations driven by intelligence from internal and external sources to save valuable time.",
    href: "/use-cases/intelligence-driven-soc/",
  },
  {
    eyebrow: "White paper",
    title: "The Intelligence Gap: What’s Missing in Your Cyber Strategy",
    description:
      "See how continuous threat management helps CISOs stay ahead by prioritizing what really matters.",
    href: "/content-library",
  },
];

