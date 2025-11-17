import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, Bot, Palette, Code, Lock, Zap, Users } from "lucide-react";
import checkGreenIcon from "@/assets/icons/check-green.svg";
import crossRedIcon from "@/assets/icons/cross-red.svg";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const featureHighlights: Feature[] = [
  {
    icon: <Bot className="h-7 w-7 text-cyan" />,
    title: "Custom AI Agents",
    description: "Build and deploy your own AI agents tailored to your specific security workflows, processes, and threat landscape."
  },
  {
    icon: <Palette className="h-7 w-7 text-cyan" />,
    title: "White-Label UI",
    description: "Fully customizable interface with your branding, color schemes, and layout preferences for seamless integration."
  },
  {
    icon: <Code className="h-7 w-7 text-cyan" />,
    title: "Prompt Engineering Studio",
    description: "Advanced prompt customization tools to fine-tune AI responses for your organization's specific terminology and requirements."
  },
  {
    icon: <Lock className="h-7 w-7 text-cyan" />,
    title: "Private LLM Deployment",
    description: "Deploy your own LLM instances with complete data isolation and compliance with your security policies."
  },
  {
    icon: <Zap className="h-7 w-7 text-cyan" />,
    title: "Custom Integrations",
    description: "Build proprietary connectors and workflows that integrate with your internal tools and processes."
  },
  {
    icon: <Users className="h-7 w-7 text-cyan" />,
    title: "Dedicated Success Team",
    description: "Expert AI engineers and solution architects dedicated to your platform's success and continuous improvement."
  }
];

interface ComparisonRow {
  feature: string;
  standard: boolean | string;
  dedicated: boolean | string;
  type: "boolean" | "text";
}

const comparisonData: ComparisonRow[] = [
  { feature: "XTM One access", standard: true, dedicated: true, type: "boolean" },
  { feature: "Pre-built AI agents", standard: true, dedicated: true, type: "boolean" },
  { feature: "Standard integrations", standard: true, dedicated: true, type: "boolean" },
  { feature: "Custom AI agents", standard: false, dedicated: true, type: "boolean" },
  { feature: "Agent behavior customization", standard: "Limited", dedicated: "Full", type: "text" },
  { feature: "Prompt customization", standard: false, dedicated: true, type: "boolean" },
  { feature: "UI customization", standard: "Themes only", dedicated: "Full white-label", type: "text" },
  { feature: "Custom workflows", standard: false, dedicated: true, type: "boolean" },
  { feature: "Private LLM deployment", standard: false, dedicated: true, type: "boolean" },
  { feature: "Data isolation", standard: "Multi-tenant", dedicated: "Single-tenant", type: "text" },
  { feature: "Custom integrations", standard: false, dedicated: true, type: "boolean" },
  { feature: "API rate limits", standard: "Standard", dedicated: "Unlimited", type: "text" },
  { feature: "Training data control", standard: false, dedicated: true, type: "boolean" },
  { feature: "Model fine-tuning", standard: false, dedicated: true, type: "boolean" },
  { feature: "Dedicated infrastructure", standard: false, dedicated: true, type: "boolean" },
  { feature: "Support", standard: "Business hours", dedicated: "24/7 dedicated team", type: "text" }
];

const renderComparisonCell = (row: ComparisonRow, column: "standard" | "dedicated") => {
  if (row.type === "boolean") {
    const value = row[column];
    if (value) {
      return (
        <div className="flex justify-center">
          <img src={checkGreenIcon} alt="Check" className="h-5 w-5" />
        </div>
      );
    } else {
      return (
        <div className="flex justify-center">
          <img src={crossRedIcon} alt="Cross" className="h-5 w-5" />
        </div>
      );
    }
  } else {
    return <span className="text-foreground/70">{row[column]}</span>;
  }
};

const DedicatedAgenticPlatform = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pb-24">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "#090624",
                backgroundImage:
                  "radial-gradient(96.21% 108.44% at 94.34% 113.69%, #B77BFF 2%, #7B3FF2 32%, rgba(123, 63, 242, 0.54) 63%, rgba(123, 63, 242, 0) 100%)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 left-0 h-[480px] w-[480px] rounded-full bg-purple-500/20 blur-[180px]" />
              <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-purple-700/20 blur-[210px]" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                <span className="text-sm font-semibold text-purple-400">XTM One Custom Deployment</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold">Agentic AI Platform</h1>
              <p className="text-xl lg:text-2xl text-foreground/70 leading-relaxed">
                Your own customizable XTM One instance with tailored AI agents, 
                white-label UI, and complete control over prompts and workflows.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button asChild variant="cta" size="lg" className="px-8">
                  <Link to="/company/contact">Request Custom Demo</Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="px-8">
                  <Link to="/platforms/xtm-one">Explore XTM One</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8 space-y-10">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-foreground/50">Tailored for Enterprise</p>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Your AI, Your Rules, Your Platform
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Build a truly unique agentic security platform that reflects your organization's 
                expertise, processes, and strategic priorities.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featureHighlights.map((feature) => (
                <Card key={feature.title} className="border border-white/10 bg-card/80 backdrop-blur-xl p-6 space-y-4">
                  <div className="h-12 w-12 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
                </Card>
              ))}
            </div>

            <Card className="mt-6 p-6 border-white/10 bg-gradient-to-br from-purple-500/10 to-purple-700/10 backdrop-blur-xl">
              <h3 className="text-xl font-semibold mb-3">Ready to build your custom platform?</h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                Let's discuss how an Agentic AI Platform can transform your security operations.
              </p>
              <Button asChild variant="secondary" className="w-full md:w-auto">
                <Link to="/company/contact">Schedule consultation</Link>
              </Button>
            </Card>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gradient-to-b from-purple-500/5 to-transparent">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Built for Unique Requirements
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Perfect for organizations with specific compliance needs, proprietary methodologies, 
                or unique operational requirements.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-8 border-white/10 bg-card/80 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-4">Financial Services</h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                  Custom agents for regulatory compliance, fraud detection, and risk assessment 
                  with industry-specific terminology and workflows.
                </p>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>PCI-DSS compliance automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Custom fraud pattern detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Regulatory reporting agents</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-white/10 bg-card/80 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-4">Government & Defense</h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                  Air-gapped deployments with classification-aware agents and strict 
                  data sovereignty requirements.
                </p>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Classification-aware processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Air-gapped deployment options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Custom threat taxonomies</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-white/10 bg-card/80 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-4">Critical Infrastructure</h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                  Specialized agents for OT/IT convergence, industrial control systems, 
                  and sector-specific threat intelligence.
                </p>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>ICS/SCADA security agents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>OT-specific threat modeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Supply chain risk automation</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "#090624",
                backgroundImage:
                  "radial-gradient(96.21% 108.44% at 94.34% 113.69%, #B77BFF 2%, #7B3FF2 32%, rgba(123, 63, 242, 0.54) 63%, rgba(123, 63, 242, 0) 100%)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.3
              }}
            />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4 lg:px-8 space-y-10">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-foreground/50">Platform Comparison</p>
              <h2 className="text-3xl lg:text-4xl font-bold">Complete control and customization</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                See how the Agentic AI Platform compares to our standard XTM One offering.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-white/10 bg-card/80 backdrop-blur-xl">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50%]">Features</TableHead>
                      <TableHead className="text-center">Standard XTM One</TableHead>
                      <TableHead className="text-center">
                        <span className="text-purple-400">Dedicated Platform</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-center">{renderComparisonCell(row, "standard")}</TableCell>
                        <TableCell className="text-center">{renderComparisonCell(row, "dedicated")}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Your Journey to a Custom Platform
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Our expert team guides you through every step of building and deploying 
                your dedicated agentic platform.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="relative">
                  <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl h-full">
                    <div className="text-5xl font-bold text-purple-400 mb-4">01</div>
                    <h3 className="text-lg font-semibold mb-2">Discovery</h3>
                    <p className="text-foreground/70 text-sm">
                      Deep dive into your requirements, workflows, and integration needs
                    </p>
                  </Card>
                </div>

                <div className="relative">
                  <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl h-full">
                    <div className="text-5xl font-bold text-purple-400 mb-4">02</div>
                    <h3 className="text-lg font-semibold mb-2">Design</h3>
                    <p className="text-foreground/70 text-sm">
                      Architect custom agents, UI components, and integration patterns
                    </p>
                  </Card>
                </div>

                <div className="relative">
                  <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl h-full">
                    <div className="text-5xl font-bold text-purple-400 mb-4">03</div>
                    <h3 className="text-lg font-semibold mb-2">Build</h3>
                    <p className="text-foreground/70 text-sm">
                      Develop and test your custom platform with iterative feedback
                    </p>
                  </Card>
                </div>

                <div className="relative">
                  <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl h-full">
                    <div className="text-5xl font-bold text-purple-400 mb-4">04</div>
                    <h3 className="text-lg font-semibold mb-2">Deploy</h3>
                    <p className="text-foreground/70 text-sm">
                      Launch with full training, documentation, and ongoing support
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Offerings */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Explore related offerings</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Discover how our other enterprise solutions can complement your custom platform.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Link to="/offerings/software-as-a-service" className="group">
                <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl h-full hover:border-purple-500/50 transition-all">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                    Software as a Service
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    Fully managed cloud instances for standard deployments without customization needs.
                  </p>
                  <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>

              <Link to="/offerings/professional-support-packages" className="group">
                <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl h-full hover:border-purple-500/50 transition-all">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                    Professional Support
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    24/7 dedicated support team to ensure your platform operates at peak performance.
                  </p>
                  <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>

              <Link to="/offerings/filigran-academy" className="group">
                <Card className="p-6 border-white/10 bg-card/80 backdrop-blur-xl h-full hover:border-purple-500/50 transition-all">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                    Custom Training Programs
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    Tailored training for your team on your custom platform and workflows.
                  </p>
                  <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-4 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-purple-700/20" />
          </div>

          <div className="container relative z-10 mx-auto">
            <Card className="max-w-4xl mx-auto p-12 border-white/10 bg-card/80 backdrop-blur-xl text-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Build Your Vision
              </h2>
              <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                Transform your security operations with a platform that's uniquely yours. 
                Let's discuss how an Agentic AI Platform can meet your exact requirements.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" variant="cta" className="px-8">
                  <Link to="/company/contact">Start Your Custom Journey</Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="px-8">
                  <Link to="/platforms/xtm-one">Learn About XTM One</Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DedicatedAgenticPlatform;
