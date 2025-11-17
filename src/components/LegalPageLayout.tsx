import { ReactNode } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

const gradientStyle = {
  backgroundColor: "#01091f",
  backgroundImage:
    "radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
} as const;

interface LegalPageLayoutProps {
  title: string;
  description?: string;
  kicker?: string;
  children: ReactNode;
  contentClassName?: string;
}

export const LegalPageLayout = ({
  title,
  description,
  kicker = "Trust & Compliance",
  children,
  contentClassName,
}: LegalPageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />

      <main className="flex-1">
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={gradientStyle} />
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 -left-12 h-[420px] w-[420px] rounded-full bg-cyan/20 blur-[160px]" />
              <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[200px]" />
              <div className="absolute top-1/2 left-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-[220px] animate-glow" />
            </div>
          </div>

          <div className="container relative z-10 px-4 lg:px-8">
            <header className="max-w-4xl mx-auto text-center mb-16 space-y-6">
              {kicker ? (
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">{kicker}</p>
              ) : null}
              <h1 className="text-4xl md:text-6xl font-bold text-white">{title}</h1>
              {description ? (
                <p className="text-lg md:text-xl text-white/80 leading-relaxed">{description}</p>
              ) : null}
            </header>

            <div className={cn("mx-auto max-w-5xl space-y-12 text-white/80", contentClassName)}>{children}</div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

