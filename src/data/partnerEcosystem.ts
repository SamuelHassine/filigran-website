import acknowledgeLogo from "@/assets/partners/logos/acknowledge.webp";
import activiumLogo from "@/assets/partners/logos/activium.png";
import aegis9Logo from "@/assets/partners/logos/aegis9.png";
import airbusLogo from "@/assets/partners/logos/airbus.webp";
import apiusLogo from "@/assets/partners/logos/apius.svg";
import armatureLogo from "@/assets/partners/logos/armature.webp";
import btFranceLogo from "@/assets/partners/logos/bt-france.webp";
import c3saLogo from "@/assets/partners/logos/c3sa.svg";
import capgeminiLogo from "@/assets/partners/logos/capgemini.svg";
import constellaLogo from "@/assets/partners/logos/constella.svg";
import crowdstrikeLogo from "@/assets/partners/logos/crowdstrike.svg";
import cyberixLogo from "@/assets/partners/logos/cyberix.png";
import cybermercLogo from "@/assets/partners/logos/cybermerc.webp";
import dreamlabLogo from "@/assets/partners/logos/dreamlab.svg";
import dustinLogo from "@/assets/partners/logos/dustin.webp";
import eplusLogo from "@/assets/partners/logos/eplus.webp";
import esetLogo from "@/assets/partners/logos/eset.webp";
import evidenLogo from "@/assets/partners/logos/eviden.png";
import feddataLogo from "@/assets/partners/logos/feddata.webp";
import gartnerLogo from "@/assets/partners/logos/gartner.svg";
import harfanglabLogo from "@/assets/partners/logos/harfanglab.webp";
import icfLogo from "@/assets/partners/logos/icf.png";
import intrinsecLogo from "@/assets/partners/logos/intrinsec.webp";
import linearstackLogo from "@/assets/partners/logos/linearstack.webp";
import maltegoLogo from "@/assets/partners/logos/maltego.webp";
import mandiantLogo from "@/assets/partners/logos/mandiant.webp";
import nvisoLogo from "@/assets/partners/logos/nviso.svg";
import odinLogo from "@/assets/partners/logos/odin.webp";
import orangeCyberdefenseLogo from "@/assets/partners/logos/orange-cyberdefense.webp";
import ownLogo from "@/assets/partners/logos/own.png";
import recordedFutureLogo from "@/assets/partners/logos/recorded-future.svg";
import reversinglabsLogo from "@/assets/partners/logos/reversinglabs.svg";
import sccLogo from "@/assets/partners/logos/scc.webp";
import secutecLogo from "@/assets/partners/logos/secutec.svg";
import sekoiaLogo from "@/assets/partners/logos/sekoia.svg";
import sentineloneLogo from "@/assets/partners/logos/sentinelone.svg";
import shiLogo from "@/assets/partners/logos/shi.webp";
import silobreakerLogo from "@/assets/partners/logos/silobreaker.webp";
import sixgenLogo from "@/assets/partners/logos/sixgen.webp";
import softcatLogo from "@/assets/partners/logos/softcat.webp";
import softwareoneLogo from "@/assets/partners/logos/softwareone.svg";
import sopraSteriaLogo from "@/assets/partners/logos/sopra-steria.svg";
import splunkLogo from "@/assets/partners/logos/splunk.svg";
import suttonHouseLogo from "@/assets/partners/logos/suttonhouse.webp";
import taniumLogo from "@/assets/partners/logos/tanium.webp";
import teamt5Logo from "@/assets/partners/logos/teamt5.svg";
import tenableLogo from "@/assets/partners/logos/tenable.webp";
import vcuraLogo from "@/assets/partners/logos/vcura.webp";
import wavestoneLogo from "@/assets/partners/logos/wavestone.webp";
import zendataLogo from "@/assets/partners/logos/zendata.png";

export interface PartnerProfile {
  name: string;
  regions?: string[];
  description: string[];
  logo: string;
  logoAlt: string;
  website?: string;
}

export const msspPartners: PartnerProfile[] = [
  {
    name: "Apius",
    regions: ["Poland"],
    description: [
      "Apius Technologies S.A. is a leading Polish cybersecurity company founded in 2011. It delivers innovative solutions that protect digital infrastructure and ensure business continuity in a changing digital world. Its expert team combines deep technical knowledge with passion, developing technologies that help organizations operate faster, safer, and with greater confidence.",
    ],
    logo: apiusLogo,
    logoAlt: "Apius logo",
    website: "https://apius.pl/en/",
  },
  {
    name: "Intrinsec",
    regions: ["France"],
    description: [
      "Intrinsec's offerings combine cutting-edge cybersecurity know-how, thanks to the diverse expertise of its 200-strong workforce, with technological approaches both on the market and developed in-house.",
      "From very small businesses to international groups and institutions, the team guides customers step-by-step in understanding cyber risks with tailor-made offers contextualized to each company's needs.",
    ],
    logo: intrinsecLogo,
    logoAlt: "Intrinsec logo",
    website: "https://www.intrinsec.com/en/",
  },
  {
    name: "LinearStack",
    regions: ["New Zealand"],
    description: [
      "LinearStack is an award-winning, intelligence-led cybersecurity firm specializing in managed threat detection and response that delivers 24x7 protection and actionable insights to safeguard modern digital environments.",
      "The team of engineers, analysts, and strategists lives and breathes defense, delivering high-touch managed services to modern security programs.",
    ],
    logo: linearstackLogo,
    logoAlt: "LinearStack logo",
    website: "https://www.linearstack.com/",
  },
  {
    name: "Orange Cyberdefense",
    regions: ["France", "Spain", "Italy"],
    description: [
      "Orange Cyberdefense is a leading security services provider offering comprehensive cybersecurity solutions. Services include threat detection, managed services, consulting, and training to ensure robust protection against global cyber threats.",
    ],
    logo: orangeCyberdefenseLogo,
    logoAlt: "Orange Cyberdefense logo",
    website: "https://www.orangecyberdefense.com/",
  },
  {
    name: "Own",
    regions: ["France"],
    description: [
      "OWN is a pure player in cybersecurity, combining in-depth knowledge of organizational challenges with ongoing awareness of the threats they face. The team provides tailor-made, informed cyber support aligned with each customer's needs.",
      "Technical, functional, and legal experts design relevant responses that give customers the controlled cyber environment required for their business.",
    ],
    logo: ownLogo,
    logoAlt: "Own logo",
    website: "https://www.own.security/en",
  },
  {
    name: "Sopra Steria",
    regions: ["France"],
    description: [
      "Sopra Steria is a major European technology leader recognized for consulting, digital services, and software publishing. The firm helps clients drive digital transformation and achieve tangible, sustainable benefits.",
    ],
    logo: sopraSteriaLogo,
    logoAlt: "Sopra Steria logo",
    website: "https://www.soprasteria.fr/accueil",
  },
  {
    name: "ZENDATA Cybersecurity",
    regions: ["Switzerland", "UAE", "Bahrain"],
    description: [
      "ZENDATA operates 24/7 security operations centers across Switzerland, the UAE, and Bahrain and delivers more than 70 managed services. The team also provides customized managed detection and response solutions for industrial environments, including OT, IoT, and IoMT deployments.",
    ],
    logo: zendataLogo,
    logoAlt: "ZENDATA logo",
    website: "https://zendata.security/",
  },
];

export const technologyPartners: PartnerProfile[] = [
  {
    name: "HarfangLab",
    description: [
      "HarfangLab EDR is an advanced endpoint detection and response solution that combines proactive and reactive protection against cyber attacks. The platform is ANSSI CSPN certified, ensuring reliability and compliance with top security standards.",
    ],
    logo: harfanglabLogo,
    logoAlt: "HarfangLab logo",
    website: "https://www.harfanglab.io/",
  },
  {
    name: "Recorded Future",
    description: [
      "Recorded Future operates the world's largest threat intelligence company. The Recorded Future Intelligence Cloud provides end-to-end intelligence across adversaries, infrastructure, and targets.",
    ],
    logo: recordedFutureLogo,
    logoAlt: "Recorded Future logo",
    website: "https://www.recordedfuture.com/",
  },
  {
    name: "Sekoia.io",
    description: [
      "Sekoia.io is a European cybersecurity publisher that develops modern technologies to neutralize cyber threats for large corporate clients and cybersecurity service providers.",
    ],
    logo: sekoiaLogo,
    logoAlt: "Sekoia.io logo",
    website: "https://www.sekoia.io/",
  },
  {
    name: "Splunk",
    description: [
      "Splunk builds a safer digital world with a unified security and observability platform that helps organizations stay securely operational amidst digital disruptions.",
    ],
    logo: splunkLogo,
    logoAlt: "Splunk logo",
    website: "https://www.splunk.com/",
  },
  {
    name: "Tanium",
    description: [
      "Tanium, the industry's first provider of converged endpoint management, unifies tools, workflows, and teams to transform how organizations manage security and IT operations.",
    ],
    logo: taniumLogo,
    logoAlt: "Tanium logo",
    website: "https://www.tanium.com/",
  },
  {
    name: "TeamT5",
    description: [
      "TeamT5 is a Taiwan-based leader in APAC threat intelligence and a two-time Frost & Sullivan award winner. The company serves global governments and enterprises with unique insights into regional APTs.",
    ],
    logo: teamt5Logo,
    logoAlt: "TeamT5 logo",
    website: "https://www.teamt5.com/",
  },
  {
    name: "Tenable",
    description: [
      "Tenable empowers more than 44,000 organizations worldwide to understand and reduce cyber risk. Context-driven analytics deliver comprehensive visibility across attack surfaces to keep businesses ahead of threats.",
    ],
    logo: tenableLogo,
    logoAlt: "Tenable logo",
    website: "https://www.tenable.com/",
  },
  {
    name: "Mandiant",
    description: [
      "Mandiant is a global leader in threat intelligence trusted by enterprises, governments, and law enforcement. Its cyber defense solutions span consulting, incident response, and attack surface management.",
    ],
    logo: mandiantLogo,
    logoAlt: "Mandiant logo",
    website: "https://www.mandiant.com/",
  },
  {
    name: "CrowdStrike",
    description: [
      "CrowdStrike delivers a cloud-native platform that protects endpoints, cloud workloads, identities, and data. The company redefined modern security for enterprises worldwide.",
    ],
    logo: crowdstrikeLogo,
    logoAlt: "CrowdStrike logo",
    website: "https://www.crowdstrike.com/",
  },
  {
    name: "Reversing Labs",
    description: [
      "ReversingLabs specializes in threat intelligence and malware detection. Its advanced analytics help defenders stop sophisticated cyber threats and protect data integrity.",
    ],
    logo: reversinglabsLogo,
    logoAlt: "ReversingLabs logo",
    website: "https://www.reversinglabs.com/",
  },
  {
    name: "Airbus Defence and Space Cyber",
    description: [
      "Airbus Defence and Space Cyber designs, develops, integrates, and deploys tailored cybersecurity solutions for defense, governmental, and institutional customers across Europe.",
    ],
    logo: airbusLogo,
    logoAlt: "Airbus Defence and Space Cyber logo",
    website: "https://cyber.airbus.com/",
  },
  {
    name: "SentinelOne",
    description: [
      "SentinelOne provides autonomous security solutions for endpoint, cloud, and identity environments. Founded by cybersecurity and defense experts, the platform brings AI-powered protection to modern enterprises.",
    ],
    logo: sentineloneLogo,
    logoAlt: "SentinelOne logo",
    website: "https://www.sentinelone.com/",
  },
  {
    name: "Silobreaker",
    description: [
      "Silobreaker delivers security and threat intelligence technology that surfaces powerful insights on emerging risks and opportunities in near real time.",
    ],
    logo: silobreakerLogo,
    logoAlt: "Silobreaker logo",
    website: "https://www.silobreaker.com/",
  },
  {
    name: "Maltego",
    description: [
      "Maltego powers complex cyber investigations with the world's most widely used all-in-one intelligence platform, enabling more than one million investigations since 2008.",
    ],
    logo: maltegoLogo,
    logoAlt: "Maltego logo",
    website: "https://www.maltego.com/",
  },
  {
    name: "ESET",
    description: [
      "ESET is a pioneering European cybersecurity company that has driven digital security innovation for more than three decades. The independent firm focuses on protecting both home and business environments.",
    ],
    logo: esetLogo,
    logoAlt: "ESET logo",
    website: "https://www.eset.com/",
  },
];

export const solutionPartners: PartnerProfile[] = [
  {
    name: "ACKnowledge",
    regions: ["France"],
    description: [
      "ACKnowledge specializes in modernizing IT infrastructures around three pillars: cybersecurity, cloud, and DevSecOps. The team delivers the technological, human, and organizational solutions customers need to execute complex projects.",
      "ACKnowledge est une societe de service specialisee dans la modernisation des infrastructures IT. Notre activite s'articule autour de la cybersecurite, du cloud et des problematiques DevSecOps afin de garantir la reussite des projets critiques.",
    ],
    logo: acknowledgeLogo,
    logoAlt: "ACKnowledge logo",
    website: "http://www.acknowledge.fr/",
  },
  {
    name: "Activium-ID",
    regions: ["France"],
    description: [
      "Activium-ID supports companies across the management, evolution, security, and business continuity of their IT assets. The firm acts as a strategic partner that keeps infrastructures competitive in an era of mobile and digital work.",
    ],
    logo: activiumLogo,
    logoAlt: "Activium-ID logo",
    website: "https://www.activium-id.com/a-propos",
  },
  {
    name: "Aegis9",
    regions: ["Australia"],
    description: [
      "Aegis9 is a 100% Australian-owned cybersecurity consultancy that provides tailored solutions for government agencies, multinational enterprises, commercial businesses, nonprofits, and the community sector.",
      "The team has deep experience building solutions that meet Australian Government cybersecurity requirements while accounting for the global threat landscape.",
    ],
    logo: aegis9Logo,
    logoAlt: "Aegis9 logo",
    website: "http://www.aegis9.com.au/",
  },
  {
    name: "Armature Systems",
    regions: ["United States"],
    description: [
      "Armature Systems designs and deploys enterprise-grade cybersecurity and network infrastructure. The company also provides managed and MDR services that protect customer environments 24/7/365.",
    ],
    logo: armatureLogo,
    logoAlt: "Armature Systems logo",
    website: "https://www.armaturesystems.com/homepage/",
  },
  {
    name: "BT France",
    regions: ["France"],
    description: [
      "BT France, part of the global BT Group, is a leader in digital transformation and cybersecurity solutions. The team enhances connectivity, secures networks, and drives innovation through advanced technology and expert services.",
    ],
    logo: btFranceLogo,
    logoAlt: "BT France logo",
    website: "https://www.globalservices.bt.com/fr",
  },
  {
    name: "C3SA",
    regions: ["Canada"],
    description: [
      "C3SA Cyber Security & Audit delivers professional and managed security services to government, industry, and nonprofit organizations.",
      "Rooted in national security and critical infrastructure protection, C3SA operationalizes defensible and resilient architectures across highly sensitive, mission-critical environments in Canada and abroad.",
    ],
    logo: c3saLogo,
    logoAlt: "C3SA logo",
    website: "https://c3sa.com/",
  },
  {
    name: "Constella Security Japan",
    regions: ["Japan"],
    description: [
      "Constella Security Japan, formerly Terilogy Works Inc., specializes in cybersecurity and threat intelligence services that include darknet monitoring, threat hunting, global threat analysis, and cognitive warfare assessments for corporations and government agencies.",
      "The company contributes to Japan's national security by delivering predictive, detective, and responsive capabilities tailored to high-stakes missions.",
    ],
    logo: constellaLogo,
    logoAlt: "Constella Security Japan logo",
    website: "https://constella-sec.jp/",
  },
  {
    name: "CYBERIX",
    regions: ["Cameroon"],
    description: [
      "CYBERIX provides cybersecurity consulting, security audits, penetration testing, risk management, computer forensics, training, software development, and data recovery services.",
    ],
    logo: cyberixLogo,
    logoAlt: "CYBERIX logo",
    website: "https://cyberix.fr/",
  },
  {
    name: "Cybermerc",
    regions: ["Australia"],
    description: [
      "Cybermerc specializes in advanced cybersecurity solutions that help organizations safeguard their digital environments against evolving threats, pairing innovation with deep operational expertise.",
    ],
    logo: cybermercLogo,
    logoAlt: "Cybermerc logo",
    website: "https://www.cybermerc.com/",
  },
  {
    name: "Dustin Group",
    regions: ["Norway", "Netherlands"],
    description: [
      "Dustin is a leading online IT partner in the Nordics and Benelux. The company delivers the right IT solution at the right time with a pragmatic approach that serves SMBs, large enterprises, the public sector, and consumers.",
    ],
    logo: dustinLogo,
    logoAlt: "Dustin Group logo",
    website: "http://www.dustingroup.com/en",
  },
  {
    name: "ePlus",
    regions: ["United States"],
    description: [
      "ePlus is a services-led, customer-first provider that helps organizations secure, modernize, optimize, and scale every aspect of their IT infrastructure.",
      "For more than 30 years, ePlus has supported over 4,300 global customers across complex IT, regulatory, and workforce environments.",
    ],
    logo: eplusLogo,
    logoAlt: "ePlus logo",
    website: "https://eplus.com/",
  },
  {
    name: "FedData",
    regions: ["United States"],
    description: [
      "FedData pairs decades of government and private-sector experience with unmatched knowledge of mission-critical IT architectures. That expertise helps partners optimize infrastructure, reduce costs, build new capabilities, and secure sensitive networks.",
    ],
    logo: feddataLogo,
    logoAlt: "FedData logo",
    website: "https://feddata.com/",
  },
  {
    name: "ICF Next",
    regions: ["Belgium"],
    description: [
      "ICF Next combines infrastructure security and resilience expertise to protect mission-critical assets. The team assesses vulnerabilities, analyzes cyber and physical risks, and develops defenses that safeguard essential operations and national security.",
    ],
    logo: icfLogo,
    logoAlt: "ICF Next logo",
    website: "https://www.icf.com/next",
  },
  {
    name: "LinearStack",
    regions: ["New Zealand"],
    description: [
      "LinearStack is an award-winning, intelligence-led cybersecurity firm specializing in managed threat detection and response that delivers 24x7 protection and actionable insights.",
      "Its engineers, analysts, and strategists operate as an extension of customer teams to deliver continuous defense.",
    ],
    logo: linearstackLogo,
    logoAlt: "LinearStack logo",
    website: "https://www.linearstack.com/",
  },
  {
    name: "NVISO",
    regions: ["Belgium", "Germany", "Austria", "Greece"],
    description: [
      "NVISO's mission is to safeguard the foundations of European society from cyber attacks, pairing regional expertise with deep technical capabilities.",
    ],
    logo: nvisoLogo,
    logoAlt: "NVISO logo",
    website: "https://www.nviso.eu/",
  },
  {
    name: "Odin Cyber Security",
    regions: ["Norway"],
    description: [
      "Odin Cyber Security leverages 40+ years of experience to help organizations stay ahead of fast-changing threats. The team connects global suppliers with Nordic markets and identifies the right solutions for each customer.",
    ],
    logo: odinLogo,
    logoAlt: "Odin Cyber Security logo",
    website: "https://odincybersecurity.no/",
  },
  {
    name: "SCC France",
    regions: ["France"],
    description: [
      "SCC France keeps business and public services running smoothly while improving operational efficiency, agility, and modernization.",
      "SCC s'appuie sur un maillage exceptionnel des plus grands acteurs de l'IT pour proposer des solutions innovantes, fiables et competitives, avec des experts aux plus hauts niveaux de certification.",
    ],
    logo: sccLogo,
    logoAlt: "SCC France logo",
    website: "https://france.scc.com/",
  },
  {
    name: "Secutec",
    regions: ["EMEA"],
    description: [
      "Founded in 2005, Secutec delivers unparalleled cybersecurity, intelligence, and incident response services. The team focuses on automated solutions that integrate seamlessly with existing technology stacks.",
    ],
    logo: secutecLogo,
    logoAlt: "Secutec logo",
    website: "http://secutec.com/",
  },
  {
    name: "SHI UK",
    regions: ["United Kingdom"],
    description: [
      "SHI International provides IT products and services spanning consulting, program assistance, technology maintenance, reporting, tracking, design, and implementation.",
      "Comprehensive lifecycle services cover warehousing, configuration, mobility, asset management, and warranty offerings for enterprise, government, education, and healthcare customers.",
    ],
    logo: shiLogo,
    logoAlt: "SHI UK logo",
    website: "https://www.uk.shi.com/",
  },
  {
    name: "SIXGEN",
    regions: ["United States"],
    description: [
      "SIXGEN delivers agile, mission-ready cybersecurity solutions for government, intelligence, and critical infrastructure organizations. Its experts uncover vulnerabilities, protect vital systems, and ensure operational superiority against advanced adversaries.",
    ],
    logo: sixgenLogo,
    logoAlt: "SIXGEN logo",
    website: "https://www.sixgen.io/",
  },
  {
    name: "Softcat",
    regions: ["United Kingdom"],
    description: [
      "Softcat is a leading IT infrastructure provider that advises, designs, implements, and manages technology solutions across software, workplace technology, networking, security, cloud, and data centers.",
    ],
    logo: softcatLogo,
    logoAlt: "Softcat logo",
    website: "http://www.softcat.com/",
  },
  {
    name: "SoftwareOne",
    regions: ["BENELUX", "France"],
    description: [
      "SoftwareOne helps clients maximize IT investments, transform operations with technology, and optimize software and cloud subscriptions. Customers realized more than $1.95B in software savings in 2021 alone.",
      "With teams operating in 60 markets, SoftwareOne brings local knowledge and global supplier relationships to navigate the fast-changing digital supply chain.",
    ],
    logo: softwareoneLogo,
    logoAlt: "SoftwareOne logo",
    website: "https://www.softwareone.com/en",
  },
  {
    name: "Sutton House",
    regions: ["United Kingdom"],
    description: [
      "Sutton House brings together senior academics, scientists, medics, and military leaders to deliver bespoke solutions in complex environments for governments and corporations around the globe.",
    ],
    logo: suttonHouseLogo,
    logoAlt: "Sutton House logo",
    website: "https://www.suttonhouse.com/",
  },
  {
    name: "Vcura",
    regions: ["Canada"],
    description: [
      "Vcura delivers leading IT security, operations, consulting, and support services with a focus on responsibility. The team understands that successful solutions rely on people and processes as much as technology.",
      "North America's largest organizations depend on Vcura to address critical security, compliance, and access needs.",
    ],
    logo: vcuraLogo,
    logoAlt: "Vcura logo",
    website: "https://vcura.com/",
  },
  {
    name: "Wavestone",
    description: [
      "Wavestone is a consulting firm that delivers tailored solutions to enhance business performance. Its experts in strategy, IT transformation, and cybersecurity help organizations thrive in the digital landscape.",
    ],
    logo: wavestoneLogo,
    logoAlt: "Wavestone logo",
    website: "https://www.wavestone.com/en/",
  },
  {
    name: "Eviden",
    description: [
      "Eviden brings together Atos' digital, cloud, big data, and security business lines to become a global leader in data-driven, trusted, and sustainable digital transformation.",
    ],
    logo: evidenLogo,
    logoAlt: "Eviden logo",
    website: "https://eviden.com/",
  },
  {
    name: "Capgemini",
    description: [
      "Capgemini is a global leader in consulting, technology services, and digital transformation. With over five decades of experience, the firm helps companies innovate and manage their digital landscape to drive growth.",
    ],
    logo: capgeminiLogo,
    logoAlt: "Capgemini logo",
    website: "https://www.capgemini.com/",
  },
  {
    name: "Gartner",
    description: [
      "Gartner is a leading research and advisory company that provides insights, advice, and tools for leaders across IT, finance, HR, customer service, and supply chain functions.",
    ],
    logo: gartnerLogo,
    logoAlt: "Gartner logo",
    website: "https://www.gartner.com/en",
  },
  {
    name: "Dreamlab Technologies",
    description: [
      "Dreamlab Technologies specializes in offensive and defensive cybersecurity. The company combines innovative solutions with cutting-edge research to protect digital assets and outpace evolving threats.",
    ],
    logo: dreamlabLogo,
    logoAlt: "Dreamlab Technologies logo",
    website: "https://dreamlab.net/en/",
  },
  {
    name: "Airbus Defence and Space Cyber",
    description: [
      "Airbus Defence and Space Cyber designs and deploys tailored cybersecurity solutions for defense, governmental, and institutional customers, ensuring mission assurance in demanding environments.",
    ],
    logo: airbusLogo,
    logoAlt: "Airbus Defence and Space Cyber logo",
    website: "https://www.cyber.airbus.com/",
  },
];

