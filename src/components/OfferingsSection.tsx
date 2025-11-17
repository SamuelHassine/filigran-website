import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cloud, Headphones, Award, GraduationCap, Shield } from 'lucide-react';

export const OfferingsSection = () => {
  const offerings = [
    {
      icon: Award,
      title: "OpenCTI Enterprise Edition",
      description: "Advanced governance, RBAC, audit logging and AI assistants purpose-built for CTI leaders.",
      link: "/offerings/opencti-enterprise-edition",
    },
    {
      icon: Shield,
      title: "OpenAEV Enterprise Edition",
      description: "Agentic AEV workflows with prioritized attack libraries and automatic remediation insights.",
      link: "/offerings/openaev-enterprise-edition",
    },
    {
      icon: Shield,
      title: "OpenGRC Enterprise Edition",
      description: "Risk quantification, compliance workspaces and board-ready reporting for GRC leaders.",
      link: "/offerings/opengrc-enterprise-edition",
    },
    {
      icon: Cloud,
      title: "Software as a Service",
      description:
        "Private cloud instances for every Filigran product, operated and secured by Filigran engineers.",
      link: "/offerings/software-as-a-service",
    },
    {
      icon: Headphones,
      title: "Support & Services",
      description: "Tiered assistance, solution architects and integration workshops tailored to your maturity.",
      link: "/offerings/professional-support-packages",
    },
    {
      icon: GraduationCap,
      title: "Filigran Academy",
      description: "Instructor-led programs and on-demand certifications for analysts, engineers and executives.",
      link: "/offerings/filigran-academy",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-primary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our offerings</h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Explore Filigran's comprehensive offerings, spanning from SaaS and support packages 
            to Enterprise Editions and tailored training courses. Empowering organizations to 
            seamlessly operate on the eXtended Threat Management (XTM) suite.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((offering) => {
            const Icon = offering.icon;
            return (
              <Card 
                key={offering.title} 
                className="p-8 card-glass hover-lift group flex flex-col"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-cyan/10 mb-6 group-hover:bg-cyan/20 transition-colors">
                  <Icon className="w-7 h-7 text-cyan" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{offering.title}</h3>
                
                <p className="text-foreground/70 mb-6 leading-relaxed flex-grow">
                  {offering.description}
                </p>

                <Button asChild variant="outlineGlow" className="justify-between px-5">
                  <Link to={offering.link} className="inline-flex items-center justify-between w-full group/btn">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
