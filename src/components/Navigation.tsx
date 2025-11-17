import { useState } from "react";
import { Link, type To } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { PlatformsDropdown } from "./PlatformsDropdown";
import { OfferingsDropdown } from "./OfferingsDropdown";
import { CustomersDropdown } from "./CustomersDropdown";
import { EcosystemDropdown } from "./EcosystemDropdown";
import { ResourcesDropdown } from "./ResourcesDropdown";
import { CompanyDropdown } from "./CompanyDropdown";
import { FiligranLogo } from "./FiligranLogo";
import {
  companyLinks,
  corePlatforms,
  customerExperienceItems,
  customerUseCaseLinks,
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

interface MobileSection {
  id: string;
  label: string;
  render: (closeMenu: () => void) => React.ReactNode;
}

interface MobileLinkItem {
  label: string;
  description?: string;
  to?: To;
  href?: string;
  external?: boolean;
}

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => {
      const next = !prev;
      if (!next) {
        setExpandedSection(null);
      }
      return next;
    });
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedSection(null);
  };

  const toggleSection = (id: string) => {
    setExpandedSection((current) => (current === id ? null : id));
  };

  const mobileSections: MobileSection[] = [
    {
      id: "platforms",
      label: "Platforms",
      render: (close) => (
        <MobileSectionContent>
          <MobileHighlightLink
            eyebrow={xtmSuiteHighlight.eyebrow}
            title={xtmSuiteHighlight.title}
            description={xtmSuiteHighlight.description}
            to={xtmSuiteHighlight.link}
            ctaLabel={xtmSuiteHighlight.ctaLabel}
            onNavigate={close}
          />
          <div className="space-y-2">
            <MobileSectionLabel>Core platforms</MobileSectionLabel>
            {corePlatforms.map((platform) => (
              <MobileNavLink
                key={platform.name}
                item={{
                  label: platform.name,
                  description: platform.description,
                  to: platform.link,
                }}
                onNavigate={close}
              />
            ))}
          </div>
          <MobileHighlightLink
            eyebrow="Agentic AI"
            title={xtmOneCard.name}
            description={xtmOneCard.description}
            to={xtmOneCard.link}
            ctaLabel={xtmOneCard.ctaLabel}
            onNavigate={close}
          />
        </MobileSectionContent>
      ),
    },
    {
      id: "offerings",
      label: "Offerings",
      render: (close) => (
        <MobileSectionContent>
          <div className="space-y-2">
            <MobileSectionLabel>Product editions</MobileSectionLabel>
            {productOfferings.map((offering) => (
              <MobileNavLink
                key={offering.name}
                item={{ label: offering.name, description: offering.description, to: offering.link }}
                onNavigate={close}
              />
            ))}
          </div>
          <div className="space-y-2">
            <MobileSectionLabel>Services</MobileSectionLabel>
            {serviceOfferings.map((offering) => (
              <MobileNavLink
                key={offering.name}
                item={{ label: offering.name, description: offering.description, to: offering.link }}
                onNavigate={close}
              />
            ))}
          </div>
        </MobileSectionContent>
      ),
    },
    {
      id: "customers",
      label: "Customers",
      render: (close) => (
        <MobileSectionContent>
          <div className="space-y-2">
            <MobileSectionLabel>Use cases</MobileSectionLabel>
            {customerUseCaseLinks.map((useCase) => (
              <MobileNavLink key={useCase.link} item={{ label: useCase.title, to: useCase.link }} onNavigate={close} />
            ))}
            <MobileNavLink
              item={{ label: "View all use cases ➜", to: "/use-cases" }}
              onNavigate={close}
            />
          </div>
          <div className="space-y-2">
            <MobileSectionLabel>Experience</MobileSectionLabel>
            {customerExperienceItems.map((item) => (
              <MobileNavLink
                key={item.title}
                item={{
                  label: item.title,
                  description: item.description,
                  to: item.external ? undefined : item.link,
                  href: item.external ? item.link : undefined,
                  external: item.external,
                }}
                onNavigate={close}
              />
            ))}
          </div>
        </MobileSectionContent>
      ),
    },
    {
      id: "ecosystem",
      label: "Ecosystem",
      render: (close) => (
        <MobileSectionContent>
          <MobileHighlightLink
            eyebrow={ecosystemCommunityHighlight.eyebrow}
            title={ecosystemCommunityHighlight.title}
            description={ecosystemCommunityHighlight.description}
            to={ecosystemCommunityHighlight.link}
            ctaLabel={ecosystemCommunityHighlight.ctaLabel}
            onNavigate={close}
          />
          <div className="space-y-2">
            <MobileSectionLabel>Partnerships</MobileSectionLabel>
            {ecosystemPartnershipCategories.map((partner) => (
              <MobileNavLink
                key={partner.name}
                item={{
                  label: partner.name,
                  description: partner.description,
                  to: partner.path ?? {
                    pathname: "/partners",
                    search: `?category=${partner.search}`,
                  },
                }}
                onNavigate={close}
              />
            ))}
          </div>
          <div className="space-y-2">
            <MobileSectionLabel>Programs</MobileSectionLabel>
            {ecosystemProgramLinks.map((resource) => (
              <MobileNavLink
                key={resource.label}
                item={{
                  label: resource.label,
                  to: "to" in resource ? resource.to : undefined,
                  href: "href" in resource ? resource.href : undefined,
                  external: "href" in resource,
                }}
                onNavigate={close}
              />
            ))}
          </div>
        </MobileSectionContent>
      ),
    },
    {
      id: "resources",
      label: "Resources",
      render: (close) => (
        <MobileSectionContent>
          <div className="space-y-2">
            <MobileSectionLabel>Products</MobileSectionLabel>
            {resourcesProductsColumn.map((resource) => (
              <MobileNavLink
                key={resource.name}
                item={{
                  label: resource.name,
                  description: resource.description,
                  href: resource.href,
                  external: true,
                }}
                onNavigate={close}
              />
            ))}
          </div>
          <div className="space-y-2">
            <MobileSectionLabel>Discover</MobileSectionLabel>
            {resourcesDiscoverColumn.map((resource) => (
              <MobileNavLink
                key={resource.name}
                item={{
                  label: resource.name,
                  description: resource.description,
                  to: resource.link,
                }}
                onNavigate={close}
              />
            ))}
          </div>
        </MobileSectionContent>
      ),
    },
    {
      id: "company",
      label: "Company",
      render: (close) => (
        <MobileSectionContent>
          <div className="space-y-2">
            {companyLinks.map((entry) => (
              <MobileNavLink
                key={entry.name}
                item={{
                  label: entry.name,
                  description: entry.description,
                  to: entry.external ? undefined : entry.link,
                  href: entry.external ? entry.link : undefined,
                  external: entry.external,
                }}
                onNavigate={close}
              />
            ))}
          </div>
        </MobileSectionContent>
      ),
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-lg bg-background/95">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <FiligranLogo />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <PlatformsDropdown />
            <OfferingsDropdown />
            <CustomersDropdown />
            <EcosystemDropdown />
            <ResourcesDropdown />
            <CompanyDropdown />
          </div>

          <div className="hidden lg:block">
            <Button asChild size="lg" variant="cta" className="px-8">
              <Link to="/book-demo">Book a demo</Link>
            </Button>
          </div>

          <button onClick={toggleMobileMenu} className="lg:hidden p-2" aria-label="Toggle navigation menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border/50 animate-fade-in">
            <div className="divide-y divide-border/40">
              {mobileSections.map((section) => {
                const isOpen = expandedSection === section.id;
                return (
                  <div key={section.id}>
                    <button
                      className="flex w-full items-center justify-between px-4 py-4 text-left font-semibold text-lg text-foreground"
                      onClick={() => { toggleSection(section.id); }}
                      aria-expanded={isOpen}
                      aria-controls={`mobile-section-${section.id}`}
                    >
                      {section.label}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180 text-cyan" : "text-foreground/60"}`}
                      />
                    </button>
                    <div id={`mobile-section-${section.id}`} className={isOpen ? "block" : "hidden"}>
                      {section.render(closeMobileMenu)}
                    </div>
                  </div>
                );
              })}
              <div className="px-4 py-6">
                <Button asChild variant="cta" size="lg" className="w-full">
                  <Link to="/book-demo" onClick={closeMobileMenu}>
                    Book a demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const MobileSectionContent = ({ children }: { children: React.ReactNode }) => (
  <div className="px-4 pb-6 space-y-5">{children}</div>
);

const MobileSectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">{children}</p>
);

const MobileNavLink = ({ item, onNavigate }: { item: MobileLinkItem; onNavigate: () => void }) => {
  const content = (
    <>
      <div className="flex items-center gap-2">
        <span className="text-base font-semibold text-foreground">{item.label}</span>
        {item.external && <ArrowUpRight className="w-4 h-4 text-foreground/40" aria-hidden="true" />}
      </div>
      {item.description && <p className="text-sm text-foreground/60">{item.description}</p>}
    </>
  );

  if (item.to) {
    return (
      <Link
        to={item.to}
        onClick={onNavigate}
        className="block rounded-2xl border border-border/60 bg-card/60 px-4 py-3 text-left hover:border-cyan/40 transition-colors"
      >
        {content}
      </Link>
    );
  }

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className="block rounded-2xl border border-border/60 bg-card/60 px-4 py-3 text-left hover:border-cyan/40 transition-colors"
      >
        {content}
      </a>
    );
  }

  return null;
};

const MobileHighlightLink = ({
  eyebrow,
  title,
  description,
  to,
  href,
  ctaLabel,
  onNavigate,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  to?: To;
  href?: string;
  ctaLabel?: string;
  onNavigate: () => void;
}) => {
  const content = (
    <div className="block rounded-3xl border border-border/60 bg-gradient-to-br from-card to-card/80 px-5 py-4 space-y-2">
      {eyebrow && <p className="text-[11px] uppercase tracking-[0.35em] text-foreground/60">{eyebrow}</p>}
      <h4 className="text-xl font-semibold text-foreground">{title}</h4>
      <p className="text-sm text-foreground/70">{description}</p>
      {ctaLabel && <span className="inline-flex items-center gap-1 text-sm font-semibold text-cyan">{ctaLabel}</span>}
    </div>
  );

  if (to) {
    return (
      <Link to={to} onClick={onNavigate} className="block">
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onNavigate} className="block">
        {content}
      </a>
    );
  }

  return content;
};
