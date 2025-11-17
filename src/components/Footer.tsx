import { LinkedinIcon, SlackIcon, TwitterIcon, YoutubeIcon } from "@/components/icons/BrandIcons";
import { Link } from "react-router-dom";
import type { To } from "react-router-dom";
import {
  companyLinks,
  corePlatforms,
  customerExperienceItems,
  ecosystemCommunityHighlight,
  ecosystemPartnershipCategories,
  ecosystemProgramLinks,
  productOfferings,
  resourcesDiscoverColumn,
  resourcesProductsColumn,
  serviceOfferings,
  xtmOneCard,
  xtmSuiteHighlight,
} from "@/data/navigation";
import { CertificationBadges } from "./CertificationBadges";
import { FiligranLogo } from "./FiligranLogo";

export const Footer = () => {
  const shortenEditionLabel = (label: string) =>
    label.replace("OpenCTI", "OCTI").replace("OpenAEV", "OAEV").replace("OpenGRC", "OGRC");

  const platformLinks: FooterItem[] = [
    { label: "XTM Suite", to: xtmSuiteHighlight.link },
    ...corePlatforms.map((platform) => ({ label: platform.name, to: platform.link })),
    { label: xtmOneCard.name, to: xtmOneCard.link },
    { label: "XTM Hub", to: "/platforms/xtm-hub" },
  ];

  const offeringLinks: FooterItem[] = [
    ...productOfferings.map((offering) => ({
      label: shortenEditionLabel(offering.name),
      to: offering.link,
    })),
    ...serviceOfferings.map((offering) => ({
      label: offering.name,
      to: offering.link,
    })),
  ];

  const ecosystemProgramsForFooter = ecosystemProgramLinks.filter(
    (resource) => resource.label !== "Join our Slack channels",
  );

  const customerAndEcosystemLinks: FooterItem[] = [
    { label: "Use Case Library", to: "/use-cases" },
    ...customerExperienceItems.map((item) =>
      item.external ? { label: item.title, href: item.link } : { label: item.title, to: item.link },
    ),
    { label: ecosystemCommunityHighlight.title, to: ecosystemCommunityHighlight.link },
    ...ecosystemProgramsForFooter.map((resource) =>
      "href" in resource ? { label: resource.label, href: resource.href } : { label: resource.label, to: resource.to },
    ),
    ...ecosystemPartnershipCategories.map((partner) => ({
      label: partner.name,
      to: partner.path ?? { pathname: "/partners", search: `?category=${partner.search}` },
    })),
  ];

  const resourcesAndCompanyLinks: FooterItem[] = [
    ...resourcesProductsColumn
      .filter(
        (resource) =>
          ![
            "Filigran Academy",
            "GitHub",
            "OpenCTI Integrations",
            "OpenAEV Integrations",
            "XTM Hub",
          ].includes(resource.name),
      )
      .map((resource) => ({
        label: resource.name,
        href: resource.href,
      })),
    ...resourcesDiscoverColumn
      .filter((resource) => resource.name !== "What is XTM Hub?")
      .map((resource) => ({ label: resource.name, to: resource.link })),
    ...companyLinks.map((entry) =>
      entry.external ? { label: entry.name, href: entry.link } : { label: entry.name, to: entry.link },
    ),
  ];

  const footerColumns = [
    { heading: "Platforms", items: platformLinks },
    { heading: "Offerings", items: offeringLinks },
    { heading: "Ecosystem", items: customerAndEcosystemLinks },
    { heading: "Corporate", items: resourcesAndCompanyLinks },
  ];

  const legalLinks: FooterItem[] = [
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms of Services", to: "/terms-of-services" },
    { label: "Licenses", to: "/licenses" },
    { label: "Contact", to: "/company/contact" },
  ];

  const socialLinks = [
    { icon: LinkedinIcon, href: "https://www.linkedin.com/company/filigran/" },
    { icon: SlackIcon, href: "https://community.filigran.io/" },
    { icon: TwitterIcon, href: "https://x.com/FiligranHQ" },
    { icon: YoutubeIcon, href: "https://www.youtube.com/@Filigran" },
  ] as const;

  return (
    <footer className="border-t border-border/50 py-16 bg-primary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <FiligranLogo className="h-8 mb-6" />
            <p className="text-foreground/60 leading-relaxed mb-6 text-[14px]">
              Filigran provides open-source cybersecurity solutions covering threat intelligence management, breach and attack simulation, and cyber risk management.
            </p>
            
            {/* Certifications */}
            <div className="mb-6">
              <CertificationBadges />
            </div>
            
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-cyan/10 hover:bg-cyan/20 flex items-center justify-center transition-all duration-300 hover-lift group"
                >
                  <Icon className="w-5 h-5 text-cyan group-hover:text-cyan-glow transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h4 className="font-semibold mb-4 text-cyan">{column.heading}</h4>
              <ul className="space-y-3">
                {column.items.map((item) => (
                  <li key={`${column.heading}-${item.label}`}>
                    <FooterLink item={item} className="text-[14px]" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Filigran. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-foreground/70 text-[12px]">
            {legalLinks.map((link) => (
              <FooterLink key={link.label} item={link} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

type FooterItem =
  | { label: string; to: To }
  | { label: string; href: string };

const FooterLink = ({ item, className }: { item: FooterItem; className?: string }) => {
  const baseClasses = `text-foreground/60 hover:text-cyan transition-colors block ${className ?? ""}`;

  if ('href' in item) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link
      to={item.to}
      className={baseClasses}
    >
      {item.label}
    </Link>
  );
};
