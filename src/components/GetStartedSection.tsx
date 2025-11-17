import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { LIVE_DEMO_PATH } from '@/lib/routes';

export const GetStartedSection = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#030c21",
          backgroundImage:
            "radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)",
        }}
      />
      
      {/* Floating orbs with glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-glow/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan/20 rounded-full blur-[150px] animate-glow" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(15,188,255,0.2) 1px, transparent 1px),
              linear-gradient(60deg, rgba(15,188,255,0.12) 1px, transparent 1px),
              linear-gradient(120deg, rgba(15,188,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px, 70px 70px, 70px 70px',
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon with glow */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan to-cyan-glow mb-8 animate-float shadow-glow">
            <Sparkles className="w-10 h-10 text-accent-foreground" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Get Started{' '}
            <span className="text-gradient-cyan">Today.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Try the live demo for free or book a personalized demo to discover how our solutions can streamline your cybersecurity operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button 
              asChild 
              size="lg"
              className="bg-cyan text-accent-foreground hover:bg-cyan-glow transition-all duration-300 shadow-glow hover:shadow-[0_0_40px_hsl(var(--cyan)/0.5)] group text-lg px-8 py-6"
            >
            <Link to={LIVE_DEMO_PATH}>
              Try live demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            </Button>
            
            <Button asChild size="lg" variant="cta" className="group text-lg px-8 py-6">
              <Link to="/book-demo">
                Book a demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-60 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-sm text-foreground/60">Trusted by 6,000+ organizations worldwide</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
