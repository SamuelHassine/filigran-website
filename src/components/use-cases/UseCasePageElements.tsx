import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, LucideIcon, Sparkles, Tag, Users } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PainPointsListProps {
  items: string[];
}

export const PainPointsList = ({ items }: PainPointsListProps) => (
  <div className="rounded-3xl border border-white/10 bg-card/80 backdrop-blur-xl">
    <ol className="divide-y divide-white/10">
      {items.map((point, index) => (
        <li key={point} className="flex gap-6 px-6 py-6">
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-cyan/30 bg-cyan/10 text-2xl font-semibold text-cyan-200">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex flex-1 items-center">
            <p className="text-lg md:text-xl font-medium text-foreground/90 leading-relaxed">{point}</p>
          </div>
        </li>
      ))}
    </ol>
  </div>
);

interface SidebarMetaCardProps {
  logo: string;
  logoAlt: string;
  category: string;
  team: string;
  benefits: string[];
  pdfUrl?: string;
  pdfLabel?: string;
}

const InfoItem = ({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: ReactNode;
}) => (
  <div className="flex items-start gap-3">
    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-cyan/15 text-cyan">
      <Icon className="h-3.5 w-3.5" />
    </div>
    <div>
      <p className="text-xs uppercase tracking-wide text-foreground/60">{label}</p>
      {children}
    </div>
  </div>
);

export const SidebarMetaCard = ({
  logo,
  logoAlt,
  category,
  team,
  benefits,
  pdfUrl,
  pdfLabel = "Download PDF",
}: SidebarMetaCardProps) => (
  <Card className="space-y-6 border-white/10 bg-card/80 p-8 backdrop-blur-xl">
    <img src={logo} alt={logoAlt} className="h-10" />

    <div className="space-y-4">
      <InfoItem icon={Tag} label="Category">
        <p className="font-semibold text-foreground">{category}</p>
      </InfoItem>

      <InfoItem icon={Users} label="Team">
        <p className="font-semibold text-foreground">{team}</p>
      </InfoItem>

      <InfoItem icon={Sparkles} label="Benefits">
        <ul className="space-y-1 text-sm text-foreground/80">
          {benefits.map((benefit) => (
            <li key={benefit}>• {benefit}</li>
          ))}
        </ul>
      </InfoItem>
    </div>

    {pdfUrl && (
      <Button asChild className="w-full" variant="cta">
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2"
        >
          <FileText className="h-4 w-4" />
          {pdfLabel}
        </a>
      </Button>
    )}
  </Card>
);

interface UseCaseSectionBlockProps {
  title: string;
  paragraphs: string[];
  image?: {
    src: string;
    alt: string;
  };
}

export const UseCaseSectionBlock = ({ title, paragraphs, image }: UseCaseSectionBlockProps) => (
  <div className="space-y-6">
    <div>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p
            key={`${title}-${index}`}
            className="leading-relaxed text-foreground/80"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </div>
    </div>

    {image && (
      <Card className="overflow-hidden border-white/10 bg-card/80 backdrop-blur-xl">
        <img src={image.src} alt={image.alt} className="h-auto w-full object-cover" loading="lazy" />
      </Card>
    )}
  </div>
);

export interface RelatedUseCaseItem {
  to: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  imagePosition?: "left" | "right";
}

interface RelatedUseCasesSectionProps {
  items: RelatedUseCaseItem[];
  title?: string;
  description?: string;
}

export const RelatedUseCasesSection = ({
  items,
  title = "Discover other use cases",
  description = "Explore our diverse range of use cases to see how our solutions can transform your operations.",
}: RelatedUseCasesSectionProps) => (
  <section className="bg-gradient-to-b from-transparent to-cyan/5 py-20">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-foreground/70">{description}</p>
      </div>

      <div className="mx-auto max-w-6xl space-y-6">
        {items.map((item) => (
          <RelatedUseCaseCard key={item.to} {...item} />
        ))}
      </div>
    </div>
  </section>
);

const RelatedUseCaseCard = ({ to, title, description, image, imagePosition = "left" }: RelatedUseCaseItem) => (
  <Link to={to} className="group block">
    <Card className="overflow-hidden border-white/10 bg-card/80 backdrop-blur-xl transition-colors hover:border-cyan/50">
      <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div
          className={cn(
            "overflow-hidden bg-gradient-to-br from-cyan/10 to-blue-500/10",
            "h-48 sm:h-56 lg:h-[230px]",
            imagePosition === "right" ? "lg:order-2" : ""
          )}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div
          className={cn(
            "flex flex-col justify-center gap-4 p-6 md:p-8",
            imagePosition === "right" ? "lg:order-1" : ""
          )}
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan">Use case</span>
          <h3 className="text-2xl font-semibold text-foreground transition-colors group-hover:text-cyan">{title}</h3>
          <p className="text-foreground/70 leading-relaxed line-clamp-3">{description}</p>
          <div className="flex items-center gap-2 text-cyan font-semibold pt-2">
            <span>Learn more</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Card>
  </Link>
);


