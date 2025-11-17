import type { ElementType } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              About <span className="text-gradient-cyan">Filigran</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              We are pioneering the future of eXtended Threat Management (XTM), empowering 
              organizations worldwide to uncover threats and take decisive action.
            </p>
          </div>

          {/* Mission */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                  At Filigran, we believe that effective cybersecurity requires continuous visibility, 
                  intelligent analysis, and rapid response capabilities. Our mission is to provide 
                  organizations with the tools they need to stay ahead of evolving threats.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Through our open-source platforms and enterprise solutions, we're building a global 
                  community of security professionals who share knowledge, best practices, and threat 
                  intelligence to create a safer digital world.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-cyan/10 rounded-2xl blur-3xl" />
                <Card className="relative p-12 card-glass">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-cyan mb-2">6K+</div>
                      <div className="text-sm text-foreground/60">Organizations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-5xl font-bold text-cyan mb-2">150+</div>
                      <div className="text-sm text-foreground/60">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-5xl font-bold text-cyan mb-2">300+</div>
                      <div className="text-sm text-foreground/60">Connectors</div>
                    </div>
                    <div className="text-center">
                      <div className="text-5xl font-bold text-cyan mb-2">24/7</div>
                      <div className="text-sm text-foreground/60">Support</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="mb-32">
            <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ValueCard
                icon={Users}
                title="Community First"
                description="We build with and for our community, fostering collaboration and knowledge sharing."
              />
              <ValueCard
                icon={Target}
                title="Innovation"
                description="Pushing boundaries with cutting-edge AI and threat intelligence technologies."
              />
              <ValueCard
                icon={Award}
                title="Excellence"
                description="Committed to delivering enterprise-grade solutions that exceed expectations."
              />
              <ValueCard
                icon={Globe}
                title="Open Source"
                description="Believing in transparency and the power of open-source collaboration."
              />
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Leadership Team</h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Our team brings together decades of experience in cybersecurity, 
                threat intelligence, and enterprise software development.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <TeamCard
                name="Samuel Hassine"
                role="CEO & Co-Founder"
                description="Cybersecurity expert with 15+ years of experience in threat intelligence."
              />
              <TeamCard
                name="Julien Richard"
                role="CTO & Co-Founder"
                description="Technology leader specializing in distributed systems and security architecture."
              />
              <TeamCard
                name="Luatix"
                role="Lead Developer"
                description="Open-source advocate driving innovation in threat management platforms."
              />
            </div>
          </section>

          {/* Join Us */}
          <section>
            <Card className="p-16 text-center card-glass">
              <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
              <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who are passionate about 
                cybersecurity and want to make a difference.
              </p>
              <a 
                href="/careers" 
                className="inline-block px-8 py-4 bg-cyan hover:bg-cyan-glow text-background font-semibold rounded-lg transition-all duration-300 hover-lift"
              >
                View Open Positions
              </a>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const ValueCard = ({ icon: Icon, title, description }: { icon: ElementType; title: string; description: string }) => (
  <Card className="p-8 card-glass hover-lift text-center">
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan/10 mb-6">
      <Icon className="w-8 h-8 text-cyan" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-foreground/70">{description}</p>
  </Card>
);

const TeamCard = ({ name, role, description }: { name: string; role: string; description: string }) => (
  <Card className="p-8 card-glass hover-lift">
    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan to-cyan-glow mb-6 mx-auto" />
    <h3 className="text-xl font-bold mb-2 text-center">{name}</h3>
    <p className="text-cyan text-sm mb-4 text-center">{role}</p>
    <p className="text-foreground/70 text-center">{description}</p>
  </Card>
);

export default About;
