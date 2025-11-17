import { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Hash, ExternalLink } from 'lucide-react';
import { createHubSpotForm, cleanupHubSpotForm } from '@/lib/hubspot';

const Contact = () => {
  useEffect(() => {
    // Create HubSpot form with enhanced styling
    void createHubSpotForm({
      region: "eu1",
      portalId: "26791207",
      formId: "87d4078f-45a9-4f84-a8de-011e0a28a0b7",
      target: "#hubspot-contact-form",
    });

    // Cleanup on unmount
    return () => {
      cleanupHubSpotForm('hubspot-contact-form');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Full Page Hero with Gradient and Content */}
        <section className="min-h-screen relative overflow-hidden flex items-center py-20">
          <div className="absolute inset-0">
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
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 -left-12 h-[420px] w-[420px] rounded-full bg-cyan/20 blur-[160px]" />
              <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[200px]" />
              <div className="absolute top-1/2 left-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-[220px] animate-glow" />
            </div>
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-16 pt-20">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
                How can we help?
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 leading-relaxed">
                We're here to help and answer any question you might have, We look forward to hearing from you!
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
              {/* Left Column - Meet the Community */}
              <Card className="p-8 border-white/10 bg-card/80 backdrop-blur-xl h-fit">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-purple-600/10 flex items-center justify-center flex-shrink-0">
                    <Hash className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3">Meet the Community</h2>
                    <p className="text-foreground/70 leading-relaxed mb-6">
                      Get in touch with a vibrant community of enthusiasts and analysts.
                    </p>
                    <Button
                      variant="outline"
                      className="border-cyan text-cyan hover:bg-cyan hover:text-background"
                      asChild
                    >
                      <a href="https://community.filigran.io/" target="_blank" rel="noopener noreferrer">
                        Learn More
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Right Column - Contact Form */}
              <Card className="p-8 border-white/10 bg-card/80 backdrop-blur-xl">
                <h2 className="text-3xl font-bold mb-3">Let's talk</h2>
                <p className="text-foreground/70 text-lg mb-8">
                  Any question? Please contact us.
                </p>

                <div id="hubspot-contact-form" className="hubspot-form-container">
                  {/* Loading placeholder */}
                  <div className="animate-pulse space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-10 bg-white/5 rounded-lg"></div>
                      <div className="h-10 bg-white/5 rounded-lg"></div>
                    </div>
                    <div className="h-10 bg-white/5 rounded-lg"></div>
                    <div className="h-10 bg-white/5 rounded-lg"></div>
                    <div className="h-24 bg-white/5 rounded-lg"></div>
                    <div className="h-12 bg-cyan/20 rounded-lg"></div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mt-12 pt-8 border-t border-white/10 text-center">
                  <p className="text-sm text-foreground/60 mb-2">Prefer email?</p>
                  <a 
                    href="mailto:contact@filigran.io"
                    className="text-cyan hover:text-cyan-glow transition-colors font-semibold text-lg"
                  >
                    contact@filigran.io
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
