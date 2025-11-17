import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import { corePlatforms, xtmOneCard, xtmSuiteHighlight } from "@/data/navigation";

const xtmOneGradient =
  "radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgba(122,74,255,0.55) 2%, rgba(173,96,255,0.35) 35%, rgba(96,64,255,0.25) 63%, rgba(51,24,120,0) 100%)";

export const PlatformsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => { setIsOpen(true); }}
      onMouseLeave={() => { setIsOpen(false); }}
    >
      <button
        className="flex items-center gap-1 text-foreground/80 hover:text-cyan transition-colors group py-2"
      >
        Platforms
        <ChevronDown className={`w-4 h-4 transition-all duration-300 ${isOpen ? 'rotate-180 text-cyan' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
          <div className="w-[980px] bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] divide-y lg:divide-y-0 lg:divide-x divide-border/40">
              <div className="h-full bg-white/5 border-r border-white/10 p-6 flex flex-col gap-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan">
                  Filigran advantage
                </h3>
                <div className="rounded-3xl border border-white/15 bg-white/5 p-6 h-full flex flex-col gap-4">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-white/60">{xtmSuiteHighlight.eyebrow}</p>
                  <h4 className="text-2xl font-semibold text-white">{xtmSuiteHighlight.title}</h4>
                  <p className="text-sm text-white/80 flex-1">
                    {xtmSuiteHighlight.description}
                  </p>
                  <Link
                    to={xtmSuiteHighlight.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan transition-colors"
                  >
                    {xtmSuiteHighlight.ctaLabel}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan">
                  Platforms
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {corePlatforms.map((platform, index) => (
                    <Link
                      key={platform.name}
                      to={platform.link}
                      className="group/item p-4 rounded-2xl border border-border/50 hover:border-cyan/40 transition-all duration-300 bg-card/70 flex flex-col gap-3 items-center hover:-translate-y-1"
                      style={{ animationDelay: `${index * 60}ms` }}
                    >
                      <div className="h-10 flex items-center justify-center">
                        <img src={platform.logo} alt={platform.name} className="h-full object-contain" />
                      </div>
                      <p className="text-sm text-foreground/70 text-center">
                        {platform.description}
                      </p>
                    </Link>
                  ))}
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.4em] text-foreground/50">
                    <span className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
                    agentic ai
                    <span className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
                  </div>
                  <Link
                    to={xtmOneCard.link}
                    className="group/item flex flex-col gap-4 rounded-2xl border p-6 transition-all duration-300"
                    style={{
                      backgroundImage: xtmOneGradient,
                      backgroundColor: "rgba(16,6,32,0.1)"
                    }}
                    onMouseEnter={(event) => {
                      (event.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(138,99,255,1)";
                    }}
                    onMouseLeave={(event) => {
                      (event.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(138,99,255,0.4)";
                    }}
                  >
                    <img src={xtmOneCard.logo} alt={xtmOneCard.name} className="h-8 object-contain" />
                    <p className="text-sm text-white/80">{xtmOneCard.description}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 group-hover/item:text-white">
                      {xtmOneCard.ctaLabel}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
