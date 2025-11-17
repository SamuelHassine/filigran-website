import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { PartnerProfile } from "@/data/partnerEcosystem";

interface PartnerCardProps {
  partner: PartnerProfile;
  tone?: "dark" | "light";
  className?: string;
}

export const PartnerCard = ({ partner, tone = "dark", className }: PartnerCardProps) => {
  const isDark = tone === "dark";

  const cardClasses = cn(
    "group relative flex h-full flex-col overflow-hidden rounded-3xl border p-0 transition-all duration-300",
    isDark
      ? "bg-white/5 border-white/10 text-white hover:border-cyan/50 hover:shadow-[0_30px_90px_rgba(3,12,33,0.6)]"
      : "bg-card border-border text-foreground hover:border-cyan/40 hover:shadow-[0_30px_70px_rgba(15,50,90,0.15)]",
    className
  );

  const chipClasses = cn(
    "rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em]",
    isDark ? "bg-white/5 border-white/15 text-white/70" : "bg-foreground/5 border-border text-foreground/60"
  );

  const paragraphClasses = cn("text-sm leading-relaxed", isDark ? "text-white/80" : "text-foreground/75");

  const logoStripClasses = cn(
    "flex items-center justify-center bg-white px-8 py-8 border-b",
    isDark ? "border-white/10" : "border-border/60"
  );

  const bodyClasses = "flex flex-col gap-5 p-6 sm:p-8";

  const cardContent = (
    <Card className={cardClasses}>
      <div className={logoStripClasses}>
        <img
          src={partner.logo}
          alt={partner.logoAlt}
          loading="lazy"
          className="h-16 w-full max-w-[220px] object-contain drop-shadow-sm sm:h-20"
        />
      </div>

      <div className={bodyClasses}>
        {partner.regions && partner.regions.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {partner.regions.map((region) => (
              <span key={`${partner.name}-${region}`} className={chipClasses}>
                {region}
              </span>
            ))}
          </div>
        )}

        <h3 className="text-2xl font-semibold tracking-tight">{partner.name}</h3>

        <div className="space-y-3">
          {partner.description.map((paragraph, index) => (
            <p key={`${partner.name}-paragraph-${index}`} className={paragraphClasses}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Card>
  );

  if (partner.website) {
    return (
      <a
        href={partner.website}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${partner.name} website`}
        className="block rounded-[28px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
};

