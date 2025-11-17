import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare } from 'lucide-react';
import xtmHubTagline from '@/assets/illustrations/xtm-hub-tagline.svg';

export const XTMHub = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-8 p-12 lg:p-20 rounded-3xl card-glass border border-border/50 hover-lift">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20">
              <MessageSquare className="w-5 h-5 text-cyan" />
              <span className="text-sm font-semibold text-cyan">COMMUNITY HUB</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold">
              XTM Hub
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <img src={xtmHubTagline} alt="XTM Hub" className="w-full mb-8" loading="lazy" />
              <p className="text-xl text-foreground/70 leading-relaxed">
                Access resources, share tradecrafts and optimize the use of Filigran's products, 
                fostering collaboration and empowering the community within our central forum.
              </p>
            </div>

            <Button asChild size="lg" variant="outlineGlow" className="px-10">
              <Link to="/platforms/xtm-hub" className="inline-flex items-center group">
                Learn more
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
