import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, ChevronDown } from "lucide-react";
import { LIVE_DEMO_PATH } from "@/lib/routes";

// Import all customer logos with sanitized names
import barclaysLogo from "@/assets/customers/barclays.svg";
import blackrockLogo from "@/assets/customers/blackrock.svg";
import coreweavelogo from "@/assets/customers/coreweave.svg";
import crowdstrikeLogo from "@/assets/customers/crowdstrike.svg";
import docusignLogo from "@/assets/customers/docusign.svg";
import edfLogo from "@/assets/customers/edf.svg";
import keringLogo from "@/assets/customers/kering.svg";
import marriottLogo from "@/assets/customers/marriott.svg";
import novartisLogo from "@/assets/customers/novartis.svg";
import rivianLogo from "@/assets/customers/rivian.svg";
import unitedAirlinesLogo from "@/assets/customers/united-airlines.svg";

const customerLogos = [
  { src: crowdstrikeLogo, alt: "CrowdStrike" },
  { src: unitedAirlinesLogo, alt: "United Airlines" },
  { src: barclaysLogo, alt: "Barclays" },
  { src: blackrockLogo, alt: "BlackRock" },
  { src: coreweavelogo, alt: "CoreWeave" },
  { src: docusignLogo, alt: "DocuSign" },
  { src: edfLogo, alt: "EDF" },
  { src: keringLogo, alt: "Kering" },
  { src: novartisLogo, alt: "Novartis" },
  { src: marriottLogo, alt: "Marriott" },
  { src: rivianLogo, alt: "Rivian" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#01091f",
          backgroundImage:
            "radial-gradient(96.21% 108.44% at 94.34% 113.69%, rgb(22, 235, 249) 2%, rgb(51, 120, 255) 32%, rgba(51, 59, 255, 0.54) 63%, rgba(51, 96, 255, 0) 100%)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Graph Pattern Overlay (removed per latest request) */}
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/10 rounded-full blur-3xl animate-glow" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in leading-tight">
            Uncover Threats.
            <br />
            <span className="text-gradient-cyan">Take Action.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-slow">
            Discover our <strong>eXtended Threat Management (XTM) portfolio</strong> – gain continuous visibility 
            into your evolving attack surface and improve security posture with integrated threat 
            intelligence and adversary simulation solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-slow">
            <Button asChild size="lg" className="group px-10">
              <Link to={LIVE_DEMO_PATH}>
                <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                Live demo
              </Link>
            </Button>
            <Button asChild size="lg" variant="cta" className="px-10">
              <Link to="/book-demo">
                Book a demo
              </Link>
            </Button>
          </div>

          {/* Customer Logo Grid */}
          <div className="mt-20 space-y-6 animate-fade-in-slow" style={{ animationDelay: '0.4s' }}>
            <p className="text-sm uppercase tracking-[0.4em] text-white/80 mb-10">Trusted by leading security teams</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-12 gap-y-8 max-w-6xl mx-auto px-4">
              {/* Display 12 logos in a 6x2 grid, add one duplicate to make 12 */}
              {[...customerLogos, customerLogos[0]].map((logo, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-auto opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110"
                    style={{ 
                      filter: "brightness(0) invert(1)", // Make logos white
                      maxHeight: "32px", // Limit height to 32px for harmony
                      maxWidth: "120px" // Also limit width to prevent very wide logos
                    }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shadow-[0_0_25px_rgba(15,188,255,0.25)] bg-white/5 backdrop-blur-sm">
          <ChevronDown className="w-4 h-4 text-cyan animate-bounce" />
        </div>
      </div>
    </section>
  );
};
