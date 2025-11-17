import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight, UsersRound } from "lucide-react";
import {
  ecosystemCommunityHighlight,
  ecosystemPartnershipCategories,
  ecosystemProgramLinks,
} from "@/data/navigation";

export const EcosystemDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => { setIsOpen(true); }}
      onMouseLeave={() => { setIsOpen(false); }}
    >
      <button className="flex items-center gap-1 text-foreground/80 hover:text-cyan transition-colors group py-2">
        Ecosystem
        <ChevronDown className={`w-4 h-4 transition-all duration-300 ${isOpen ? "rotate-180 text-cyan" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
          <div className="w-[960px] bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
            <div className="grid lg:grid-cols-[340px_minmax(0,1fr)_240px] divide-y lg:divide-y-0 lg:divide-x divide-border/40">
              <div className="p-6 flex flex-col gap-5 bg-white/5 border-r border-white/10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-semibold tracking-[0.3em]">
                  <UsersRound className="w-4 h-4 text-cyan" />
                  {ecosystemCommunityHighlight.eyebrow.toUpperCase()}
                </div>
                <h3 className="text-3xl font-semibold text-white">{ecosystemCommunityHighlight.title}</h3>
                <p className="text-sm text-white/80">
                  {ecosystemCommunityHighlight.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to={ecosystemCommunityHighlight.link}
                    className="inline-flex items-center justify-between rounded-2xl border border-cyan/30 bg-cyan/5 px-5 py-3 text-sm font-semibold text-cyan hover:bg-cyan/10 transition-colors"
                  >
                    <span>{ecosystemCommunityHighlight.ctaLabel}</span>
                    <span aria-hidden className="text-base">
                      ➜
                    </span>
                  </Link>
                </div>
              </div>

              <div className="p-6 space-y-3 border-l border-border/30">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan mb-2">
                  Partnerships
                </h3>
                <div className="space-y-2">
                  {ecosystemPartnershipCategories.map((partner, index) => {
                    const Icon = partner.icon;
                    const target = partner.path ?? { pathname: "/partners", search: `?category=${partner.search}` };
                    return (
                      <Link
                        key={partner.name}
                        to={target}
                        className="group/item p-3 rounded-xl hover:bg-cyan/5 transition-all duration-300 border border-transparent hover:border-cyan/20 flex items-start gap-3"
                        style={{ animationDelay: `${index * 60}ms` }}
                      >
                        <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                          <Icon className="w-5 h-5 text-cyan" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base font-semibold group-hover/item:text-cyan transition-colors">
                            {partner.name}
                          </h4>
                          <p className="text-sm text-foreground/60">{partner.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="p-6 space-y-3 border-l border-border/30">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan mb-2">
                  Programs
                </h3>
                <div className="space-y-2">
                  {ecosystemProgramLinks.map((resource) => {
                    if ("href" in resource) {
                      return (
                        <a
                          key={resource.label}
                          href={resource.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 rounded-xl border border-border/50 hover:border-cyan/40 transition-colors text-sm text-foreground/80"
                        >
                          {resource.label}
                          <ArrowRight className="w-4 h-4 text-cyan/70" />
                        </a>
                      );
                    }

                    return (
                      <Link
                        key={resource.label}
                        to={resource.to}
                        className="flex items-center justify-between p-3 rounded-xl border border-border/50 hover:border-cyan/40 transition-colors text-sm text-foreground/80"
                      >
                        {resource.label}
                        <ArrowRight className="w-4 h-4 text-cyan/70" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
