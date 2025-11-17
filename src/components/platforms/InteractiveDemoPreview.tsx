import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface InteractiveDemoPreviewProps {
  imageSrc: string;
  alt?: string;
  onLaunch: () => void;
  className?: string;
  overlayLabel?: string;
  buttonLabel?: string;
}

export const InteractiveDemoPreview = ({
  imageSrc,
  alt,
  onLaunch,
  className,
  overlayLabel = "Interactive demo",
  buttonLabel = "Take a tour of product",
}: InteractiveDemoPreviewProps) => (
  <div
    className={cn(
      "relative rounded-2xl overflow-hidden border border-white/10 bg-black/60",
      className
    )}
  >
    <img
      src={imageSrc}
      alt={alt ?? "Interactive demo preview"}
      className="h-full w-full object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background/80" />
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-10 py-12">
      <p className="text-sm uppercase tracking-[0.4em] text-white/70">{overlayLabel}</p>
      <Button
        type="button"
        size="lg"
        variant="outline"
        className="border-cyan text-cyan hover:bg-cyan hover:text-accent-foreground group px-8"
        onClick={onLaunch}
      >
        {buttonLabel}
        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  </div>
);


