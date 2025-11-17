import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, Target, Shield, Zap } from 'lucide-react';
import { createHubSpotForm, cleanupHubSpotForm } from '@/lib/hubspot';

const BookDemo = () => {
  useEffect(() => {
    // Create HubSpot form with enhanced styling
    void createHubSpotForm({
      region: "eu1",
      portalId: "26791207",
      formId: "5f4c8b48-f7d0-4fc5-8d81-fb3b3e457d68",
      target: "#hubspot-form-container",
    });

    // Cleanup on unmount
    return () => {
      cleanupHubSpotForm('hubspot-form-container');
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Full Page Hero with Gradient and Content */}
        <section id="live-demo" className="min-h-screen relative overflow-hidden flex items-center py-20">
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
            <div className="max-w-3xl mx-auto text-center mb-16 pt-20">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
                Book a <span className="text-gradient-cyan">Demo</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                See how Filigran's XTM portfolio transforms cybersecurity operations with a personalized demo from our experts.
              </p>
            </div>
            
            {/* Form and Info Section */}
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <Card className="p-8 border-white/10 bg-card/80 backdrop-blur-xl animate-fade-in">
                <h2 className="text-2xl font-bold mb-6">Schedule Your Demo</h2>
                
                <div className="grid grid-cols-2 gap-4 mb-8 text-sm text-foreground/70">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-cyan" />
                    <span>Dedicated XTM specialist</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan" />
                    <span>45-minute live session</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-cyan" />
                    <span>Tailored to your needs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-cyan" />
                    <span>Flexible scheduling</span>
                  </div>
                </div>

                <div id="hubspot-form-container" className="hubspot-form-container">
                  <div className="animate-pulse space-y-4">
                    <div className="h-10 bg-white/5 rounded-lg"></div>
                    <div className="h-10 bg-white/5 rounded-lg"></div>
                    <div className="h-10 bg-white/5 rounded-lg"></div>
                    <div className="h-12 bg-cyan/20 rounded-lg"></div>
                  </div>
                </div>
              </Card>

              {/* Info Cards */}
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-cyan" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Enterprise-Ready Solutions</h3>
                      <p className="text-foreground/70">
                        Discover how our platforms scale to meet the demands of the world's largest organizations.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-cyan" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Live Platform Walkthrough</h3>
                      <p className="text-foreground/70">
                        See OpenCTI, OpenAEV, and XTM Suite in action with real-world use cases tailored to your industry.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-white/10 bg-gradient-to-br from-cyan/10 via-transparent to-blue-500/10">
                  <h3 className="text-xl font-semibold mb-3">What You'll Learn</h3>
                  <ul className="space-y-2 text-foreground/70">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan mt-1">•</span>
                      <span>How to operationalize threat intelligence with OpenCTI</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan mt-1">•</span>
                      <span>Validate security controls with OpenAEV simulations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan mt-1">•</span>
                      <span>Integrate AI-powered workflows with XTM One</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan mt-1">•</span>
                      <span>Best practices for threat-informed defense</span>
                    </li>
                  </ul>
                </Card>

                <div className="text-center">
                  <p className="text-foreground/70 mb-4">Already using Filigran products?</p>
                  <Button asChild variant="secondary">
                    <Link to="/platforms/xtm-hub">
                      Access XTM Hub
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BookDemo;