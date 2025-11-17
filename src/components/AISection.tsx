import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import aiTagline from '@/assets/illustrations/ai-tagline.svg';
import xtmHubTagline from '@/assets/illustrations/xtm-hub-tagline.svg';

export const AISection = () => {
  const features = [
    {
      id: 'ai',
      label: 'AI-POWERED',
      icon: Sparkles,
      title: 'Automate with AI',
      description:
        "Achieve faster time to value with XTM One, the AI-native cockpit powering every phase of threat management.",
      image: aiTagline,
      link: '/platforms/xtm-one',
    },
    {
      id: 'xtm',
      label: 'COMMUNITY HUB',
      icon: MessageSquare,
      title: 'XTM Hub',
      description:
        "Access resources, share tradecraft and optimize the use of Filigran products inside our collaborative hub.",
      image: xtmHubTagline,
      link: '/platforms/xtm-hub',
    },
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.id}
                className="p-10 rounded-3xl card-glass border border-border/60 hover:border-cyan/40 transition-colors flex flex-col gap-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 w-fit">
                  <Icon className="w-5 h-5 text-cyan" />
                  <span className="text-sm font-semibold text-cyan">{feature.label}</span>
                </div>
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold">{feature.title}</h2>
                  <div className="space-y-4">
                    <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-background/80 to-background/60 p-4">
                      <img src={feature.image} alt={feature.title} className="w-full" loading="lazy" />
                    </div>
                    <p className="text-lg text-foreground/70 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
                <Button asChild size="lg" variant="outlineGlow" className="px-10">
                  <Link to={feature.link} className="inline-flex items-center group">
                    Learn more
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
