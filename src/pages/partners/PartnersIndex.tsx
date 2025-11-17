import { useEffect, useRef } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Handshake, Globe, TrendingUp, Award } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

const Partners = () => {
  const [searchParams] = useSearchParams();
  const msspRef = useRef<HTMLDivElement>(null);
  const technologyRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const marketplacesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const category = searchParams.get('category');
    const map = {
      mssp: msspRef,
      technology: technologyRef,
      solutions: solutionsRef,
      marketplaces: marketplacesRef
    } as const;
    const ref = category && category in map ? map[category as keyof typeof map] : null;
    const target = ref ? ref.current : null;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [searchParams]);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Partner <span className="text-gradient-cyan">Ecosystem</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Join our global network of partners delivering innovative cybersecurity 
              solutions to organizations worldwide.
            </p>
          </div>

          {/* Partner Types */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            <div ref={msspRef} id="mssp">
              <Link to="/partners/technology-alliances" className="block h-full">
                <Card className="p-8 text-center card-glass hover-lift h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan/10 mb-6">
                    <Handshake className="w-8 h-8 text-cyan" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Technology Partners</h3>
                  <p className="text-foreground/70">Integrate and extend the XTM platform</p>
                </Card>
              </Link>
            </div>

            <div ref={solutionsRef} id="solutions">
              <Link to="/partners/solutions-providers" className="block h-full">
                <Card className="p-8 text-center card-glass hover-lift h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan/10 mb-6">
                    <Globe className="w-8 h-8 text-cyan" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Reseller Partners</h3>
                  <p className="text-foreground/70">Deliver Filigran solutions to your customers</p>
                </Card>
              </Link>
            </div>

            <div ref={technologyRef} id="technology">
              <Link to="/partners/mssp-partners" className="block h-full">
                <Card className="p-8 text-center card-glass hover-lift h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan/10 mb-6">
                    <TrendingUp className="w-8 h-8 text-cyan" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Service Partners</h3>
                  <p className="text-foreground/70">Professional services and consulting</p>
                </Card>
              </Link>
            </div>

            <div ref={marketplacesRef} id="marketplaces">
              <Link to="/partners/marketplaces" className="block h-full">
                <Card className="p-8 text-center card-glass hover-lift h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan/10 mb-6">
                    <Award className="w-8 h-8 text-cyan" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Strategic Partners</h3>
                  <p className="text-foreground/70">Long-term collaboration and innovation</p>
                </Card>
              </Link>
            </div>
          </div>

          {/* Benefits */}
          <section className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Partner Benefits</h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Access exclusive resources, training, and support to grow your business 
                with Filigran.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 card-glass">
                <h3 className="text-2xl font-bold mb-4 text-cyan">Revenue Growth</h3>
                <ul className="space-y-3 text-foreground/70">
                  <li>• Competitive margins</li>
                  <li>• Deal registration program</li>
                  <li>• Co-marketing opportunities</li>
                  <li>• Lead generation support</li>
                </ul>
              </Card>

              <Card className="p-8 card-glass">
                <h3 className="text-2xl font-bold mb-4 text-cyan">Technical Support</h3>
                <ul className="space-y-3 text-foreground/70">
                  <li>• Partner enablement portal</li>
                  <li>• Technical documentation</li>
                  <li>• Pre-sales assistance</li>
                  <li>• Priority support tickets</li>
                </ul>
              </Card>

              <Card className="p-8 card-glass">
                <h3 className="text-2xl font-bold mb-4 text-cyan">Training & Certification</h3>
                <ul className="space-y-3 text-foreground/70">
                  <li>• Sales training programs</li>
                  <li>• Technical certifications</li>
                  <li>• Regular webinars</li>
                  <li>• Partner community access</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Featured Partners Logos */}
          <section className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Trusted By Industry Leaders</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <Card key={i} className="p-8 card-glass hover-lift flex items-center justify-center h-32">
                  <div className="w-32 h-16 bg-gradient-to-r from-cyan/20 to-cyan/10 rounded-lg" />
                </Card>
              ))}
            </div>
          </section>

          {/* CTA */}
          <Card className="p-16 text-center card-glass">
            <h2 className="text-4xl font-bold mb-6">Become a Partner</h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Join our ecosystem and help organizations worldwide strengthen their 
              cybersecurity posture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-cyan hover:bg-cyan-glow text-background px-8"
              >
                <Link to="/book-demo">Apply Now</Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-cyan text-cyan hover:bg-cyan hover:text-background px-8"
              >
                <Link to="/book-demo">Partner Portal</Link>
              </Button>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Partners;
