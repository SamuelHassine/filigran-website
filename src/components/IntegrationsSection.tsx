import { Button } from '@/components/ui/button';
import integration1 from '@/assets/integrations/alienvault-1.png';
import integration2 from '@/assets/integrations/alienvault-2.png';
import integration3 from '@/assets/integrations/alienvault-3.png';
import integration4 from '@/assets/integrations/alienvault-4.png';
import integration5 from '@/assets/integrations/alienvault-5.png';
import integration6 from '@/assets/integrations/alienvault-6.png';
import integration7 from '@/assets/integrations/alienvault-7.png';
import integration8 from '@/assets/integrations/alienvault-8.png';
import integration9 from '@/assets/integrations/alienvault-9.png';
import integration10 from '@/assets/integrations/alienvault-10.png';

export const IntegrationsSection = () => {
  const integrations = [
    { src: integration9, alt: 'AlienVault' },
    { src: integration8, alt: 'SentinelOne' },
    { src: integration7, alt: 'Recorded Future' },
    { src: integration6, alt: 'Darktrace' },
    { src: integration5, alt: 'Mandiant' },
    { src: integration4, alt: 'Microsoft' },
    { src: integration3, alt: 'Splunk' },
    { src: integration2, alt: 'Elastic' },
    { src: integration1, alt: 'Crowdstrike' },
    { src: integration10, alt: 'Vectra' },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-cyan/5" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-glow/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Integration and tech alliances
          </h2>
          <p className="text-xl text-foreground/70 mb-8">
            Integrate your sources and third-party solutions in seconds
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="border-cyan text-cyan hover:bg-cyan hover:text-accent-foreground"
            >
              <a href="https://filigran.notion.site/OpenCTI-Ecosystem-868329e9fb734fca89692b2ed6087e76" target="_blank" rel="noopener noreferrer">
                OpenCTI Integrations
              </a>
            </Button>
            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="border-cyan text-cyan hover:bg-cyan hover:text-accent-foreground"
            >
              <a href="https://filigran.notion.site/OpenBAS-Ecosystem-30d8eb73d7d04611843e758ddef8941b?pvs=4" target="_blank" rel="noopener noreferrer">
                OpenAEV Integrations
              </a>
            </Button>
          </div>
        </div>

        {/* Infinite scroll effect */}
        <div className="relative overflow-hidden py-8">
          <div className="flex gap-8 marquee-track">
            {[...integrations, ...integrations].map((integration, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-24 bg-card/70 backdrop-blur-sm border border-border/40 rounded-2xl p-4 hover:border-cyan/60 hover:shadow-[0_0_30px_rgba(15,188,255,0.25)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
              >
                <img
                  src={integration.src}
                  alt={integration.alt}
                  className="max-w-full max-h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.35)] transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
