export interface StoryMetric {
  value: string;
  label: string;
}

export interface StoryMetaItem {
  label: string;
  value: string;
  href?: string;
}

export interface StoryProduct {
  name: string;
  href: string;
}

export interface StoryBlockSubsection {
  title: string;
  paragraphs: string[];
}

export type StoryBlock =
  | {
      type: 'section';
      title: string;
      paragraphs?: string[];
      subsections?: StoryBlockSubsection[];
    }
  | {
      type: 'quote';
      text: string;
      author: string;
      role: string;
    }
  | {
      type: 'image';
      src: string;
      alt: string;
      caption?: string;
    };

export interface RelatedResource {
  label: string;
  title: string;
  description: string;
  href: string;
}

export interface CustomerStory {
  slug: string;
  path: string;
  client: string;
  heroLabel: string;
  title: string;
  summary: string;
  heroImage: string;
  heroImageAlt: string;
  cardImage?: string;
  logo?: string;
  stats: StoryMetric[];
  info: StoryMetaItem[];
  pdfUrl?: string;
  industry: string;
  location?: string;
  size?: string;
  products?: StoryProduct[];
  useCases?: string[];
  blocks: StoryBlock[];
  relatedResources?: RelatedResource[];
}

export const customerStories: CustomerStory[] = [
  {
    slug: 'asrg-scaled-automotive-threat-management-with-opencti',
    path: '/customer-stories/asrg-scaled-automotive-threat-management-with-opencti',
    client: 'Automotive Security Research Group (ASRG)',
    heroLabel: 'Customer Story',
    title: 'From 5 Days to A Few Seconds: ASRG Scaled Automotive Threat Management with OpenCTI',
    summary:
      'Discover how ASRG collaborated with Filigran and leveraged OpenCTI to build a trusted, community-driven threat intelligence platform for the automotive industry. The solution automates enrichment processes and enables secure, scalable information sharing across global stakeholders.',
    heroImage: '/customer-stories/asrg/hero.webp',
    heroImageAlt: 'ASRG community using OpenCTI dashboards',
    cardImage: '/customer-stories/asrg/hero.webp',
    logo: '/customer-stories/asrg/logo.svg',
    stats: [
      {
        value: '1.2 million+',
        label:
          "vulnerability-related data points stored in the world's largest open threat intel base for automotive cybersecurity"
      },
      {
        value: '90%',
        label: 'automation of enrichment workflows leading to significant time savings'
      },
      {
        value: '20K+',
        label: 'community members can be reached with curated intelligence'
      }
    ],
    info: [
      { label: 'Industry', value: 'Non-profit organization' },
      { label: 'HQ', value: 'Germany' },
      { label: 'Products used', value: 'OpenCTI', href: '/platforms/opencti' },
      {
        label: 'Key capabilities',
        value: 'Threat intelligence library & data sharing - Vulnerability monitoring - Automation & scalability'
      }
    ],
    pdfUrl:
      '/resources/pdfs/filigran_customer-story_-asrg-scaled-automotive-threat-management-with-opencti.pdf',
    industry: 'Cybersecurity community',
    location: 'Germany',
    products: [
      { name: 'OpenCTI', href: '/platforms/opencti' }
    ],
    useCases: [
      'Threat intelligence library',
      'Community data sharing',
      'Vulnerability monitoring',
      'Automation & enrichment'
    ],
    blocks: [
      {
        type: 'section',
        title: 'About ASRG',
        paragraphs: [
          `The Automotive Security Research Group (ASRG) is a non-profit organization, founded in 2016 to advance cybersecurity in the automotive industry. With nearly 20,000 members worldwide, ASRG connects researchers and industry professionals through education, networking, and collaborative initiatives. As a Certified Numbering Authority (CNA), ASRG also supports responsible vulnerability disclosure by assigning CVE identifiers and coordinating actions with relevant stakeholders. It promotes a bottom-up, contributor-led approach in building trusted cybersecurity knowledge and solutions across the industry.`
        ]
      },
      {
        type: 'quote',
        text: 'With OpenCTI, the enrichment process now takes seconds. Before, setting up the system and dashboards took over 40 hours.',
        author: 'John Heldreth',
        role: 'ASRG, Founder'
      },
      {
        type: 'section',
        title: 'Context',
        paragraphs: [
          `As cybersecurity threats have grown more sophisticated in the automotive industry, the need for a reliable and collaborative intelligence ecosystem has become increasingly obvious. Traditional IT threat-sharing models did not address the unique challenges posed by the complexity of automotive systems. That is why John Heldreth, then working at Porsche, launched what would become the Automotive Security Research Group (ASRG) in 2016: "We realized that the community would play a very important role in the success of cybersecurity for automotive. It does not matter which company you work for: you are either part of the solution or you are on the other side."`,
          `ASRG quickly evolved into a global initiative with over 20,000 members, supported by a lean core team and hundreds of active volunteers contributing to projects worldwide.`
        ]
      },
      {
        type: 'section',
        title: 'Challenges',
        subsections: [
          {
            title: 'Limited interoperability and external sharing',
            paragraphs: [
              `While ASRG was already using a CTI platform, it lacked the flexibility and openness needed to organize, contextualize, and share information efficiently. The system was designed for internal use only, which made it difficult to build meaningful relationships between objects or expose threat intelligence externally. "We create our own threat intelligence based on industry input, but we lacked a place to structure it, channel it, and make it usable for others," recalls John Heldreth.`,
              `To enable collaboration, the team had to manually extract data via custom APIs, reformat it, and rehost it in external tools. "In general, companies want to keep threat information secret, but we needed the opposite," John adds. This workaround created friction, increased the risk of errors, and made real-time information exchange nearly impossible.`
            ]
          },
          {
            title: 'High infrastructure and maintenance costs',
            paragraphs: [
              `Maintaining two parallel systems—one for internal CTI management and one for external dashboards—resulted in significant overheads. ASRG had to run large servers and shoulder the cost of maintaining redundant infrastructure. This model was not sustainable for a non-profit organization operating on limited resources.`
            ]
          },
          {
            title: 'Time-consuming workflows',
            paragraphs: [
              `Data enrichment and dashboard generation were largely manual processes that required extensive time and effort to set up and maintain. "It used to take over 40 hours of work," explains John Heldreth. This slowed down ASRG's ability to effectively disseminate information, limiting the platform's responsiveness to evolving threats and community needs.`
            ]
          },
          {
            title: 'Lack of traceability in enrichment processes',
            paragraphs: [
              `When ASRG began automating enrichment using AI models, it faced a new challenge: tracking the origin and logic behind each piece of generated data. "We needed to ensure the quality of the data. Every step of the enrichment process had to be traceable—who created what, and why—so that we could trust the data." To build transparency and for audit purposes, ASRG needed a platform that could preserve this end-to-end traceability at every stage of enrichment.`
            ]
          }
        ]
      },
      {
        type: 'section',
        title: "Why did ASRG choose Filigran's OpenCTI",
        subsections: [
          {
            title: 'Cost-effective and open source by design',
            paragraphs: [
              `As a non-profit organization with limited resources, ASRG needed a platform that could scale without licensing constraints or vendor lock-in. While their previous CTI solution was used at no cost, it lacked the flexibility and openness required for automation, enrichment, and community-driven sharing. OpenCTI's open-source nature made it possible to get started without financial barriers. "It was mostly cost-driven at the beginning," John Heldreth explains. This made Filigran's OpenCTI a great option to scale securely and independently.`
            ]
          },
          {
            title: 'Structured, interoperable, and based on open standards',
            paragraphs: [
              `OpenCTI's compliance with the STIX 2.1 standard provided ASRG with a clear, interoperable framework for structuring threat intelligence. "If someone understands the STIX schema, then they understand OpenCTI," explains John. "That makes it easier for us to structure the data and build meaningful relationships between objects." While STIX is not perfect, it provides a critical foundation for sharing knowledge across use cases.`
            ]
          },
          {
            title: 'API-first architecture enabling automation and enrichment',
            paragraphs: [
              `ASRG needed the freedom to extract, enrich, and reintegrate data according to its own workflows, especially to support its AI-driven enrichment pipeline. This process includes 32 sequential steps, where raw data is extracted from OpenCTI, analyzed, categorized, linked to relevant components, and continuously updated before being sent back to the platform. "We have to do everything with minimal resources, so we use as much automation and artificial intelligence as possible. Being able to orchestrate that process end to end without being limited by the platform was essential." OpenCTI's robust API and Python libraries gave the team full control over how data flows in and out of the system.`
            ]
          }
        ]
      },
      {
        type: 'section',
        title: 'Adoption',
        paragraphs: [
          `Deploying Filigran's OpenCTI marked a turning point in ASRG's operations. The platform was integrated quickly thanks to its modular design and accessible tooling. Within a few weeks, ASRG had migrated its data and begun centralizing its threat intelligence into a unified and well-organized environment.`,
          `What made the difference was the close, responsive relationship with Filigran's team. Through a dedicated Slack channel, ASRG was able to raise questions, test ideas, and adapt the platform to fit the specific requirements of the automotive sector. "We were always trying to find a way to best fit the automotive use case into the existing solution, and it was fantastic," says John. "One of the best implementation experiences I have had with any software, especially for a non-profit where there is not a lot of money or revenue."`
        ]
      },
      {
        type: 'quote',
        text: 'If someone understands the STIX schema, then they understand OpenCTI. That makes it easier for us to structure the data and build meaningful relationships between objects.',
        author: 'John Heldreth',
        role: 'ASRG, Founder'
      },
      {
        type: 'section',
        title: 'How Filigran helps the ASRG',
        subsections: [
          {
            title: 'Operational efficiency through automation',
            paragraphs: [
              `Thanks to Filigran's advanced tool, ASRG has achieved over 90% of automation across its enrichment workflows. Intelligence objects, such as vulnerabilities and reports, are now collected, contextualized, and redistributed with minimal human input. "The time it takes to enrich something in OpenCTI is usually in seconds." This acceleration enables ASRG to expand capabilities without increasing cost.`
            ]
          },
          {
            title: 'Confidence in data quality and provenance',
            paragraphs: [
              `OpenCTI's graph-based structure has allowed ASRG to enforce strict traceability on over 1.2 million vulnerability-related data points. Each object and relationship, whether produced by a human contributor or an automated process, is now fully documented and open to feedback from the community. Such traceability ensures that ASRG can uphold the level of trust expected by its global ecosystem when distributing actionable intelligence.`
            ]
          },
          {
            title: 'Standardized sharing with reliable partners',
            paragraphs: [
              `Thanks to Filigran's OpenCTI, ASRG can now make curated intelligence available to selected peers in real time via STIX/TAXII-compatible APIs and dashboards. This supports its long-term goal of fostering a transparent, community-driven model for automotive cybersecurity, where knowledge flows in both directions between contributors and consumers. "We noticed that there was a need for a community where people can feel trusted, respected, and contribute to positive cybersecurity outcomes," says John.`
            ]
          }
        ]
      },
      {
        type: 'section',
        title: 'The road ahead',
        paragraphs: [
          `ASRG aims to expand its use of OpenCTI to better reflect the complexity of modern automotive systems. One of the next priorities is the ability to map and track assets more precisely, especially hardware components, embedded software, and cryptographic elements. ASRG is closely following the evolution of emerging cybersecurity standards and vulnerability exchange formats and hopes to see stronger alignment with these in future versions of OpenCTI.`,
          `"We hope to work even more closely with the development team to make OpenCTI more relevant for the product world," John says. The team invites peers to reach out if they are interested in collaborating on community intelligence projects or would like to see the current OpenCTI implementation.`
        ]
      }
    ],
    relatedResources: [
      {
        label: 'Customer Story',
        title: "How Switzerland's FDFA Trains Smarter with OpenAEV",
        description:
          'To streamline simulations and reduce workload, the Swiss FDFA chose OpenAEV by Filigran, enhancing operational readiness across 170 global sites, including embassies and consulates.',
        href: '/customer-stories/how-switzerlands-fdfa-trains-smarter-with-openaev'
      },
      {
        label: 'White Paper',
        title: 'A Practical Guide to Threat-Informed Defense',
        description:
          'A step-by-step guide to help organizations proactively align security operations with real-world threats using a Threat-Informed Defense strategy.',
        href: '/resources#content-library'
      },
      {
        label: 'On-demand Webinar',
        title: 'Threat Intelligence Sharing & Collaboration',
        description:
          'Explore how government agencies can streamline ISAC operations and enhance intelligence sharing through the powerful capabilities of OpenCTI and OpenBAS.',
        href: '/events-webinars'
      }
    ]
  },
  {
    slug: 'how-rivian-achieves-a-95-reduction-in-response-time-with-opencti',
    path: '/customer-stories/how-rivian-achieves-a-95-reduction-in-response-time-with-opencti',
    client: 'Rivian',
    heroLabel: 'Customer Story',
    title: 'How Rivian Achieves a 95% Reduction in Response Time with OpenCTI',
    summary:
      'Explore how Rivian leveraged OpenCTI to tackle data silos, improve threat detection, and scale their cybersecurity operations effortlessly.',
    heroImage: '/customer-stories/rivian/hero.png',
    heroImageAlt: 'Rivian electric truck driving through the desert',
    cardImage: '/customer-stories/rivian/hero.png',
    logo: '/customer-stories/rivian/logo.webp',
    stats: [
      { value: 'Nearly 88%', label: 'reduction in mean time to detect (MTTD) over the past 12 months' },
      { value: '95%', label: 'improvement in response times' },
      { value: '980 million', label: 'IoCs blocked in a single 30-day period' }
    ],
    info: [
      { label: 'Industry', value: 'Motor vehicle manufacturing' },
      { label: 'HQ', value: 'United States' },
      { label: 'Company size', value: '10K+ employees' },
      { label: 'Products used', value: 'OpenCTI & OpenAEV' },
      {
        label: 'Use cases',
        value: 'IoC management & detection - Incident and case management - Data sharing - Threat landscape & vulnerability monitoring'
      }
    ],
    pdfUrl: '/resources/pdfs/filigran-rivian-customer-story-vf.pdf',
    industry: 'Motor vehicle manufacturing',
    location: 'United States',
    size: '10K+ employees',
    products: [
      { name: 'OpenCTI', href: '/platforms/opencti' },
      { name: 'OpenAEV', href: '/platforms/openaev' }
    ],
    useCases: [
      'IoC management & detection',
      'Incident and case management',
      'Data sharing',
      'Threat landscape monitoring'
    ],
    blocks: [
      {
        type: 'section',
        title: 'About Rivian',
        paragraphs: [
          `Rivian is a pioneering electric vehicle manufacturer headquartered in Irvine, California, with over 15,000 employees. Known for its adventure electric trucks, SUVs, and delivery vans, Rivian's mission is to "Keep the World Adventurous Forever" by redefining mobility and manufacturing through innovation. As both an EV manufacturer and a software company, Rivian is committed to creating a more sustainable future and preserving nature for generations to come.`
        ]
      },
      {
        type: 'quote',
        text: 'OpenCTI has saved our CSOC several minutes per ticket. When the team goes through hundreds of cases per day, this easily adds up to hours very quickly.',
        author: 'Chris Mandich',
        role: 'Director of Cybersecurity Operations, Rivian'
      },
      {
        type: 'section',
        title: 'Context',
        paragraphs: [
          `As a software-defined vehicle company, Rivian's operations extend beyond building electric vehicles to managing a complex ecosystem of interconnected software and hardware. "Protecting the many attack surfaces of our business—retail, manufacturing, enterprise, and applications—is critical," says Chris Mandich, Director of Cybersecurity Operations. Because Rivian designs, manufactures, and sells electric adventure vehicles while owning the technology stack end to end, it can implement robust cybersecurity across the complete ecosystem.`,
          `Prior to OpenCTI, Rivian relied on separate platforms for threat intelligence and case management, which made it challenging to reach their objectives and slowed down analysts who had to pivot between tools.`
        ]
      },
      {
        type: 'section',
        title: 'Challenges',
        paragraphs: [
          `To address its complex cybersecurity needs, Rivian identified several critical challenges requiring a unified and scalable platform.`
        ],
        subsections: [
          {
            title: 'Siloed data',
            paragraphs: [
              `The lack of integration between threat intelligence and case management platforms created inefficiencies. "Having separate case management and threat intelligence platforms required us to put engineering work into the integrations between the two of them," explains Nick Peterson, Senior Staff Cybersecurity Engineer. Analysts had to navigate multiple tools to gather context, slowing down incident resolution and adding complexity.`
            ]
          },
          {
            title: 'Indicator export issues',
            paragraphs: [
              `Rivian's previous cloud-based threat intelligence platform struggled to scale. "We had a block list that we spent time curating and populating with known bad elements, only to realize weeks later that it was failing open because the CTI solution we were using could not export these lists correctly," says Nick. The issue provided a false sense of security and undermined their defenses.`
            ]
          }
        ]
      },
      {
        type: 'section',
        title: 'Adoption',
        paragraphs: [
          `Rivian's transition to OpenCTI and OpenAEV was remarkably smooth. "We just spun up an OpenCTI instance and started using it," says Nick Peterson. The team took only 30 days to go from proof of concept to production.`,
          `The deployment leverages Infrastructure as Code with Terraform and AWS, Elastic Container Services, RabbitMQ, S3, and OpenSearch. OpenCTI integrates seamlessly with Rivian's threat intelligence, incident response, and third-party risk teams, importing data from various sources to support alerting, risk scoring, and decision making. This customization ensured the platform fit perfectly into Rivian's ecosystem.`
        ]
      },
      {
        type: 'quote',
        text: 'One of the biggest benefits is a huge increase in efficiency.',
        author: 'Nick Peterson',
        role: 'Senior Staff Cybersecurity Engineer, Rivian'
      },
      {
        type: 'section',
        title: 'How Filigran helps Rivian',
        subsections: [
          {
            title: 'Boosted CSOC team productivity',
            paragraphs: [
              `Integrating case management with threat intelligence inside OpenCTI was a game-changer for Rivian. "One of the biggest benefits is a huge increase in efficiency," says Nick Peterson. Chris Mandich adds, "OpenCTI has saved our CSOC several minutes per ticket... this easily adds up to hours very quickly." Analysts now focus on reviewing data and making decisions instead of juggling tools.`
            ]
          },
          {
            title: 'Enhanced threat detection',
            paragraphs: [
              `Consolidating data in OpenCTI significantly improved threat detection and incident response. "The STIX 2.1 standard provided uniformity across our cases and TIP, helping us standardize our indicator intake more effectively," notes Nick. Rivian curated export lists that resulted in over 980 million blocks in a single 30-day period, and multiple teams now leverage centrally managed intelligence.`
            ]
          },
          {
            title: 'Substantial cost savings',
            paragraphs: [
              `By consolidating tools and leveraging open source, Rivian achieved significant cost reductions. "There was another huge benefit in terms of cost savings by moving from two platforms to one," says Nick Peterson. The open-source nature of OpenCTI also fostered a collaborative environment where Rivian could contribute connectors back to the community.`
            ]
          },
          {
            title: 'Continuous improvement through community support',
            paragraphs: [
              `The responsiveness and frequent updates from the OpenCTI team provided Rivian with a robust foundation for continuous improvement. "The feedback and responsiveness—whether fixing bugs, enhancing features, or adding functionalities—was really impressive," says Chris Mandich. The agility of the platform allows Rivian to stay ahead of emerging threats.`
            ]
          }
        ]
      },
      {
        type: 'section',
        title: 'Key results',
        subsections: [
          {
            title: 'Nearly 88% reduction in mean time to detect (MTTD)',
            paragraphs: [
              `Consolidating tools and adopting OpenCTI reduced operational expenses while providing scalability and fostering collaboration across teams.`
            ]
          },
          {
            title: 'Response times improved by 95%',
            paragraphs: [
              `Rivian's CSOC dramatically reduced response times, allowing analysts to process up to 100 cases daily with increased efficiency.`
            ]
          },
          {
            title: '980 million IoCs blocked',
            paragraphs: [
              `Within a single 30-day period, Rivian's curated list of indicators generated 980 million blocks by leveraging OpenCTI's export capabilities.`
            ]
          }
        ]
      },
      {
        type: 'section',
        title: 'Future outlook',
        paragraphs: [
          `Rivian is committed to expanding its use of OpenCTI and OpenAEV to further enhance cybersecurity. "We are working on getting additional context for risk scoring for organization entities within OpenCTI… We can manage the intake of information for all of them under one umbrella," says Nick Peterson.`,
          `Chris Mandich adds, "OpenAEV is coming out. The strategic evolution of that platform is exciting, as it enables us to measure both our effectiveness from an incident response or tabletop perspective and continuously test and validate the tools and technologies we use." With a dedicated team and advanced solutions, Rivian is poised to continue making a positive impact on the world.`
        ]
      }
    ],
    relatedResources: [
      {
        label: 'On-demand Webinar',
        title: 'OpenCTI at Rivian: 88% Faster Detection',
        description:
          'How Rivian cut threat detection time by 88% with unified threat intel, automation, and simulation-driven testing using OpenCTI.',
        href: '/events-webinars'
      },
      {
        label: 'White Paper',
        title: 'A Practical Guide to Threat-Informed Defense',
        description:
          'A step-by-step guide to help organizations proactively align security operations with real-world threats using a Threat-Informed Defense strategy.',
        href: '/resources#content-library'
      },
      {
        label: 'White Paper',
        title: "The Intelligence Gap: What's Missing in Your Cyber Strategy",
        description:
          'How continuous threat management helps CISOs stay ahead by prioritizing what really matters.',
        href: '/resources#content-library'
      }
    ]
  },
  {
    slug: 'how-a-leading-luxury-manufacturer-strengthens-its-cyber-defense-with-opencti',
    path: '/customer-stories/how-a-leading-luxury-manufacturer-strengthens-its-cyber-defense-with-opencti',
    client: 'Leading French Luxury Group',
    heroLabel: 'Customer Story',
    title: 'How a Leading Luxury Manufacturer Strengthens Its Cyber Defense with OpenCTI',
    summary:
      'Learn how a major French luxury goods manufacturer built a high-performance internal CERT and threat intelligence capability using OpenCTI, improving detection, awareness, and response time across its global operations.',
    heroImage: '/customer-stories/luxury-manufacturer/hero.jpg',
    heroImageAlt: 'Paris rooftops at sunset over the Seine river',
    cardImage: '/customer-stories/luxury-manufacturer/hero.jpg',
    logo: '/customer-stories/luxury-manufacturer/opencti-icon.svg',
    stats: [
      { value: '+650 hours saved', label: 'through automated report ingestion per year' },
      { value: '1 incident/month', label: 'detected that previously slipped past other layers' },
      { value: '<15 minutes', label: 'for detection alerts to be deployed to the field' }
    ],
    info: [
      { label: 'Industry', value: 'Luxury goods' },
      { label: 'Products used', value: 'OpenCTI', href: '/platforms/opencti' },
      {
        label: 'Use case',
        value: 'IoC management & detection - Threat landscape monitoring - Threat intelligence library - Threat awareness'
      }
    ],
    pdfUrl: '/resources/pdfs/filigran-customer-story_leading-french-luxury-group_202508.pdf',
    industry: 'Luxury goods',
    location: 'France',
    size: '20,000+ employees',
    products: [
      { name: 'OpenCTI', href: '/platforms/opencti' }
    ],
    useCases: ['IoC management & detection', 'Threat landscape monitoring', 'Threat awareness'],
    blocks: [
      {
        type: 'section',
        title: 'About the customer',
        paragraphs: [
          `This customer is a major French luxury group, listed on the CAC 40 and employing over 20,000 people worldwide. With deep roots in traditional craftsmanship, the company has broadened its activities across various sectors of the luxury industry. Despite its artisanal image, its global operations rely heavily on IT and digital processes. Since 2020, the company has made cybersecurity a strategic priority and has rapidly scaled its internal Computer Emergency Response Team (CERT) to over 30 professionals.`
        ]
      },
      {
        type: 'quote',
        text: 'Even if every other protection fails, OpenCTI gives us a last line of defense.',
        author: 'Leading French Luxury Group, CERT Analyst',
        role: 'CERT Analyst'
      },
      {
        type: 'section',
        title: 'Context',
        paragraphs: [
          `In 2020, amid growing concern over cyber risks, the company's CISO decided to bring cyber defense in-house. Relying solely on third-party MSSPs was no longer sufficient for a business where image and trust are critical. "As a luxury brand, a single leaked customer file or IT disruption could have severe reputational and operational consequences," explained the company's CERT Analyst.`,
          `The brand created the CERT from scratch, growing it from four to over 30 members in just three years. The need for proactive, context-rich threat intelligence quickly emerged, not just for incident response, but also for strategic awareness and business protection. With limited CTI resources, they needed a tool that could automate, centralize, and surface the most relevant intelligence reliably and fast.`
        ]
      },
      {
        type: 'section',
        title: 'Challenges',
        subsections: [
          {
            title: 'Limited CTI capacity and costly manual processing',
            paragraphs: [
              `With only a fraction of a full-time position allocated to threat intelligence, manual handling of reports and indicators was not scalable. Transforming threat intelligence into detection rules was both time-consuming and resource intensive. "We are essentially half an FTE on threat intel. I could not manually link entities and write detections from scratch," says the CERT Analyst. "In a standard configuration, we would have had to create a retroactive hunting rule for each report, which takes time, increases CPU load, and often ends up being too resource-intensive to scale."`
            ]
          },
          {
            title: 'Dependence on third parties for core detection capabilities',
            paragraphs: [
              `Relying on external MSSPs had its limits: visibility was fragmented, responsiveness was not always optimal, and control over infrastructure and detection logic remained out of the team's hands. "We wanted dedicated people in-house rather than depending on a third party with partial oversight," says the CERT Analyst. Once cybersecurity became a top executive priority, a major restructuring was launched to build a dedicated CERT with best-in-class detection capabilities.`
            ]
          },
          {
            title: 'No centralized detection workflow for IoCs',
            paragraphs: [
              `The company lacked a system capable of automating IOC ingestion, enrichment, and alerting. Indicators were managed manually or not at all, with no centralized way to correlate them with internal telemetry. "We had no real tool for automated IOC detection," the CERT Analyst admits. "It was only manual effort, and a lot of blind spots."`
            ]
          },
          {
            title: 'Gaps between traditional security layers',
            paragraphs: [
              `Despite multiple layers of defense (email filters, SIEM, EDR), certain threat vectors could still bypass detection. The CERT needed a way to catch those that slipped through, especially when user behavior sidestepped existing controls. "If someone opens their personal inbox on a corporate workstation and clicks on a phishing link, that traffic will not go through our secured email gateway. We caught one of those thanks to OpenCTI. Otherwise, we might have missed it entirely."`
            ]
          }
        ]
      },
      {
        type: 'section',
        title: 'Why OpenCTI?',
        subsections: [
          {
            title: 'Detection-first design',
            paragraphs: [
              `By integrating indicators directly into the OpenCTI detection workflow, the CERT can trigger alerts in their SIEM whenever a known threat matches internal telemetry. "The big difference is that with our current setup, detection happens directly via OpenCTI, not just in the SIEM," explains the CERT Analyst. This turned OpenCTI into an active detection layer and reinforced endpoint protection across the organization.`
            ]
          },
          {
            title: 'Seamless IOC correlation outside the SIEM',
            paragraphs: [
              `Beyond its integration with the SIEM, OpenCTI operates as an autonomous correlation engine. It matches known IoCs with live observables, independently of other tools, which provides "an additional safety net," as the analyst explains. "Even if every other protection fails, when something hits an IoC known in OpenCTI, we still get the alert."`
            ]
          },
          {
            title: 'Open-source flexibility and co-evolution with the product',
            paragraphs: [
              `As an open-source platform, OpenCTI gave the team full autonomy to deploy, test, and scale the solution independently. The company was one of the early adopters, implementing OpenCTI before Filigran formally existed, and expanded its use case step by step as needs evolved. "We basically evolved alongside OpenCTI," recalls the CERT Analyst. "We did not just need a platform; we needed something that could grow with us, automate detection, and help us see what others miss."`
            ]
          },
          {
            title: 'Native support for STIX, MITRE, and structured sharing',
            paragraphs: [
              `OpenCTI provides native alignment with STIX, MITRE ATT&CK, and CVE references, enabling the team to structure and centralize their threat intelligence knowledge. "Thanks to those native supports, we are starting to build a really coherent knowledge base for high-quality threat intelligence," says the CERT Analyst.`
            ]
          }
        ]
      },
      {
        type: 'section',
        title: 'Adoption',
        paragraphs: [
          `The company's Computer Emergency Response Team rolled out OpenCTI early on, even before cyber threat intelligence became an official function. The first deployment started directly from the open-source GitHub repository, with a formal onboarding process.`,
          `Implementation was fast and largely self-driven. As the team added connectors, data sources, and enrichment logic, a few performance issues required support from Filigran. Only minor infrastructure changes were required to get the platform stable, optimized, and highly customized.`,
          `After a few years of successfully using the open-source version, the company briefly explored the SaaS model, but chose to keep an on-prem deployment that better met its performance, cost, and autonomy requirements. Throughout the process, Filigran's support team remained responsive and helpful, ensuring the platform kept running smoothly.`
        ]
      },
      {
        type: 'quote',
        text: 'We did not just need a platform — we needed something that could grow with us, automate detection, and help us see what others miss.',
        author: 'Leading French Luxury Group, CERT Analyst',
        role: 'CERT Analyst'
      },
      {
        type: 'section',
        title: 'How Filigran helps',
        subsections: [
          {
            title: 'Critical threat detection',
            paragraphs: [
              `The CERT has successfully identified and contained threats that slipped past traditional protections, such as phishing links opened through personal inboxes on corporate devices. "OpenCTI helps catch the one case that falls through the cracks. That is when you realize it is more than a backup, it is a safety net." The platform generates one to two high-confidence alerts per month that might otherwise have gone unnoticed.`
            ]
          },
          {
            title: 'Substantial time savings on report ingestion',
            paragraphs: [
              `Before OpenCTI, transforming threat reports into detection rules could take up to an hour per report. With automated ingestion, MISP connectors, and direct integration into detection workflows, indicators now reach detection in just a few clicks. "In three clicks, I have my indicators in detection," says the CERT Analyst. This automation saves up to 20 hours per week (more than 650 hours annually), and alerts typically trigger within 15 minutes once indicators are ingested.`
            ]
          },
          {
            title: 'Structured intel for better decision-making',
            paragraphs: [
              `OpenCTI dashboards and STIX-native architecture allow the CERT to track emerging threats and justify mitigation actions with reliable internal data. "I can generate a histogram showing that a given technique is increasingly mentioned; and it is our own data, not scraped from someone else's report," explains the analyst.`
            ]
          },
          {
            title: 'Continuous monitoring without manual effort',
            paragraphs: [
              `OpenCTI acts as a centralized hub, aggregating reports and indicators from both free and commercial feeds. "We plug in as many sources as possible and centralize everything in OpenCTI. It helps us keep up with daily intel and avoid missing anything important," says the CERT Analyst. The aggregation power improves situational awareness while reducing cognitive load.`
            ]
          }
        ]
      },
      {
        type: 'section',
        title: 'Future outlook',
        paragraphs: [
          `As the CERT continues to mature, OpenCTI will play an increasing role not only in detection and correlation, but also in raising cybersecurity awareness across the organization. Monthly incident reports and dashboards integrated into OpenCTI are already being used to communicate threat trends internally.`,
          `The CERT plans to expand its connector base, refine correlation logic, and enhance trend monitoring while maintaining a lightweight platform adapted to its operational reality. Going forward, OpenCTI will continue to support the group's ambition to stay proactive, informed, and resilient.`
        ]
      }
    ],
    relatedResources: [
      {
        label: 'Customer Story',
        title: 'How Rivian achieves a 95% reduction in response time with OpenCTI',
        description:
          'Explore how Rivian leveraged OpenCTI to tackle data silos, improve threat detection, and scale their cybersecurity operations effortlessly.',
        href: '/customer-stories/how-rivian-achieves-a-95-reduction-in-response-time-with-opencti'
      },
      {
        label: 'White Paper',
        title: 'A Practical Guide to Threat-Informed Defense',
        description:
          'A step-by-step guide to help organizations proactively align security operations with real-world threats using a Threat-Informed Defense strategy.',
        href: '/resources#content-library'
      },
      {
        label: 'On-demand Webinar',
        title: 'Reduce your Time to Detection with Automated Workflows',
        description:
          'Streamline investigations with automated workflows—helping your team reduce time to detect, investigate, and remediate threats with greater efficiency.',
        href: '/events-webinars'
      }
    ]
  },
  {
    slug: 'how-switzerlands-fdfa-trains-smarter-with-openaev',
    path: '/customer-stories/how-switzerlands-fdfa-trains-smarter-with-openaev',
    client: "Switzerland's Federal Department of Foreign Affairs (FDFA)",
    heroLabel: 'Customer Story',
    title: "How Switzerland's FDFA Trains Smarter with OpenAEV",
    summary:
      'To streamline simulations and reduce workload, the Swiss FDFA chose OpenAEV by Filigran, enhancing operational readiness across 170 global sites, including embassies and consulates.',
    heroImage: '/customer-stories/swiss-fdfa/hero.webp',
    heroImageAlt: 'Swiss Federal Palace building in Bern',
    cardImage: '/customer-stories/swiss-fdfa/hero.webp',
    logo: '/customer-stories/swiss-fdfa/logo.webp',
    stats: [
      { value: '80%', label: 'crisis preparation time cut' },
      { value: '+100%', label: 'growth in crisis training exercises in 6 months' },
      { value: '90%', label: 'satisfaction rate among participants' }
    ],
    info: [
      { label: 'Industry', value: 'Government agency' },
      { label: 'HQ', value: 'Switzerland' },
      { label: 'Products used', value: 'OpenAEV', href: '/platforms/openaev' },
      {
        label: 'Key capabilities',
        value: 'Incident response optimization - Automation & scalability - Threat awareness - Risk analysis'
      }
    ],
    pdfUrl: '/resources/pdfs/fdfa-customer-story-v1-01072025.pdf',
    industry: 'Government',
    location: 'Switzerland',
    size: '170+ embassies, consulates, and cooperation offices',
    products: [
      { name: 'OpenAEV', href: '/platforms/openaev' }
    ],
    useCases: ['Crisis readiness', 'Incident response exercises', 'Risk analysis'],
    blocks: [
      {
        type: 'section',
        title: 'About FDFA',
        paragraphs: [
          `The Federal Department of Foreign Affairs (FDFA) manages Switzerland's foreign policy and diplomatic network, with over 170 embassies, consulates, and cooperation offices worldwide. Its Crisis Management Center supports the prevention and coordination of responses to crises that may impact Swiss citizens, personnel, and infrastructures abroad.`
        ]
      },
      {
        type: 'quote',
        text: "Some teams came back to us saying, 'That was so easy! We would like to run another one.' That showed us they were not just complying with the mandate, but really embracing the tool.",
        author: 'Margaux Messerli',
        role: 'Swiss FDFA, Crisis Manager'
      },
      {
        type: 'section',
        title: 'Context',
        paragraphs: [
          `The FDFA's Crisis Management Center was facing growing operational pressure in an increasingly volatile global environment. The rising frequency of natural disasters, prolonged armed conflicts, and unpredictable security threats demanded faster, more scalable training methods to conduct annual crisis exercises in 170 Swiss representations.`,
          `Each mission is expected to run annual crisis simulations tailored to local risk factors. Scenarios range from civil unrest to severe weather events. As global threats become more frequent and complex, the FDFA must ensure both agility and consistency in its crisis response approach across all embassies and consulates, prompting the search for a modern crisis management tool.`
        ]
      },
      {
        type: 'section',
        title: 'Challenges',
        subsections: [
          {
            title: 'High resource consumption for each crisis exercise',
            paragraphs: [
              `Preparing and implementing a single crisis simulation could require up to 40 hours of work for role-playing exercises. Manual scenario design, injection management, and logistics left little room for coaching and strategic guidance. "We were losing focus on our real added value because we were spending so much time organizing the exercise itself," explains Margaux Messerli.`
            ]
          },
          {
            title: 'Uneven preparedness across representations',
            paragraphs: [
              `While all Swiss representations must organize a crisis exercise once a year, their level of maturity varies considerably. Some had very little experience in crisis management and needed direct support to plan or carry out a simulation, while others faced real incidents more frequently. This disparity complicated the FDFA's mission to ensure consistent readiness.`
            ]
          },
          {
            title: 'Need for greater realism and scalability',
            paragraphs: [
              `Paper-based scenarios and manual injections limited the operational intensity of training. "We wanted exercises that really felt like a crisis, where staff received emails and text messages just like in real life," says Margaux Messerli. That realism was essential for adoption, yet had to remain easy to deploy at scale.`
            ]
          },
          {
            title: 'Increased expectations for communication in a real-time world',
            paragraphs: [
              `"Twenty years ago, there was not the same urgency to communicate instantly. Today, the community expects updates right away, even when verified facts are scarce," explains Margaux Messerli. This demand for immediacy adds pressure to crisis response, which must be both responsive and coordinated.`
            ]
          },
          {
            title: 'Budget constraints and pressure to optimize resources',
            paragraphs: [
              `As global crises multiply, the FDFA must do more with less without compromising quality. "We are being asked to reduce the resources we invest, not only at headquarters but also in the field. If one person spends 40 hours on an exercise instead of two, that is 38 hours lost for other essential tasks," says Margaux Messerli.`
            ]
          }
        ]
      },
      {
        type: 'section',
        title: "Why did FDFA choose Filigran's OpenAEV",
        paragraphs: [
          `OpenAEV is Filigran's Adversarial Exposure Validation platform that enables organizations to simulate real-life attack scenarios based on technical, physical, and business risks. By leveraging prioritized threat intelligence, MITRE ATT&CK frameworks, and risk-based employee profiling, OpenAEV uncovers the most probable attack paths before they materialize.`
        ],
        subsections: [
          {
            title: 'Seamless integration into existing workflows',
            paragraphs: [
              `OpenAEV manages crisis exercises by sending injects via Outlook and SMS—the same channels the FDFA already uses. This avoided the need to introduce a new interface or train teams on an external platform. The familiar format enhanced realism and helped staff respond instinctively, just as they would during a real event.`
            ]
          },
          {
            title: 'Flexible licensing and unlimited use',
            paragraphs: [
              `To scale crisis training across its diplomatic network, the FDFA needed a solution without licensing bottlenecks. OpenAEV offered unlimited users, messages, and scenarios, enabling both local autonomy and centralized coordination. "We needed complete freedom to create and duplicate exercises, with no restriction on participants," Margaux confirms.`
            ]
          },
          {
            title: 'Fast onboarding and autonomous scenario management',
            paragraphs: [
              `Thanks to its intuitive design, new facilitators grasped the basics of OpenAEV rapidly. "After only 30 minutes of explanation, most people understood how to use the platform," Margaux appreciates. The FDFA quickly moved from basic testing to full-scale use, including autonomous deployments by local teams.`
            ]
          },
          {
            title: 'A responsive and reliable partner',
            paragraphs: [
              `The FDFA found a strategic partner in Filigran. The approachability of the support team, always open to feedback, convinced the Crisis Management Center of the platform's long-term relevance. "We appreciated Filigran's responsiveness and the fact that the platform continues to evolve. The flexibility offered by OpenAEV, which allows us to grow with the tool, has been a significant advantage," concludes Margaux Messerli.`
            ]
          }
        ]
      },
      {
        type: 'image',
        src: '/customer-stories/swiss-fdfa/portrait.webp',
        alt: 'Portrait of Margaux Messerli, Swiss FDFA',
        caption: 'Margaux Messerli, Crisis Manager at the Swiss FDFA'
      },
      {
        type: 'section',
        title: 'Adoption',
        paragraphs: [
          `The FDFA began testing OpenAEV in early 2023 as part of a one-year pilot. Implementation was quick and the platform's intuitive interface required minimal training. The first exercise took place in February 2024, followed by a high-stakes simulation with the Swiss embassy in Paris ahead of the 2024 Olympic Games.`,
          `During the pilot, access was limited to selected representations so the Crisis Management Center could closely monitor usage and iterate. Filigran provided responsive support throughout. "We always got fast, clear answers from the Filigran team, even when our needs were a bit outside the usual scope," notes Margaux Messerli.`,
          `While a few bugs affected email injections early on, Filigran resolved them quickly, including one critical fix just hours before an exercise. By mid-year, the FDFA allowed autonomous deployments, and the platform officially entered full deployment in April 2025.`
        ]
      },
      {
        type: 'quote',
        text: 'After only 30 minutes of explanation, most people understood how to use the platform.',
        author: 'Margaux Messerli',
        role: 'Swiss FDFA, Crisis Manager'
      },
      {
        type: 'section',
        title: 'How Filigran helps the FDFA',
        subsections: [
          {
            title: 'Delivering measurable time savings',
            paragraphs: [
              `OpenAEV enabled the FDFA to cut crisis exercise preparation time by 80%. What used to require up to 40 hours now takes just one to two hours per representation, freeing up resources at both local and central levels.`
            ]
          },
          {
            title: 'Multiplying training opportunities worldwide',
            paragraphs: [
              `The FDFA doubled the number of crisis exercises conducted over six months, allowing more teams to test their response plans and develop reflexes under pressure—without increasing workload.`
            ]
          },
          {
            title: 'Improving the quality and depth of crisis coaching',
            paragraphs: [
              `OpenAEV freed crisis managers from manually executing scenarios so they can focus on supporting teams in decision-making, coordination, and communication under pressure.`
            ]
          },
          {
            title: 'Fostering a proactive security culture',
            paragraphs: [
              `Using OpenAEV changed mindsets within the FDFA. Representations that had completed their annual exercise began requesting additional simulations on their own initiative. This shift from obligation to commitment showed that the platform made training both accessible and relevant.`
            ]
          },
          {
            title: 'Modernizing operations with a scalable, trusted platform',
            paragraphs: [
              `OpenAEV helped the FDFA align crisis training with its broader digital transformation strategy focused on cybersecurity, sovereign technology, and agile public services. The platform's open architecture and European-compliant workflows made it an ideal fit, enabling secure, decentralized coordination across 170+ missions without adding complexity.`
            ]
          }
        ]
      },
      {
        type: 'section',
        title: 'The road ahead',
        paragraphs: [
          `With the official rollout of OpenAEV across its entire global network, the FDFA is entering a new phase in its crisis readiness strategy. "Representations can now simply fill out a form and receive their exercise configuration. There is no need for direct coordination unless something goes wrong," explains Margaux Messerli.`,
          `The Crisis Management Center can now scale its efforts efficiently while maintaining oversight. Thanks to the time saved, the team is expanding its catalog of scenarios from two to eight autonomous templates by the end of the year and is designing multi-representation exercises to promote inter-embassy collaboration. The FDFA is also exploring synergies with other federal departments and closely following Filigran's roadmap on AI-powered injects and advanced dashboards.`
        ]
      }
    ],
    relatedResources: [
      {
        label: 'Customer Story',
        title: 'From 5 Days to A Few Seconds: ASRG Scaled Automotive Threat Management with OpenCTI',
        description:
          'Discover how ASRG collaborated with Filigran and leveraged OpenCTI to build a trusted, community-driven threat intelligence platform for the automotive industry.',
        href: '/customer-stories/asrg-scaled-automotive-threat-management-with-opencti'
      },
      {
        label: 'Customer Story',
        title: 'How a Leading Luxury Manufacturer Strengthens Its Cyber Defense with OpenCTI',
        description:
          'Learn how a major French luxury goods manufacturer built a high-performance internal CERT and threat intelligence capability using OpenCTI.',
        href: '/customer-stories/how-a-leading-luxury-manufacturer-strengthens-its-cyber-defense-with-opencti'
      },
      {
        label: 'Customer Story',
        title: 'How Rivian Achieves a 95% Reduction in Response Time with OpenCTI',
        description:
          'Explore how Rivian leveraged OpenCTI to tackle data silos, improve threat detection, and scale their cybersecurity operations effortlessly.',
        href: '/customer-stories/how-rivian-achieves-a-95-reduction-in-response-time-with-opencti'
      }
    ]
  },
  {
    slug: 'intrinsecs-enhanced-cybersecurity-operations-with-opencti',
    path: '/customer-stories/intrinsecs-enhanced-cybersecurity-operations-with-opencti',
    client: 'Intrinsec',
    heroLabel: 'Customer Story',
    title: "Intrinsec's Enhanced Cybersecurity Operations with OpenCTI",
    summary:
      'Explore the transformative journey of Intrinsec in optimizing their threat intelligence offering and practices through the strategic adoption of OpenCTI.',
    heroImage: '/customer-stories/intrinsec/hero.jpg',
    heroImageAlt: 'Modern office with cybersecurity professionals collaborating',
    cardImage: '/customer-stories/intrinsec/hero.jpg',
    logo: '/customer-stories/intrinsec/logo.webp',
    stats: [
      { value: '-65%', label: 'investigation time reduced' },
      { value: '+3 million', label: 'entries added to the knowledge base' },
      { value: '-25%', label: 'estimated reduction in IoC redundancy' }
    ],
    info: [
      { label: 'Industry', value: 'Computer and network security' },
      { label: 'HQ', value: 'France' },
      { label: 'Company size', value: '200-500 employees' },
      { label: 'Products used', value: 'OpenCTI', href: '/platforms/opencti' }
    ],
    pdfUrl: '/resources/pdfs/filigran_intrinsec-customer-story_0724.pdf',
    industry: 'Computer and network security',
    location: 'France',
    size: '200-500 employees',
    products: [
      { name: 'OpenCTI', href: '/platforms/opencti' }
    ],
    useCases: ['Threat intelligence services', 'Digital risk protection', 'External attack surface management'],
    blocks: [
      {
        type: 'section',
        title: 'About Intrinsec',
        paragraphs: [
          `For 30 years, Intrinsec has established itself as a reliable partner and reference in protecting against diverse cyber threats. Leveraging extensive comprehension of cybersecurity challenges, Intrinsec actively helps organizations preserve their business by proactively meeting cybersecurity requirements.`,
          `With broad cybersecurity coverage, Intrinsec is a leading pure player with recognized expertise in consulting, cyber assessments, and operational security services (anticipation, detection, and response). Cyber threat intelligence has been a strategic development focus since 2015: the company now provides digital risk protection, threat intelligence, and external attack surface management services—delivered standalone or as part of a Fusion Center model.`,
          `Knowledge generated from these activities, as well as threat intelligence research, also led Intrinsec to release its own intelligence on external threats through its CTI feeds.`
        ]
      },
      {
        type: 'section',
        title: 'Context',
        paragraphs: [
          `Intrinsec integrated OpenCTI into its SOC service offering to monitor attacks on clients and centralize data. For each type of indicator of compromise, detection alerts were configured to identify their presence in SIEMs, making threat sharing a pivotal component across the client base.`,
          `Over time, Intrinsec observed a shift in customer expectations. Initially, clients focused on the fastest possible threat detection. As they matured, they began requesting deeper context on the nature of threats, signaling a need for more nuanced intelligence and sharing models.`
        ]
      },
      {
        type: 'section',
        title: 'Challenges',
        paragraphs: [
          `As cybersecurity threats evolved, Intrinsec identified several key areas needing enhancement within its threat intelligence operations.`
        ],
        subsections: [
          {
            title: 'Responsiveness and performance issues',
            paragraphs: [
              `Managing large data volumes required a solution capable of efficient handling, especially for events populated with significant numbers of IoCs and reports. Intrinsec needed to ensure swift responsiveness to a constantly changing threat landscape.`
            ]
          },
          {
            title: 'Simplification amidst complexity',
            paragraphs: [
              `Operating a diverse technology stack while maintaining specialized human expertise posed challenges. Intrinsec aimed to streamline operational maintenance, preserve institutional knowledge, and keep the platform accessible for organizations without dedicated resources.`
            ]
          },
          {
            title: 'Demand for a comprehensive intelligence platform',
            paragraphs: [
              `Intrinsec wanted a platform that could consolidate external threats—from IoCs to attacker groups—and deliver a unified, comprehensive view of intelligence that would make cybersecurity threats more actionable.`
            ]
          }
        ]
      },
      {
        type: 'section',
        title: 'Why OpenCTI?',
        paragraphs: [
          `OpenCTI stood out as the ideal solution for Intrinsec's evolving needs thanks to several advanced capabilities.`
        ],
        subsections: [
          {
            title: 'Visualization',
            paragraphs: [
              `Dynamic dashboards offer expansive views of the threat landscape, from STIX objects to industries, geographies, and victim profiles. These dashboards simplify reporting and help communicate intelligence to diverse audiences.`
            ]
          },
          {
            title: 'Interoperability',
            paragraphs: [
              `OpenCTI's design enables seamless integration with third-party systems. Native connectors, such as CTI Feeds and Splunk, facilitate efficient data exchange and bi-directional integration with central SIEM environments.`
            ]
          },
          {
            title: 'Design',
            paragraphs: [
              `The platform's user interface is intuitive and user-friendly, enhancing analyst experience and operational efficiency.`
            ]
          },
          {
            title: 'Automation',
            paragraphs: [
              `When IoCs or cases are integrated with related STIX objects, they automatically connect with other relevant elements. This interconnectedness offers a comprehensive view of the threat landscape and improves the effectiveness of threat analysis and response.`
            ]
          },
          {
            title: 'Adherence to the STIX standard',
            paragraphs: [
              `The systematic application of the STIX standard in OpenCTI streamlines data capitalization and makes intelligence more modular. OpenCTI effectively manages relationships across threat actors, campaigns, and IoCs, which is critical for high-fidelity intelligence.`
            ]
          },
          {
            title: 'Incident response in case management',
            paragraphs: [
              `OpenCTI offers a comprehensive approach to managing incidents, allowing for in-depth analysis and effective response strategies. Sophisticated correlation capabilities streamline complex threat analysis without requiring additional scripting, enhancing the efficiency of cybersecurity operations.`
            ]
          }
        ]
      },
      {
        type: 'section',
        title: 'Adoption',
        subsections: [
          {
            title: 'SOC team',
            paragraphs: [
              `Intrinsec's SOC has been significantly empowered by OpenCTI. The external threat knowledge base, updated daily, provides analysts with a rich resource to accelerate qualification and investigations when abnormal behaviors occur in client environments.`
            ]
          },
          {
            title: 'CTI team',
            paragraphs: [
              `OpenCTI has fundamentally shaped Intrinsec's CTI operations. As the team expanded, the platform remained the tool of choice, enabling continuous refinement of processes and customization to evolving needs. Intrinsec also promotes OpenCTI to customers seeking their own TIP, offering best practices in architecture, use-case construction, and threat structuring.`
            ]
          }
        ],
        paragraphs: [
          `As a pioneer of the solution, Intrinsec leverages deep knowledge of both the technological environment and diverse business functionalities to provide high value-added support to its customers.`
        ]
      },
      {
        type: 'section',
        title: 'Key results',
        subsections: [
          {
            title: 'Investigation time reduced by up to 65%',
            paragraphs: [
              `Intrinsec realized a remarkable efficiency boost, with investigation times reduced by half to two-thirds. Faster responses and more efficient analysis now support critical threat scenarios.`
            ]
          },
          {
            title: 'Knowledge base expanded to over 3 million entries',
            paragraphs: [
              `The substantial expansion of the knowledge base underscores the breadth of Intrinsec's intelligence repository. This growth strengthens threat analysis and equips teams with richer insights.`
            ]
          },
          {
            title: 'Reduction in IoC redundancy by 25%',
            paragraphs: [
              `Centralized data aggregation and structuring allow Intrinsec to detect redundant indicators more effectively, improving the precision of its intelligence process.`
            ]
          }
        ]
      },
      {
        type: 'section',
        title: 'Future outlook',
        paragraphs: [
          `Intrinsec's journey underscores the need to adopt tools that are responsive to current demands and capable of anticipating future challenges. OpenCTI has proven to be a significant asset, providing the versatility and depth required to navigate today's complex cyber landscape.`,
          `Looking ahead, Intrinsec expects continued evolution of OpenCTI—particularly around new data streams, import connectors, and correlations across different technical events (intrusion sets, victimology, IoCs, TTPs, YARA rules). Generative AI for reports and cross-event linkage is becoming a growing need to make threat knowledge directly actionable for both technical and strategic audiences.`
        ]
      }
    ],
    relatedResources: [
      {
        label: 'Customer Story',
        title: 'How a Leading Luxury Manufacturer Strengthens Its Cyber Defense with OpenCTI',
        description:
          'Learn how a major French luxury goods manufacturer built a high-performance internal CERT and threat intelligence capability using OpenCTI.',
        href: '/customer-stories/how-a-leading-luxury-manufacturer-strengthens-its-cyber-defense-with-opencti'
      },
      {
        label: 'Customer Story',
        title: 'How Rivian Achieves a 95% Reduction in Response Time with OpenCTI',
        description:
          'Explore how Rivian leveraged OpenCTI to tackle data silos, improve threat detection, and scale their cybersecurity operations effortlessly.',
        href: '/customer-stories/how-rivian-achieves-a-95-reduction-in-response-time-with-opencti'
      },
      {
        label: 'Customer Story',
        title: "How Switzerland's FDFA Trains Smarter with OpenAEV",
        description:
          'To streamline simulations and reduce workload, the Swiss FDFA chose OpenAEV by Filigran, enhancing operational readiness across 170 global sites, including embassies and consulates.',
        href: '/customer-stories/how-switzerlands-fdfa-trains-smarter-with-openaev'
      }
    ]
  }
];

export const getCustomerStoryBySlug = (slug: string) =>
  customerStories.find((story) => story.slug === slug);






