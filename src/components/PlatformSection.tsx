import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface PlatformSectionProps {
  logo: string;
  title: string;
  subtitle: string;
  description: string;
  detail?: string;
  image: string;
  link: string;
  reverse?: boolean;
}

export const PlatformSection = ({
  logo,
  title,
  subtitle,
  description,
  detail,
  image,
  link,
  reverse = false
}: PlatformSectionProps) => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className={`space-y-8 ${reverse ? 'lg:order-2' : ''}`}>
            <div className="inline-block">
              <img src={logo} alt="" className="h-12 lg:h-16" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                {title}
              </h2>
              <p className="text-lg lg:text-xl text-foreground/70 leading-relaxed">
                {subtitle}
              </p>
            </div>

            <Button asChild variant="outlineGlow" className="text-lg w-fit px-6">
              <Link to={link} className="inline-flex items-center group">
                Learn more
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Image */}
          <div className={reverse ? 'lg:order-1' : ''}>
            <div className="relative group">
              <div className="absolute -inset-4 rounded-[48px] bg-gradient-to-br from-cyan/15 via-transparent to-blue-500/20 blur-3xl -z-10" />
              <div className="absolute inset-6 border border-dashed border-cyan/20 rounded-[42px] opacity-50 -z-10 pointer-events-none" />
              <div className="relative rounded-[36px] border border-white/10 bg-card/70 backdrop-blur-xl p-4 shadow-[0_25px_80px_rgba(15,23,42,0.35)]">
                <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-b from-background/80 to-background overflow-hidden aspect-[4/3]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsla(185,95%,60%,0.35),transparent_55%)]" />
                  <img 
                    src={image} 
                    alt="" 
                    className="relative h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                {(description || detail) && (
                    <div className="absolute left-5 right-5 bottom-5 rounded-2xl border border-white/20 bg-background/85 backdrop-blur-md p-4 shadow-[0_10px_30px_rgba(2,8,20,0.45)]">
                      {description && (
                        <p className="text-[11px] uppercase tracking-[0.35em] text-foreground/60 mb-1">
                          {description}
                        </p>
                      )}
                      {detail && (
                        <p className="text-base text-foreground/80 leading-relaxed">
                          {detail}
                        </p>
                      )}
                  </div>
                )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
