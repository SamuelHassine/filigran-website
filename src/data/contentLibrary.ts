export type ContentLibraryCategory =
  | 'Competitive Brief'
  | 'On-demand Webinar'
  | 'Report'
  | 'Tutorial Video'
  | 'White Paper';

export interface ContentLibraryResource {
  category: ContentLibraryCategory;
  title: string;
  description: string;
  cta: string;
  slug: string;
  externalUrl: string;
  image: string;
}

const asset = (filename: string) =>
  new URL(`../assets/resources/content-library/${filename}`, import.meta.url).href;

export const contentLibraryCategories = [
  { label: 'View all', value: 'all' },
  { label: 'Competitive Brief', value: 'Competitive Brief' },
  { label: 'On-demand Webinar', value: 'On-demand Webinar' },
  { label: 'Report', value: 'Report' },
  { label: 'Tutorial Video', value: 'Tutorial Video' },
  { label: 'White Paper', value: 'White Paper' },
] as const;

export const contentLibraryResources: ContentLibraryResource[] = [
  {
    category: "White Paper",
    title: "A Practical Guide to Threat-Informed Defense for Federal Agencies",
    description: "How Federal Agencies Can Align Security Operations with Real-World Adversary Behavior. A Step-by-Step Framework for Operationalizing Threat-Informed Defense.",
    cta: "Read more",
    slug: "a-practical-guide-to-threat-informed-defense-for-federal-agencies",
    externalUrl: "/resources/a-practical-guide-to-threat-informed-defense-for-federal-agencies/",
    image: asset("website-thumbnail-federal-agencies.png"),
  },
  {
    category: "White Paper",
    title: "A Practical Guide to Threat-Informed Defense",
    description: "A step-by-step guide to help organizations proactively align security operations with real-world threats using a Threat-Informed Defense strategy.",
    cta: "Access the white paper",
    slug: "practical-guide-to-threat-informed-defense",
    externalUrl: "/resources/practical-guide-to-threat-informed-defense/",
    image: asset("wp-thumbnail-tid.png.webp"),
  },
  {
    category: "Competitive Brief",
    title: "Elevating Threat Intelligence - How to Choose the Right Solution that Scales for You",
    description: "Organizations today are required to continuously monitor their threat landscape and take remedial actions. Adapt a full-featured enterprise TIP such as OpenCTI allows cybersecurity teams turn raw data into actionable, strategic intelligence.",
    cta: "Read more",
    slug: "elevating-threat-intelligence",
    externalUrl: "/resources/elevating-threat-intelligence/",
    image: asset("competitive-brief-elevating-threat-intel.png.webp"),
  },
  {
    category: "On-demand Webinar",
    title: "OpenCTI at Rivian: 88% Faster Detection",
    description: "How Rivian cut threat detection time by 88% with unified threat intel, automation, and simulation-driven testing using OpenCTI.",
    cta: "Watch now",
    slug: "opencti-at-rivian-88-faster-detection",
    externalUrl: "/resources/opencti-at-rivian-88-faster-detection/",
    image: asset("customer-webinar-filigran-rivian-2.png.webp"),
  },
  {
    category: "On-demand Webinar",
    title: "OpenCTI for MSSP",
    description: "A 5-phase maturity model that helps MSSPs evolve from basic threat data collection to delivering premium security services.",
    cta: "Watch now",
    slug: "opencti-for-mssp",
    externalUrl: "/resources/opencti-for-mssp/",
    image: asset("mssp-webinar_on-demand-169-1920x1080.png"),
  },
  {
    category: "On-demand Webinar",
    title: "Architecting OpenCTI for Classified Airgapped Environments",
    description: "Delve into best practices for deploying threat intelligence platforms in highly secure, air-gapped settings, ensuring robust multi-level security and operational efficiency.",
    cta: "Watch now",
    slug: "architecting-opencti-for-classified-airgapped-environments",
    externalUrl: "/resources/architecting-opencti-for-classified-airgapped-environments/",
    image: asset("lp_webinar-series_part4_on-demand-1920x1080.png"),
  },
  {
    category: "White Paper",
    title: "The Intelligence Gap: What's Missing in Your Cyber Strategy",
    description: "How continuous Threat Management helps CISO stay ahead by prioritizing what really matters",
    cta: "Access the white paper",
    slug: "the-intelligence-gap-what-is-missing-in-your-cyber-strategy",
    externalUrl: "/resources/the-intelligence-gap-what-is-missing-in-your-cyber-strategy/",
    image: asset("wp-thumbnail-threat-intel-gap.svg"),
  },
  {
    category: "On-demand Webinar",
    title: "Strengthening National Cyber-Resilience in Government",
    description: "Discover strategies to bolster national cyber-resilience by proactively mitigating threats, improving incident response, and ensuring continuity with advanced threat management tools.",
    cta: "Watch now",
    slug: "strengthening-national-cyber-resilience-in-government",
    externalUrl: "/resources/strengthening-national-cyber-resilience-in-government/",
    image: asset("lp_webinar-series_part2_on-demand-2-1920x1080.png"),
  },
  {
    category: "On-demand Webinar",
    title: "Threat Intelligence Sharing & Collaboration",
    description: "Explore how government agencies can streamline ISAC operations and enhance intelligence sharing through the powerful capabilities of OpenCTI and OpenBAS.",
    cta: "Watch now",
    slug: "threat-intelligence-sharing-collaboration",
    externalUrl: "/resources/threat-intelligence-sharing-collaboration/",
    image: asset("lp_webinar-series_part-1_on-demand-1920x1080.png"),
  },
  {
    category: "White Paper",
    title: "Operationalizing Threat Intelligence for National Security",
    description: "How threat intelligence helps government agencies stay ahead of evolving cyber threats and protect critical infrastructure",
    cta: "Access the white paper",
    slug: "operationalizing-threat-intelligence-for-national-security",
    externalUrl: "/resources/operationalizing-threat-intelligence-for-national-security/",
    image: asset("wp-thumbnail-gov.svg"),
  },
  {
    category: "On-demand Webinar",
    title: "Effortless Report Generation - Inform Your Executives with a Click",
    description: "AskAI and Playbook-Powered Dashboards help CTI teams automate reporting, justify cybersecurity investments, and deliver executive-ready intelligence in real time.",
    cta: "Watch now",
    slug: "askai-playbook-powered-dashboards",
    externalUrl: "/resources/askai-playbook-powered-dashboards/",
    image: asset("lp_webinar-series_part3_march6-4-1920x1080.png"),
  },
  {
    category: "On-demand Webinar",
    title: "Need visibility on who does what in your CTI platform?",
    description: "Audit Logging & Role-Based Access Control let you track every change, assign the right permissions, and stay compliant with frameworks like GDPR, ISO/IEC 27001, and NIST CSF.",
    cta: "Watch now",
    slug: "audit-logging-and-rbac",
    externalUrl: "/resources/audit-logging-and-rbac/",
    image: asset("lp_webinar-series_part2_march5-3-1920x1080.png"),
  },
  {
    category: "On-demand Webinar",
    title: "Reduce your Time to Detection with Automated Workflows",
    description: "Streamline investigations with automated workflows-helping your team reduce Time to Detect, Investigate, and Remediate threats with greater efficiency.",
    cta: "Watch Now",
    slug: "automated-workflows-webinar",
    externalUrl: "/resources/automated-workflows-webinar/",
    image: asset("lp_webinar-series_part-1_march4-2-1920x1080.png"),
  },
  {
    category: "Tutorial Video",
    title: "Integrating Recorded Future in OpenCTI",
    description: "Discover how Recorded Future data integrates into OpenCTI to enrich your threat intelligence.",
    cta: "Watch now",
    slug: "integrating-recorded-future-in-opencti",
    externalUrl: "/resources/integrating-recorded-future-in-opencti/",
    image: asset("tutorial_-integrating-recorded-future.png.webp"),
  },
  {
    category: "Tutorial Video",
    title: "Navigating OpenBAS",
    description: "Learn how OpenBAS helps validate your organization's security tools and procedures through scenarios, simulations, and over 1,600 customizable injects.",
    cta: "Watch now",
    slug: "navigating-openbas",
    externalUrl: "/resources/navigating-openbas/",
    image: asset("tutorial_-navigating-openbas.png.webp"),
  },
  {
    category: "Report",
    title: "Strengthening Oil and Gas Cyber Defenses",
    description: "How Threat Intel Platforms can better protect Oil and Gas against emerging threats",
    cta: "Access the full report",
    slug: "oil-gas-industry-report-2024",
    externalUrl: "/resources/oil-gas-industry-report-2024/",
    image: asset("report-oil-gas-resources-thumbnail.svg"),
  },
  {
    category: "Tutorial Video",
    title: "Import crisis scenario from files in OpenBAS",
    description: "This video will demonstrate how OpenBAS 1.3 enables you to import XLS files and automatically extract the relevant information to create all the injects and map them to the timeline.",
    cta: "Watch now",
    slug: "import-crisis-scenario-from-files-in-openbas",
    externalUrl: "/resources/import-crisis-scenario-from-files-in-openbas/",
    image: asset("tutorial_-import-crisis-scenario-in-openbas.png.webp"),
  },
  {
    category: "Report",
    title: "Enhancing financial sector cybersecurity",
    description: "Discover the evolving cyber threat landscape in the financial sector and how OpenCTI enables faster incident response.",
    cta: "Access the full report",
    slug: "finance-industry-report-2024",
    externalUrl: "/resources/finance-industry-report-2024/",
    image: asset("report-financial-services.svg"),
  },
  {
    category: "Tutorial Video",
    title: "Custom Dashboard in OpenCTI",
    description: "This video will demonstrate how OpenCTI's custom dashboards can be created for a wide variety of use cases such as monitoring internal metrics or tracking threats targeting your sector.",
    cta: "Watch now",
    slug: "custom-dashboard-in-opencti",
    externalUrl: "/resources/custom-dashboard-in-opencti/",
    image: asset("tutorial_-custom-dashboard.png.webp"),
  },
  {
    category: "Tutorial Video",
    title: "Automation Playbooks in OpenCTI",
    description: "This video will demonstrate how to use OpenCTI to save time by automating all sorts of tasks and use cases.",
    cta: "Watch now",
    slug: "automation-playbooks-in-opencti",
    externalUrl: "/resources/automation-playbooks-in-opencti/",
    image: asset("tutorial_-automation-playbooks.png.webp"),
  },
  {
    category: "Tutorial Video",
    title: "OpenCTI for disinformation",
    description: "In this video, explore how to utilize OpenCTI to classify and investigate disinformation.",
    cta: "Watch now",
    slug: "opencti-for-disinformation",
    externalUrl: "/resources/opencti-for-disinformation/",
    image: asset("tutorial_-opencti-for-disinformation.png.webp"),
  },
  {
    category: "Tutorial Video",
    title: "Integrating OpenCTI",
    description: "This video will demonstrate a few ways to integrate OpenCTI within your cyber security stack.",
    cta: "Watch now",
    slug: "integrating-opencti",
    externalUrl: "/resources/integrating-opencti/",
    image: asset("tutorial_-integrating-opencti.png.webp"),
  },
  {
    category: "Tutorial Video",
    title: "Navigating OpenCTI",
    description: "This video will demonstrate a few ways to consult your Cyber Threat Intelligence in OpenCTI's user-friendly GUI.",
    cta: "Watch now",
    slug: "navigating-opencti",
    externalUrl: "/resources/navigating-opencti/",
    image: asset("tutorial_-navigating-opencti.png.webp"),
  }
];
