import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cloud, Headphones, Award, GraduationCap, Check, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const primaryOfferings = [
  {
    id: 'saas',
    icon: Cloud,
    title: 'Software as a Service',
    description:
      'Filigran provides fully managed private cloud instances for every module in the XTM suite, operated by the engineers who build the products.',
    features: [
      'Dedicated tenant per customer',
      'Managed updates and hardened infrastructure',
      '24/7 monitoring and compliance controls',
      'Regional hosting options'
    ],
    cta: 'Get Started'
  },
  {
    id: 'opencti-ee',
    icon: Award,
    title: 'OpenCTI Enterprise Edition',
    description:
      'Advanced capabilities for intelligence-led organizations that require deeper governance, automation and AI copilots.',
    features: [
      'Agentic AI for reporting and triage',
      'Granular RBAC and audit logging',
      'Automations and playbook templates',
      'Enterprise-grade dashboards'
    ],
    cta: 'Contact Sales'
  }
];

const secondaryOfferings = [
  {
    id: 'support',
    icon: Headphones,
    title: 'Support & Services',
    description:
      'Technical account managers, solution architects and success engineers who accelerate integrations and change management.',
    features: ['24/7 expert support', 'Integration workshops', 'Platform health checks', 'Customer advisory councils']
  },
  {
    id: 'openaev-ee',
    icon: Shield,
    title: 'OpenAEV Enterprise Edition',
    description:
      'Bring prioritized adversarial scenarios into every crisis rehearsal and exposure validation program.',
    features: [
      'AI-authored attack scenarios',
      'Threat library mapped to MITRE ATT&CK',
      'Team and process benchmarking',
      'Closed-loop remediation workflows'
    ]
  },
  {
    id: 'academy',
    icon: GraduationCap,
    title: 'Filigran Academy',
    description:
      'Certifications and workshops designed for analysts, detection engineers and program leads adopting the XTM suite.',
    features: ['Self-paced e-learning', 'Instructor-led bootcamps', 'Role-based certifications', 'Hands-on labs']
  }
];

const Offerings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Our <span className="text-gradient-cyan">Offerings</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Comprehensive solutions to empower your security operations - from fully 
              managed SaaS to enterprise features and expert support.
            </p>
          </div>

          {/* Main Offerings */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {primaryOfferings.map((offering) => (
              <Card
                key={offering.id}
                id={offering.id}
                className={`p-10 card-glass hover-lift ${offering.id === 'opencti-ee' ? 'border-2 border-cyan/30' : ''}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan/10 mb-6">
                  <offering.icon className="w-8 h-8 text-cyan" />
                </div>
                <h2 className="text-3xl font-bold mb-4">{offering.title}</h2>
                <p className="text-lg text-foreground/70 mb-6 leading-relaxed">{offering.description}</p>
                <ul className="space-y-3 mb-8">
                  {offering.features.map((feature) => (
                    <FeatureItem key={feature}>{feature}</FeatureItem>
                  ))}
                </ul>
                <Button asChild className="bg-cyan hover:bg-cyan-glow text-background w-full">
                  <Link to="/book-demo">{offering.cta}</Link>
                </Button>
              </Card>
            ))}
          </div>

          {/* Support & Training */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {secondaryOfferings.map((offering) => (
              <Card key={offering.id} id={offering.id} className="p-10 card-glass hover-lift">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan/10 mb-6">
                  <offering.icon className="w-8 h-8 text-cyan" />
                </div>
                <h2 className="text-3xl font-bold mb-4">{offering.title}</h2>
                <p className="text-lg text-foreground/70 mb-6 leading-relaxed">{offering.description}</p>
                <ul className="space-y-3 mb-8">
                  {offering.features.map((feature) => (
                    <FeatureItem key={feature}>{feature}</FeatureItem>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="border-cyan text-cyan hover:bg-cyan hover:text-background w-full"
                >
                  <Link to="/book-demo">Learn More</Link>
                </Button>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <Card className="p-16 text-center card-glass">
            <h2 className="text-4xl font-bold mb-6">Not Sure Which Is Right for You?</h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Our team can help you choose the perfect offering for your organization's needs.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-cyan hover:bg-cyan-glow text-background px-8 py-6"
            >
              <Link to="/book-demo">Schedule a Consultation</Link>
            </Button>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const FeatureItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <Check className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
    <span className="text-foreground/80">{children}</span>
  </li>
);

export default Offerings;
